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


