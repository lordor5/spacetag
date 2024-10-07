// import type { APIRoute } from "astro";

const fotos = [1, 2, 3, 4];

export async function POST(context) {
  const formData = await context.request.formData();
  const jugador = formData.get("jugador");

  const db = context.locals.runtime.env.DB;
  //   const result = await db.prepare("SELECT * FROM dispositivos").run();

  const ganador = await db
    .prepare(`SELECT * FROM usuarios WHERE nombre = '${jugador}'`)
    .run();

  await db
    .prepare(
      `UPDATE usuarios SET puntos = ${ganador.results[0].puntos + 1} WHERE nombre = '${jugador}'`
    )
    .run();

  const { results } = await db.prepare(`SELECT * FROM dispositivos`).run();
  const dispositivos = results;
  console.log(dispositivos);

  for (let i = 0; i < dispositivos.length; i++) {
    const randomImage = Math.floor(Math.random() * fotos.length);
    await db
      .prepare(
        `UPDATE dispositivos SET imagen = ${fotos[randomImage]} WHERE id = ${dispositivos[i].id}`
      )
      .run();
  }

  //   const data = await request.formData();
  //   const nmovil = data.get("nmovil");
  //   // Validate the data - you'll probably want to do more than this
  //   if (!nmovil) {
  //     return new Response(
  //       JSON.stringify({
  //         message: "Missing required fields",
  //       }),
  //       { status: 400 }
  //     );
  //   }
  //   // Do something with the data, then return a success response
  //   //const query1 = db.prepare("SELECT MAX(ID) from ID");
  //   //const maxid = await query1.first("maxid");

  //   const query = db.prepare("INSERT INTO ID (ID, NumeroFoto) VALUES (?1, ?2) ON CONFLICT (ID) DO UPDATE SET NumeroFoto = ?2;").bind(nmovil,0).run();

  return new Response(null, {
    status: 302, // Use 301 for a permanent redirect
    headers: {
      Location: "/index2", // The URL to redirect to
    },
  });
}
