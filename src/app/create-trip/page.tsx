import { TripForm } from "@/components/trips/trip-form";
import { createTripAction } from "./actions";

export default function CreateTripPage() {
  return <TripForm action={createTripAction} />;
}
