import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import type { TripExpense, ValidatedTripInput } from "./schema";

export type TripDocument = Omit<ValidatedTripInput, "expenses"> & {
    createdBy: string;
    createdAt: Date;
    expenses?: TripExpense[];
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

export async function updateTrip(
    tripId: string,
    trip: ValidatedTripInput,
    creatorId: string,
) {
    const client = await clientPromise;
    const db = client.db("tripLedger");

    const result = await db.collection<TripDocument>("Trips").updateOne(
        { _id: new ObjectId(tripId), createdBy: creatorId },
        { $set: trip },
    );

    return result.matchedCount > 0;
}

export async function deleteTrip(tripId: string, creatorId: string) {
    const client = await clientPromise;
    const db = client.db("tripLedger");

    const result = await db.collection<TripDocument>("Trips").deleteOne({
        _id: new ObjectId(tripId),
        createdBy: creatorId,
    });

    return result.deletedCount > 0;
}
