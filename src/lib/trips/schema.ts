import { z } from "zod";

export const tripCreateSchema = z
  .object({
    place: z.string().trim().min(1, "Place is required").max(100),
    country: z.string().trim().min(1, "Country is required").max(100),
    startDate: z.iso.date(),
    endDate: z.iso.date(),
    description: z
      .string()
      .trim()
      .min(1, "Description is required")
      .max(2000),
    companions: z
      .string()
      .trim()
      .max(500, "Companions must be 500 characters or fewer")
      .transform((value) =>
        value
          .split(",")
          .map((name) => name.trim())
          .filter(Boolean),
      ),
    spent: z
      .string()
      .trim()
      .min(1, "Total spent is required")
      .max(40, "Total spent must be 40 characters or fewer"),
    image: z
      .union([z.httpUrl(), z.literal("")])
      .optional()
      .transform((value) => value || undefined),
  })
  .refine((trip) => trip.endDate >= trip.startDate, {
    path: ["endDate"],
    message: "End date must be on or after the start date",
  })
  
export type TripInput = z.input<typeof tripCreateSchema>;
export type ValidatedTripInput = z.output<typeof tripCreateSchema>;


