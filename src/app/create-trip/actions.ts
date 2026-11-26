"use server";

import { createTrip } from "@/lib/trips/repository";
import { parseTripFormData } from "@/lib/trips/form-data";
import { redirect } from "next/navigation";

export type TripFormState = {
    errors?: Record<string, string[] | undefined>;
    message?: string;
};

export async function createTripAction(
    _previousState: TripFormState,
    formData: FormData,
): Promise<TripFormState> {
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

    await createTrip(result.data, 'demo-user')

    redirect("/")
}
