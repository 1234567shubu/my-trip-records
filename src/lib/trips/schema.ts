import { z } from "zod";

export const tripExpenseSchema = z.object({
  id: z.string().trim().min(1, "Expense ID is required"),
  title: z.string().trim().min(1, "Expense title is required"),
  amount: z.number().nonnegative("Amount cannot be negative"),
  note: z.string().trim(),
  payer: z.string().trim().min(1, "Payer is required"),
  date: z.iso.date(),
});

export type TripExpense = z.output<typeof tripExpenseSchema>;

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
    expenses: z.array(tripExpenseSchema).default([]),
  })
  .refine((trip) => trip.endDate >= trip.startDate, {
    path: ["endDate"],
    message: "End date must be on or after the start date",
  })

export type TripInput = z.input<typeof tripCreateSchema>;
export type ValidatedTripInput = z.output<typeof tripCreateSchema>;


