import { TripForm, type TripFormInitialValues } from "@/components/trips/trip-form";
import { getTripDetails } from "@/lib/items";
import { ObjectId } from "mongodb";
import { notFound } from "next/navigation";
import { editTripAction } from "./actions";

export default async function EditTripPage({
  params,
}: {
  params: Promise<{ tripId: string }>;
}) {
  const { tripId } = await params;
  if (!ObjectId.isValid(tripId)) notFound();

  const trip = await getTripDetails(tripId);
  if (!trip) notFound();

  const initialTrip: TripFormInitialValues = {
    place: trip.place,
    country: trip.country,
    startDate: trip.startDate,
    endDate: trip.endDate,
    description: trip.description,
    companions: trip.companions,
    spent: trip.spent,
    image: trip.image,
    expenses: trip.expenses ?? [],
  };

  return (
    <TripForm
      key={tripId}
      action={editTripAction}
      initialTrip={initialTrip}
      mode="edit"
      tripId={tripId}
    />
  );
}
