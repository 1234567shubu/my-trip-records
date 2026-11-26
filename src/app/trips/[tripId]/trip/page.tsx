import { redirect } from "next/navigation";

export default async function TripRouteRedirect({
  params,
}: {
  params: Promise<{ tripId: string }>;
}) {
  const { tripId } = await params;
  redirect(`/trips/${tripId}`);
}
