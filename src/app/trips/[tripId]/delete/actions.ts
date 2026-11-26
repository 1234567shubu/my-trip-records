"use server";

import { deleteTrip } from "@/lib/trips/repository";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { ObjectId } from "mongodb";

export type DeleteTripState = {
  message?: string;
};

export async function deleteTripAction(
  _previousState: DeleteTripState,
  formData: FormData,
): Promise<DeleteTripState> {
  const tripId = formData.get("tripId");
  if (typeof tripId !== "string" || !ObjectId.isValid(tripId)) {
    return { message: "This trip could not be found." };
  }

  const deleted = await deleteTrip(tripId, "demo-user");
  if (!deleted) {
    return { message: "This trip no longer exists or cannot be deleted." };
  }

  revalidatePath("/");
  revalidatePath(`/trips/${tripId}`);
  redirect("/");
}
