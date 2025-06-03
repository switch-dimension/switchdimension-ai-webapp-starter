import { auth, currentUser } from "@clerk/nextjs/server";
import Link from "next/link";

export default async function Dashboard() {
  const { userId } = await auth();
  const user = await currentUser();

  if (!userId) {
    return <div>You are not signed in</div>;
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link 
            href="/" 
            className="text-blue-600 hover:text-blue-800 underline"
          >
            ← Back to Landing Page
          </Link>
        </div>
        
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-gray-600 mt-2">Welcome to your protected dashboard area!</p>
          </div>
          
          <div className="bg-white border rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">User Information</h2>
            <div className="space-y-2">
              <p><strong>User ID:</strong> {userId}</p>
              <p><strong>Email:</strong> {user?.emailAddresses[0]?.emailAddress}</p>
              <p><strong>First Name:</strong> {user?.firstName || 'Not provided'}</p>
              <p><strong>Last Name:</strong> {user?.lastName || 'Not provided'}</p>
            </div>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-blue-800">Protected Content</h2>
            <p className="text-blue-700">
              This is your protected dashboard area. Only authenticated users can see this content.
              You can add your application&apos;s main functionality here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 