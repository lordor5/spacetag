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

  return new Response(null, {
    status: 302, // Use 301 for a permanent redirect
    headers: {
      Location: "/", // The URL to redirect to
    },
  });
}
