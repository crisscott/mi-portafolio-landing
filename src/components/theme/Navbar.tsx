'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { MobileSidebar } from './MobileSidebar';

const links = [
    { href: '/', label: 'Inicio' },
    { href: '/about', label: 'Sobre mí' },
    { href: '/projects', label: 'Proyectos' },
    { href: '/contact', label: 'Contacto' },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <header className="w-full px-6 py-4 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 shadow-sm">
                <nav className="max-w-7xl mx-auto flex items-center justify-between">
                    <Link
                        href="/"
                        className="text-xl font-bold text-zinc-900 dark:text-white"
                    >
                        Cristopher Scott
                    </Link>

                    {/* Desktop Nav */}
                    <ul className="hidden md:flex space-x-6 text-sm font-medium">
                        {links.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-4">
                        <ThemeToggle />

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setOpen(true)}
                            className="md:hidden text-zinc-700 dark:text-zinc-300"
                            aria-label="Abrir menú"
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                </nav>
            </header>

            {/* Mobile Sidebar */}
            <MobileSidebar isOpen={open} onClose={() => setOpen(false)} />
        </>
    );
}
