import { tripCreateSchema } from "./schema";

export function parseTripFormData(formData: FormData) {
  const submittedFields = Object.fromEntries(formData);
  const expensesJson = formData.get("expenses");

  let expenses: unknown;
  try {
    expenses = JSON.parse(
      typeof expensesJson === "string" ? expensesJson : "[]",
    );

    if (Array.isArray(expenses)) {
      expenses = expenses.map((expense) => ({
        ...expense,
        amount: expense.amount === "" ? Number.NaN : Number(expense.amount),
      }));
    }
  } catch {
    return null;
  }

  return tripCreateSchema.safeParse({
    ...submittedFields,
    expenses,
  });
}
