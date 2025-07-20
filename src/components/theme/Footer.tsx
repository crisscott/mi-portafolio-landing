import React from 'react';

export const Footer = () => {
    return (
        <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 py-6 text-center text-sm text-zinc-500 dark:text-zinc-400">
            <p>
                © {new Date().getFullYear()} Cristopher Scott. Todos los
                derechos reservados.
            </p>
        </footer>
    );
};
