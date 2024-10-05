//import type { APIContext } from "astro";

export async function GET(context) {
  const db = context.locals.runtime.env.DB;
  const result = await db.prepare("SELECT * FROM usuarios WHERE id = 0;").run();
  console.log(result.results);
  const result2 = await db.prepare("SELECT * FROM usuarios WHERE id = 1;").run();
  console.log(result2.results);

  return new Response(JSON.stringify(result.results), { status: 500 });
}
