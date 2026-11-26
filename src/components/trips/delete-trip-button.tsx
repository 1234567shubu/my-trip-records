"use client";

import { useActionState } from "react";
import { deleteTripAction, type DeleteTripState } from "@/app/trips/[tripId]/delete/actions";

export function DeleteTripButton({ tripId }: { tripId: string }) {
  const initialState: DeleteTripState = {};
  const [state, formAction, pending] = useActionState(deleteTripAction, initialState);

  return (
    <form
      action={formAction}
      onSubmit={(event) => {
        if (!window.confirm("Delete this trip and its expenses? This cannot be undone.")) {
          event.preventDefault();
        }
      }}
    >
      <input type="hidden" name="tripId" value={tripId} />
      <button
        className="rounded-md border border-rust/40 px-4 py-2 text-sm font-semibold text-rust transition hover:bg-rust hover:text-white disabled:opacity-60"
        type="submit"
        disabled={pending}
      >
        {pending ? "Deleting..." : "Delete trip"}
      </button>
      {state.message && <p className="mt-2 text-xs text-red-700" role="alert">{state.message}</p>}
    </form>
  );
}
