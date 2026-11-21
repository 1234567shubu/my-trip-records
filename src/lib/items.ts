import clientPromise from "@/lib/mongodb";
import type { Trip } from "@/data/trips";

export async function getItems() {
  const client = await clientPromise;
  const db = client.db("tripLedger");

  return db.collection<Trip>("Trips").find({}).limit(20).toArray();
}
