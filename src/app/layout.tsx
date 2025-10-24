import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ניצן ירושלמי - תיווך וליווי נדל״ן',
  description: 'ניצן ירושלמי הוא מתווך נדל״ן מקצועי ובעל ניסיון רחב בשוק הישראלי והאמריקאי. הוא מתמחה במכירת והשכרת דירות בתל אביב ובמרכז הארץ, לצד ליווי משקיעים ברכישת נכסים בארצות הברית. האתר מציג את הסגנון האישי שלו – אמין, נגיש, מקצועי, ועם הבנה מעמיקה בשוק המקומי והבינלאומי.
',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#8c8c8c" />
      </head>
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          {/* Navbar will be inserted here */}
          <Navbar />

          {children}

        </div>
      </body>
    </html>
  );
}
