"use server";

import { parseTripFormData } from "@/lib/trips/form-data";
import { updateTrip } from "@/lib/trips/repository";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { ObjectId } from "mongodb";
import type { TripFormState } from "@/app/create-trip/actions";

export async function editTripAction(
  _previousState: TripFormState,
  formData: FormData,
): Promise<TripFormState> {
  const tripId = formData.get("tripId");
  if (typeof tripId !== "string" || !ObjectId.isValid(tripId)) {
    return { message: "This trip could not be found." };
  }

  const result = parseTripFormData(formData);
  if (!result) {
    return {
      message: "Expenses could not be read. Please review them and try again.",
    };
  }
  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
      message: "Please correct the fields marked below.",
    };
  }

  const updated = await updateTrip(tripId, result.data, "demo-user");
  if (!updated) {
    return { message: "This trip no longer exists or cannot be edited." };
  }

  revalidatePath("/");
  revalidatePath(`/trips/${tripId}`);
  redirect(`/trips/${tripId}`);
}
