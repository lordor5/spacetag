//import type { APIContext } from "astro";

export async function GET(context) {
  const db = context.locals.runtime.env.DB;
  //const result = await db.prepare("SELECT * FROM usuarios").run();
  //console.log(result.results);
  const write = await db.prepare("INSERT INTO usuarios (nombre, puntos) value (?1, ?2)").bind("pablogamer", 100).run();

  return new Response(JSON.stringify(result.results), { status: 500 });
}
