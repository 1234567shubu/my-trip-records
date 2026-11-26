import { Trash2 } from "lucide-react";
import type { TripExpense } from "@/lib/trips/schema";

export type ExpenseDraft = Omit<TripExpense, "amount"> & {
  amount: string;
};

type ExpenseFieldsProps = {
  expense: ExpenseDraft;
  index: number;
  onChange: (expense: ExpenseDraft) => void;
  onRemove: () => void;
};

export function ExpenseFields({
  expense,
  index,
  onChange,
  onRemove,
}: ExpenseFieldsProps) {
  const inputClassName =
    "mt-1.5 block w-full rounded-md border border-hairline bg-white px-3.5 py-2.5 text-sm text-earth shadow-sm outline-none transition placeholder:text-muted-earth/60 focus:border-olive focus:ring-2 focus:ring-olive/15";
  const labelClassName = "text-[11px] font-semibold tracking-wide text-olive";

  return (
    <fieldset className="rounded-md border border-hairline bg-[#fffefa] p-4 sm:p-5">
      <legend className="px-2 text-xs font-semibold text-olive">
        Expense {index + 1}
      </legend>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className={labelClassName} htmlFor={`expense-title-${expense.id}`}>
            Expense name
          </label>
          <input
            className={inputClassName}
            id={`expense-title-${expense.id}`}
            type="text"
            placeholder="Lunch at Nishiki Market"
            value={expense.title}
            onChange={(event) => onChange({ ...expense, title: event.target.value })}
          />
        </div>

        <div>
          <label className={labelClassName} htmlFor={`expense-amount-${expense.id}`}>
            Amount
          </label>
          <input
            className={inputClassName}
            id={`expense-amount-${expense.id}`}
            type="number"
            min="0"
            step="1"
            placeholder="1000"
            value={expense.amount}
            onChange={(event) => onChange({ ...expense, amount: event.target.value })}
          />
        </div>

        <div>
          <label className={labelClassName} htmlFor={`expense-date-${expense.id}`}>
            Date
          </label>
          <input
            className={inputClassName}
            id={`expense-date-${expense.id}`}
            type="date"
            value={expense.date}
            onChange={(event) => onChange({ ...expense, date: event.target.value })}
          />
        </div>

        <div>
          <label className={labelClassName} htmlFor={`expense-payer-${expense.id}`}>
            Paid by
          </label>
          <input
            className={inputClassName}
            id={`expense-payer-${expense.id}`}
            type="text"
            placeholder="Ashok"
            value={expense.payer}
            onChange={(event) => onChange({ ...expense, payer: event.target.value })}
          />
        </div>

        <div>
          <label className={labelClassName} htmlFor={`expense-note-${expense.id}`}>
            Split note
          </label>
          <input
            className={inputClassName}
            id={`expense-note-${expense.id}`}
            type="text"
            placeholder="Split with 3 travelers"
            value={expense.note}
            onChange={(event) => onChange({ ...expense, note: event.target.value })}
          />
        </div>
      </div>

      <div className="mt-4 flex justify-end">
        <button
          className="inline-flex items-center gap-2 text-sm font-semibold text-rust transition hover:text-olive"
          type="button"
          onClick={onRemove}
          aria-label={`Remove expense ${index + 1}`}
        >
          <Trash2 size={16} aria-hidden="true" />
          Remove expense
        </button>
      </div>
    </fieldset>
  );
}
