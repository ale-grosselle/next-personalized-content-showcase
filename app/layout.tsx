import './globals.css';
import { ReactNode } from 'react';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  console.log('Hello from RootLayout app/layout.tsx');
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
