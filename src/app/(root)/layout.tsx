import { SessionProvider } from 'next-auth/react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SessionProvider>
        <main className='relative flex min-h-screen flex-col'>
          <div className='flex h-screen justify-center items-center bg-red-400'>{children}</div>
        </main>
      </SessionProvider>
    </>
  );
}
