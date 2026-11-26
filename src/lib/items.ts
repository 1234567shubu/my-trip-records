import clientPromise from "@/lib/mongodb";
import type { TripDocument } from "./trips/repository";
import { ObjectId } from "mongodb";

export async function getItems() {
  const client = await clientPromise;
  const db = client.db("tripLedger");

  return db.collection<TripDocument>("Trips").find({}).limit(20).toArray();
}

export async function getTripDetails(tripId: string) {
  const client = await clientPromise;
  const db = client.db("tripLedger");

  return db.collection<TripDocument>("Trips").findOne({_id: new ObjectId(tripId)})

}
