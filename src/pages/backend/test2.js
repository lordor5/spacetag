//import type { APIContext } from "astro";

export async function GET(context) {
  const db = context.locals.runtime.env.DB;
  const result = await db.prepare("SELECT * FROM cosas WHERE cosa = 12;").run();
  console.log(result.results);

  return new Response(JSON.stringify(result.results), { status: 500 });
}
