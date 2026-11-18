# TripLedger

TripLedger is a personal travel journal and group expense tracker. Phase 1 is a frontend-only dashboard using local mock data.

## Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project map

- `src/app` contains the App Router page, root layout, and global styles.
- `src/components/dashboard` contains the dashboard sections and navigation.
- `src/data/trips.ts` contains the local sample trips and yearly travel data.

The dashboard is rendered with local data. Authentication, persistence, APIs, and trip creation are not part of Phase 1.
