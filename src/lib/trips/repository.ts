import clientPromise from "@/lib/mongodb";
import type { ValidatedTripInput } from "./schema"

export type TripDocument = ValidatedTripInput & {
    createdBy: string;
    createdAt: Date;
}
export async function createTrip(trip: ValidatedTripInput, creatorId: string) {
    const client = await clientPromise;
    const db = client.db("tripLedger");

    const tripDocument: TripDocument = {
        ...trip,
        createdBy: creatorId,
        createdAt: new Date(),
    }
    const result = await db
        .collection<TripDocument>("Trips")
        .insertOne(tripDocument)

    return {
        ...tripDocument,
        _id: result.insertedId
    }
}
