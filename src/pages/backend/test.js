// import type { APIRoute } from "astro";

// var idsfotos = { 1:"a", 2:"a", 3:"a", 4:"a", 5:"a" }

// export const POST: APIRoute = async ({ request }) => {
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

//   return new Response(
//     JSON.stringify({
//       message: "Success!"
//     }),
//     { status: 200 }
//   );
// };
