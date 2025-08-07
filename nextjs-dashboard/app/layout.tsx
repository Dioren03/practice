import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts'; // ✅ Added

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* ✅ Applied Inter font and antialiasing */}
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
