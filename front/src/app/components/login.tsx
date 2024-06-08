"use client"
import { signIn, signOut, useSession } from 'next-auth/react';

export const Login: React.FC = () => {
  const { data: session } = useSession();

  return (
    <div>
      {!session ? (
        <button onClick={() => signIn('google')}>Sign in with Google</button>
      ) : (
        <>
          <p>Welcome, {session?.user?.name}</p>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </div>
  );
}
