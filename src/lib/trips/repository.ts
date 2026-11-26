import clientPromise from "@/lib/mongodb";
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
