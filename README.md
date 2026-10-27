# Havenstone Properties

A fictional real-estate portfolio demonstration for discovering sample homes and apartments in Nairobi. The site includes property browsing, listing details, neighborhood discovery, and enquiry pathways. Listings and contact details are demonstration content, not live inventory.

## Features

- Browse and filter sample properties for rent or sale
- View property details, photos, amenities, and features
- Explore Nairobi neighborhoods
- Contact the demonstration agency through enquiry and WhatsApp links
- Responsive pages for desktop and mobile

## Tech stack

- Next.js App Router
- React 19 and TypeScript
- Tailwind CSS 4
- Vercel Analytics in production

## Getting started

Requires Node.js and pnpm. Install dependencies and start the development server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

To create and run a production build:

```bash
pnpm build
pnpm start
```

## Pages

- `/` — Home page and featured properties
- `/properties` — Property listings and filters
- `/properties/[slug]` — Individual property details
- `/about` — About Havenstone Properties
- `/contact` — Contact and enquiry information

## Project structure

```text
app/                 App Router pages and global styles
components/          Shared site and page components
lib/properties.ts    Sample property and neighborhood data
lib/site-config.ts   Demonstration contact details
public/images/       Site imagery
```
