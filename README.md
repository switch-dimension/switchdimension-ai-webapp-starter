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
git clone https://github.com/switch-dimension/switchdimension-webapp-starter.git
cd switchdimension-webapp-starter
```

### 2. Clerk Setup

1. Create a Clerk account at [https://clerk.com](https://clerk.com)
2. Create a new application in your Clerk dashboard
3. Copy your API keys from the Clerk dashboard
4. Create a `.env` file in the root directory with the following pasted in. (Database URL you will get in the next steps)

```bash
# Clerk Configuration
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
CLERK_SECRET_KEY=sk_test_your_secret_key_here

# Database Configuration
DATABASE_URL="postgresql://username:password@localhost:5432/your_database_name"
```

### 3. Installation

Install the project dependencies:

```bash
npm install
```
Run the development server to see app:

```bash
npm run dev
```
- You should see the app appear at this address in your browser http://localhost:3000
- It will prevent you from seeing the app until you login with Clerk. If you get a key error check your Clerk key is correct.

### 4. Database Setup

This starter includes Prisma ORM for database management. You can use it with any PostgreSQL database, including:

- **Supabase** (You can run this locally for Free or via the Cloud)
- **Neon** (Serverless Postgres)
- **Local PostgreSQL**
- **Railway**, **PlanetScale**, or other cloud providers

#### Option A: Using Supabase Local (Recommended)

1. Make sure you have Docker installed and running on your machine
2. Run the following command to start Supabase locally:
```bash
npx supabase start
```
3. This will start a local Supabase instance with PostgreSQL
4. Copy the database URL from the output (usually `postgresql://postgres:postgres@localhost:54322/postgres`) You can also npx supabase status to get this info. 
5. Add this to your `.env` file as `DATABASE_URL`

#### Option B: Using Supabase Cloud

1. Create a free account at [https://supabase.com](https://supabase.com)
2. Create a new project
3. Go to Settings → Database and copy the connection string
4. Create an .env based on the env.example and add to your `.env` file as `DATABASE_URL`

#### Option C: Using Neon

1. Create a free account at [https://neon.tech](https://neon.tech)
2. Create a new project
3. Copy the connection string from your dashboard
4. Create an .env based on the env.example and add to your `.env` file as `DATABASE_URL`

#### Option D: Local PostgreSQL

1. Install PostgreSQL locally (PGadmin is helpful)
2. Create a database
3. Create an .env based on the env.example and add to your `.env` file as `DATABASE_URL`

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



## Building for Production

```bash
npm run build
npm start
```
## Troubleshooting

- The publishableKey passed to Clerk is invalid: Check that you have the correct keys in the .env file in the root of the folder
- No posts are being saved: Check that you have the database setup step complete
- Denied Access: You need to setup Clerk first. 

