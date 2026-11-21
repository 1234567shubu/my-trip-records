"use server";

import { createTrip } from "@/lib/trips/repository";
import { tripCreateSchema } from "@/lib/trips/schema";
import { redirect } from "next/navigation";

export type TripFormState = {
    errors?: Record<string, string[] | undefined>;
    message?: string;
};

export async function createTripAction(
    _previousState: TripFormState,
    formData: FormData,
): Promise<TripFormState> {
    const result = tripCreateSchema.safeParse(
        Object.fromEntries(formData),
    );

    if (!result.success) {
        return {
            errors: result.error.flatten().fieldErrors,
            message: "Please correct the fields marked below.",
        };
    }

    await createTrip(result.data, 'demo-user')

    redirect("/")
}
