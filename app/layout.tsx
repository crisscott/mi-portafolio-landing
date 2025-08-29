import type { Metadata } from 'next';
import '@/src/styles/globals.css';
import { Providers } from '@/src/components/providers/Providers';
import Navbar from '@/src/components/theme/Navbar';
import { Footer } from '@/src/components/theme/Footer';

export const metadata: Metadata = {
    title: 'Cristopher Scott - Full Stack Developer',
    description:
        'Portafolio de Cristopher Scott, desarrollador full stack especializado en crear soluciones web robustas, escalables y con estilo. Código limpio, lógica sólida y un toque de café.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" suppressHydrationWarning>
            <body className="antialiased bg-white text-black dark:bg-zinc-900 dark:text-white transition-colors">
                <Providers>
                    <div className="flex flex-col min-h-screen">
                        <Navbar />
                        <main className="flex-1 container mx-auto px-4 py-8">
                            {children}
                        </main>
                        <Footer />
                    </div>
                </Providers>
            </body>
        </html>
    );
}
