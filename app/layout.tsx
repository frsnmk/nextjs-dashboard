import '@/app/ui/global.css';
import { andika } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${andika.className} antialiased`}>{children}</body>
    </html>
  );
}
