import { MongoClient } from "mongodb";
console.log("test");
const connectionString = process.env.ATLAS_URI || "";

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}
console.log(conn)
let db = conn.db("sample_training");

export default db;