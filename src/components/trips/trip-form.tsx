"use client"
import { Navigation } from "@/components/dashboard/navigation";
import Link from "next/link";
import type { TripFormState } from "@/app/create-trip/actions";
import { useActionState, useState } from 'react'
import { Plus } from "lucide-react";
import { ExpenseFields, type ExpenseDraft } from "@/components/trips/expense-fields";
import type { TripExpense } from "@/lib/trips/schema";

export type TripFormInitialValues = {
    place: string;
    country: string;
    startDate: string;
    endDate: string;
    description: string;
    companions: string[];
    spent: string;
    image?: string;
    expenses?: TripExpense[];
};

type TripFormProps = {
    action: (previousState: TripFormState, formData: FormData) => Promise<TripFormState>;
    initialTrip?: TripFormInitialValues;
    mode?: "create" | "edit";
    tripId?: string;
};

export function TripForm({ action, initialTrip, mode = "create", tripId }: TripFormProps) {

    const [state, formAction, pending] = useActionState<TripFormState, FormData>(action, {})

    const [expenseList, setExpenseList] = useState<ExpenseDraft[]>(
        initialTrip?.expenses?.map((expense) => ({
            ...expense,
            amount: String(expense.amount),
        })) ?? [],
    )

    const addExpense = () => {
        setExpenseList((currentExpenses) => [
            ...currentExpenses,
            {
                id: crypto.randomUUID(),
                title: "",
                amount: "",
                note: "",
                payer: "",
                date: "",
            },
        ]);
    };

    const updateExpense = (updatedExpense: ExpenseDraft) => {
        setExpenseList((currentExpenses) =>
            currentExpenses.map((expense) =>
                expense.id === updatedExpense.id ? updatedExpense : expense,
            ),
        );
    };

    const removeExpense = (expenseId: string) => {
        setExpenseList((currentExpenses) =>
            currentExpenses.filter((expense) => expense.id !== expenseId),
        );
    };

    const inputClassName =
        "mt-1.5 block w-full rounded-md border border-hairline bg-white px-3.5 py-2.5 text-sm text-earth shadow-sm outline-none transition placeholder:text-muted-earth/60 focus:border-olive focus:ring-2 focus:ring-olive/15";
    const labelClassName = "text-[11px] font-semibold tracking-wide text-olive";

    return (
        <div id="top" className="flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1 px-5 py-7 sm:px-8 sm:py-9">
                <div className="mx-auto max-w-3xl">
                    <header className="mb-5 flex flex-wrap items-end justify-between gap-3">
                        <div>
                            <p className="mb-1.5 text-[9px] font-bold tracking-[1.8px] text-rust">
                                YOUR NEXT STORY STARTS HERE
                            </p>
                            <h1 className="font-display text-3xl leading-tight tracking-tight text-olive sm:text-4xl">
                                {mode === "create" ? "Create a trip" : "Edit your trip"}<span className="text-clay">.</span>
                            </h1>
                        </div>
                        <p className="max-w-xs text-xs leading-5 text-muted-earth">
                            Add the details you’ll want to remember.
                        </p>
                    </header>

                    <form action={formAction} className="rounded-md border border-hairline bg-[#fffefa] p-4 shadow-[0_12px_35px_rgba(73,57,42,0.06)] sm:p-6">
                        {mode === "edit" && tripId && (
                            <input type="hidden" name="tripId" value={tripId} />
                        )}
                        <input
                            type="hidden"
                            name="expenses"
                            value={JSON.stringify(expenseList)}
                        />
                        <div className="space-y-4">
                            <div>
                                <label className={labelClassName} htmlFor="trip-place">Trip name or place</label>
                                <input
                                    className={inputClassName}
                                    id="trip-place"
                                    name="place"
                                    type="text"
                                    defaultValue={initialTrip?.place}
                                    placeholder="The quiet side of Kyoto"
                                />
                                {state.errors?.place?.[0] && (
                                    <p className="text-red-500 text-xs italic" role="alert">
                                        {state.errors.place[0]}
                                    </p>
                                )}
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className={labelClassName} htmlFor="trip-country">Country</label>
                                    <input className={inputClassName} id="trip-country" name="country" type="text" placeholder="Japan" defaultValue={initialTrip?.country} />
                                    {state.errors?.country?.[0] && (
                                        <p className="text-red-500 text-xs italic" role="alert">
                                            {state.errors.country[0]}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className={labelClassName} htmlFor="trip-start-date">Start date</label>
                                    <input className={inputClassName} id="trip-start-date" name="startDate" type="date" defaultValue={initialTrip?.startDate} />
                                    {state.errors?.startDate?.[0] && (
                                        <p className="text-red-500 text-xs italic" role="alert">
                                            {state.errors.startDate[0]}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label className={labelClassName} htmlFor="trip-end-date">End date</label>
                                    <input className={inputClassName} id="trip-end-date" name="endDate" type="date" defaultValue={initialTrip?.endDate} />
                                    {state.errors?.endDate?.[0] && (
                                        <p className="text-red-500 text-xs italic" role="alert">
                                            {state.errors.endDate[0]}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label className={labelClassName} htmlFor="trip-description">A few words about the trip</label>
                                <textarea
                                    className={`${inputClassName} min-h-20 resize-y leading-5`}
                                    id="trip-description"
                                    name="description"
                                    placeholder="What made this trip memorable?"
                                    rows={2}
                                    defaultValue={initialTrip?.description}
                                />
                                {state.errors?.description?.[0] && (
                                    <p className="text-red-500 text-xs italic" role="alert">
                                        {state.errors.description[0]}
                                    </p>
                                )}
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className={labelClassName} htmlFor="trip-companions">
                                        Companions <span className="font-normal text-muted-earth">(comma-separated)</span>
                                    </label>
                                    <input
                                        className={inputClassName}
                                        id="trip-companions"
                                        name="companions"
                                        type="text"
                                        defaultValue={initialTrip?.companions.join(", ")}
                                        placeholder="Alex, Maya, Sam"
                                    />
                                    {state.errors?.companions?.[0] && (
                                        <p className="text-red-500 text-xs italic" role="alert">
                                            {state.errors.companions[0]}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label className={labelClassName} htmlFor="trip-spent">Total spent</label>
                                    <input
                                        className={inputClassName}
                                        id="trip-spent"
                                        name="spent"
                                        type="text"
                                        placeholder="$1,240"
                                        defaultValue={initialTrip?.spent}
                                    />
                                    {state.errors?.spent?.[0] && (
                                        <p className="text-red-500 text-xs italic" role="alert">
                                            {state.errors.spent[0]}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label className={labelClassName} htmlFor="trip-image">
                                    Cover image URL <span className="font-normal text-muted-earth">(optional)</span>
                                </label>
                                <input
                                    className={inputClassName}
                                    id="trip-image"
                                    name="image"
                                    type="text"
                                    placeholder="https://example.com/your-photo.jpg"
                                    defaultValue={initialTrip?.image ?? ""}
                                />
                                {state.errors?.image?.[0] && (
                                    <p className="text-red-500 text-xs italic" role="alert">
                                        {state.errors.image[0]}
                                    </p>
                                )}
                            </div>

                            <section
                                className="mt-6 border-t border-hairline pt-5"
                                aria-labelledby="expense-section-title"
                            >
                                <header className='mb-4'>
                                    <p className="mb-2 text-[9px] font-bold tracking-[1.8px] text-rust">
                                        SHARED ALONG THE WAY
                                    </p>
                                    <h2
                                        id='expense-section-title'
                                        className="font-display text-2xl text-olive"
                                    >
                                        {mode === "create" ? "Add trip expenses" : "Edit trip expenses"}
                                    </h2>
                                    <p className="mt-2 text-sm text-muted-earth">
                                        Add costs you shared during this trip.
                                    </p>
                                </header>
                                <div className="space-y-4">
                                    {expenseList.map((expense, index) => (
                                        <ExpenseFields
                                            key={expense.id}
                                            expense={expense}
                                            index={index}
                                            onChange={updateExpense}
                                            onRemove={() => removeExpense(expense.id)}
                                        />
                                    ))}
                                </div>
                                {state.errors?.expenses?.[0] && (
                                    <p className="mt-3 text-xs text-red-600" role="alert">
                                        {state.errors.expenses.join(" ")}
                                    </p>
                                )}

                                <button
                                    className="mt-4 inline-flex items-center gap-2 rounded-md border border-olive px-4 py-2 text-sm font-semibold text-olive transition hover:bg-mist-deep"
                                    type="button"
                                    onClick={addExpense}
                                >
                                    <Plus size={16} aria-hidden="true" />
                                    Add expense
                                </button>
                            </section>

                        </div>
                        {state.message && <p role="alert">{state.message}</p>}
                        <div className="mt-5 flex flex-col-reverse gap-3 border-t border-hairline pt-4 sm:flex-row sm:items-center sm:justify-between">
                            <Link className="text-center text-sm font-semibold text-muted-earth transition hover:text-olive sm:text-left" href={mode === "edit" && tripId ? `/trips/${tripId}` : "/"}>
                                Cancel
                            </Link>
                            <button
                                className="rounded-md bg-olive px-6 py-2.5 text-sm font-semibold text-mist transition hover:bg-rust focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-olive"
                                type="submit"
                                disabled={pending}
                            >
                                {pending
                                    ? mode === "create" ? "Creating..." : "Saving..."
                                    : mode === "create" ? "Create trip" : "Save changes"}
                            </button>
                        </div>

                    </form>
                </div>
            </main>
            <footer className="flex min-h-[72px] flex-wrap items-center justify-between gap-x-3 border-t border-hairline px-5 py-4 text-[10px] text-[#8f9995] sm:flex-nowrap sm:gap-[18px] sm:px-[clamp(22px,6vw,86px)] sm:py-0">
                <Link className="inline-flex items-center gap-[10px] font-bold text-[17px] tracking-[-.9px] text-olive" href="/">
                    trip<span className="font-normal text-rust">ledger</span>
                </Link>
                <span className="order-3 w-full sm:order-none sm:w-auto">For the places that change you.</span>
                <a className="text-rust" href="#top">Back to the beginning ↑</a>
            </footer>
        </div>
    );
}
