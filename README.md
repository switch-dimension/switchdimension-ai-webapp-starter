# 🚀 Switch Dimension Web App Starter Kit

A modern starter kit for building web apps with Next.js, Shadcn UI, and Clerk authentication. From SwitchDimension.com Build With AI

- **Framework:** Next.js v15.3.3
- **UI Library:** Shadcn UI (Style: Zinc)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Authentication:** Clerk
- **Database:** Prisma ORM with PostgreSQL (Supabase Ready)

## Prerequisites

Before you begin, make sure you have the following installed on your local machine:

- **Node.js** (version 18.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn** package manager
- **Git** - [Download here](https://git-scm.com/)
- A **Clerk account** (free) - [Sign up here](https://clerk.com)

To check if you have Node.js and npm installed, run:
```bash
node --version
npm --version
```

## Features

- ✅ **Protected by Default** - All routes require authentication unless explicitly made public
- ✅ **Clerk Authentication** - Sign in/up with email, social providers
- ✅ **Modern UI** - Clean, responsive design with Tailwind CSS
- ✅ **TypeScript** - Full type safety
- ✅ **Database Ready** - Prisma ORM with PostgreSQL support
- ✅ **Type-Safe Database** - Generated Prisma client with full TypeScript support

## Getting Started

### 1. Clone the Repository

First, clone this repository to your local machine:

```bash
git clone https://github.com/your-username/switchdimension-webapp-starter.git
cd switchdimension-webapp-starter
```

### 2. Installation

Install the project dependencies:

```bash
npm install
```

### 3. Clerk Setup

1. Create a Clerk account at [https://clerk.com](https://clerk.com)
2. Create a new application in your Clerk dashboard
3. Copy your API keys from the Clerk dashboard
4. Create a `.env.local` file in the root directory:

```bash
# Clerk Configuration
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
CLERK_SECRET_KEY=sk_test_your_secret_key_here

# Database Configuration
DATABASE_URL="postgresql://username:password@localhost:5432/your_database_name"
```

### 4. Database Setup

This starter includes Prisma ORM for database management. You can use it with any PostgreSQL database, including:

- **Supabase** (recommended for production)
- **Neon** (serverless PostgreSQL)
- **Local PostgreSQL**
- **Railway**, **PlanetScale**, or other cloud providers

#### Option A: Using Supabase 

1. Create a free account at [https://supabase.com](https://supabase.com)
2. Create a new project
3. Go to Settings → Database and copy the connection string
4. Add it to your `.env` file as `DATABASE_URL`

#### Option B: Using Neon

1. Create a free account at [https://neon.tech](https://neon.tech)
2. Create a new project
3. Copy the connection string from your dashboard
4. Add it to your `.env.local` file as `DATABASE_URL`

#### Option C: Local PostgreSQL

1. Install PostgreSQL locally
2. Create a database
3. Update the `DATABASE_URL` in `.env.local` with your local connection string

#### Generate Prisma Client and Run Migrations

After setting up your database, run:

```bash
# Generate the Prisma client
npx prisma generate

# Push the schema to your database (for development)
npx prisma db push

# Or run migrations (for production)
npx prisma migrate dev --name init
```

### 5. Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the main application.

### 6. Testing Authentication

- Visit any route (protected by default)
- You'll be redirected to Clerk's authentication flow. You will need to sign in for the first time. 
- After signing in, you'll be redirected back to the main application
- You will see a claim application in the bottom right of the page. This takes you to the clerk dashboard to create an account or to setup your application. Add a name and copy the environment details. 
- Create a file called env.local and place the variables there. There is an example in the file env.exmaple in the route / folder.

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Main application page (protected)
│   ├── layout.tsx        # Root layout with Clerk provider and navigation
│   ├── profile/          # User profile pages (empty, ready for development)
│   ├── settings/         # Settings pages (empty, ready for development)
│   └── globals.css       # Global styles with Tailwind CSS v4
├── middleware.ts         # Clerk middleware with whitelist approach for public routes
├── components/           # Reusable UI components (empty, ready for development)
├── lib/
│   ├── prisma.ts         # Prisma client configuration
│   └── utils.ts          # Utility functions
├── generated/
│   └── prisma/           # Generated Prisma client (auto-generated)
prisma/
├── schema.prisma         # Database schema and configuration
└── migrations/           # Database migration files
```

## Security Model

This starter uses a **whitelist approach** for route protection:

- **All routes are protected by default** - This is the safer approach
- **Public routes must be explicitly defined** in `src/middleware.ts`
- Currently, only Clerk's sign-in/sign-up routes are public
- To add public routes (like landing pages), add them to the `isPublicRoute` matcher in middleware

Example of adding public routes:
```typescript
const isPublicRoute = createRouteMatcher([
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/about',        // Add public routes here
  '/contact',      // Add public routes here
])
```

## Building for Production

```bash
npm run build
npm start
```
## Database Usage

The starter includes a sample `Post` model to get you started. Here's how to use Prisma in your application:

### Using the Prisma Client

```typescript
import { prisma } from '@/lib/prisma'

// Create a new post
const post = await prisma.post.create({
  data: {
    title: 'Hello World',
    content: 'This is my first post!'
  }
})

// Get all posts
const posts = await prisma.post.findMany()

// Get a specific post
const post = await prisma.post.findUnique({
  where: { id: 1 }
})
```

### Adding New Models

1. Edit `prisma/schema.prisma` to add your models
2. Run `npx prisma db push` to update your database
3. The Prisma client will be automatically regenerated

### Useful Prisma Commands

```bash
# View your database in Prisma Studio
npx prisma studio

# Reset your database (development only)
npx prisma migrate reset

# Generate the Prisma client after schema changes
npx prisma generate

# Create and apply a new migration
npx prisma migrate dev --name your_migration_name
```



---

- Uses Tailwind CSS, TypeScript, and modern best practices.
- For more info, see the [Next.js documentation](https://nextjs.org/docs), [Shadcn UI](https://ui.shadcn.com/), and [Clerk documentation](https://clerk.com/docs).
