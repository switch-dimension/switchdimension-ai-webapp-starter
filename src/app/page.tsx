import { auth } from "@clerk/nextjs/server";
import PostManager from "@/components/PostManager";

export default async function Dashboard() {
  const { userId } = await auth();

  if (!userId) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-foreground mb-2">Access Denied</h2>
          <p className="text-muted-foreground">You need to be signed in to view this page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-1">Entry point for your app</p>
      </div>
      
      <PostManager />
    </div>
  );
}
