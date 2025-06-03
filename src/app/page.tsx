import { auth } from "@clerk/nextjs/server";
import PostManager from "@/components/PostManager";

export default async function Dashboard() {
  const { userId } = await auth();

  if (!userId) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Access Denied</h2>
          <p className="text-gray-600">You need to be signed in to view this page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Posts</h1>
        <p className="text-gray-600 mt-1">Create and manage your posts here.</p>
      </div>
      
      <PostManager />
    </div>
  );
}
