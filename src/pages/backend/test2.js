//import type { APIContext } from "astro";

export async function GET(context) {
  const db = context.locals.runtime.env.DB;
  const result = await db.prepare("SELECT * FROM cosas WHERE cosa = 12;").run();
  console.log(result.results);
  //   try {
  //     // Prepare and execute the SQL query using Cloudflare D1 API
  //     const result = await db.prepare("SELECT * FROM ID").all();

  //     console.log(result.results); // Log the results
  //     return new Response(JSON.stringify(result.results), {
  //       headers: { "Content-Type": "application/json" },
  //     });
  //   } catch (error) {
  //     console.error("Database error:", error);
  return new Response(JSON.stringify(result.results), { status: 500 });
  //   }
}
