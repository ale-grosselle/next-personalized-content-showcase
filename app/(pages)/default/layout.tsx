import { ReactNode } from 'react';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  console.log('Hello from Page Layout app/default/layout.tsx');
  return (
    <main>
      <h1>Hello from page Layout {performance.now()}</h1>
      {children}
    </main>
  );
}
