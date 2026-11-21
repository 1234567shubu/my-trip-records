export type Trip = {
  place: string;
  country: string;
  startDate: string;
  endDate: string;
  companions: string[];
  image: string;
  imageAlt: string;
  spent: string;
  description: string;
};

export const trips: Trip[] = [
  {
    place: "The quiet side of Kyoto",
    country: "Kyoto, Japan",
    startDate: "Oct 12 – 19, 2026",
    endDate: "Oct 12 – 19, 2026",
    companions: ["A", "M", "S"],
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Traditional Kyoto street framed by autumn leaves",
    spent: "$1,240",
    description: "Lantern-lit lanes, tiny tea houses, and one very long walk beneath the maples.",
  },
  {
    place: "A week in the Dolomites",
    country: "South Tyrol, Italy",
    startDate: "Oct 12 – 19, 2026",
    endDate: "Oct 12 – 19, 2026",
    companions: ["A", "J"],
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Mountain peaks at dusk beneath a starry sky",
    spent: "$980",
    description: "A week of alpine air, slow lunches, and trails that made us stop every five minutes.",
  },
  {
    place: "Slow mornings in Lisbon",
    country: "Lisbon, Portugal",
    startDate: "Oct 12 – 19, 2026",
    endDate: "Oct 12 – 19, 2026",
    companions: ["A", "M", "S", "J"],
    image:
      "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Colorful old buildings along a Lisbon street",
    spent: "$720",
    description: "Sun-warmed tiles, late dinners, and nowhere in particular to be by sunset.",
  },
];

export const travelCrew = [
  { name: "Alex Morgan", initial: "A", color: "clay" },
  { name: "Maya Chen", initial: "M", color: "sage" },
  { name: "Sam Rivera", initial: "S", color: "blue" },
  { name: "Jamie Lee", initial: "J", color: "gold" },
];
