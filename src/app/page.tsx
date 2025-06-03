import Link from "next/link";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold">This is the Landing Page</h1>
        <p className="text-lg text-gray-600">Welcome to our application!</p>
        
        <div className="space-y-4">
          <SignedOut>
            <div className="space-y-2">
              <p>Sign in to access your dashboard</p>
              <SignInButton mode="modal">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
                  Sign In
                </button>
              </SignInButton>
            </div>
          </SignedOut>
          
          <SignedIn>
            <div className="space-y-2">
              <p>Welcome back! Ready to continue?</p>
              <Link 
                href="/dashboard" 
                className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors"
              >
                Go to Dashboard
              </Link>
            </div>
          </SignedIn>
        </div>
      </div>
    </div>
  );
}
