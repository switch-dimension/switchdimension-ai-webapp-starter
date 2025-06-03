# 🚀 Switch Dimension Web App Starter Kit

A modern starter kit for building web apps with Next.js, Shadcn UI, and Clerk authentication. From SwitchDimension.com Build With AI

- **Framework:** Next.js v15.3.3
- **UI Library:** Shadcn UI (Style: Zinc)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Authentication:** Clerk

## Features

- ✅ **Protected by Default** - All routes require authentication unless explicitly made public
- ✅ **Clerk Authentication** - Sign in/up with email, social providers
- ✅ **Modern UI** - Clean, responsive design with Tailwind CSS
- ✅ **TypeScript** - Full type safety

## Getting Started

### 1. Installation

```bash
npm install
```

### 2. Clerk Setup

1. Create a Clerk account at [https://clerk.com](https://clerk.com)
2. Create a new application in your Clerk dashboard
3. Copy your API keys from the Clerk dashboard
4. Create a `.env.local` file in the root directory:

```bash
# Clerk Configuration
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
CLERK_SECRET_KEY=sk_test_your_secret_key_here


```

### 3. Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the main application.

### 4. Testing Authentication

- Visit any route (protected by default)
- You'll be redirected to Clerk's authentication flow
- After signing in, you'll be redirected back to the main application

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
└── lib/                  # Utility functions
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

---

- Uses Tailwind CSS, TypeScript, and modern best practices.
- For more info, see the [Next.js documentation](https://nextjs.org/docs), [Shadcn UI](https://ui.shadcn.com/), and [Clerk documentation](https://clerk.com/docs).
