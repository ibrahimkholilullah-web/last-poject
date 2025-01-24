import { redirect } from 'next/navigation'; // Import redirect for handling navigation
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';

export default async function ProfilePage() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  // Redirect unauthenticated users to the login page
  if (!user) {
    redirect('/api/auth/login'); // Redirect to home or login page
  }

  return (
   <div className='bg-slate-800'>
     <div className="p-4 container mx-auto  text-white text-center min-h-screen border">
      <h1 className="text-2xl font-bold">Welcome to your profile!</h1>
      <p className="mt-2">Hello, {user.firstName || 'User'}!</p>
      <LogoutLink />
    </div>
   </div>
  );
}
