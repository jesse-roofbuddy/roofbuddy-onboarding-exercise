This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Live Demo

Check out the [live page](https://roofbuddy-onboarding-exercise-b7uf.vercel.app/) deployed on Vercel.

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- PostgreSQL 14 or later
- npm, yarn, pnpm, or bun

### Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```
3. Set up your local PostgreSQL database
4. Create a .env file in the root directory with your database configuration:
   ```
   DATABASE_URL="postgresql://user:password@localhost:5432/your_database_name"
   ```
5. Generate Prisma client and run migrations:
   ```
   npx prisma generate
   npx prisma migrate dev
   ```
6. Seed the database:
   ```
   npm run seed
   # or
   yarn seed
   # or
   pnpm seed
   # or
   bun seed
   ```
7. Start the development server:
   ```
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```
8. Open http://localhost:3000 with your browser to see the result.

## Development

You can start editing the page by modifying app/page.tsx. The page auto-updates as you edit the file.
This project uses:

next/font to automatically optimize and load Geist
Apollo Client for GraphQL operations
Prisma as the ORM
TailwindCSS for styling

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
