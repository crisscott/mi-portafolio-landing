import DeveloperLostSVG from '@/src/components/svg/DeveloperLostSVG';
import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
            {/* Ilustración */}
            <div className="max-w-md mb-8">
                <DeveloperLostSVG />
            </div>

            <h1 className="text-5xl font-bold mb-4 text-zinc-800 dark:text-zinc-100">
                404
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6">
                Ups... la página que buscás no existe.
            </p>
            <Link
                href="/"
                className="inline-block px-6 py-3 bg-blue-600 text-white hover:bg-blue-700 transition"
            >
                Volver al inicio
            </Link>
        </div>
    );
};

export default NotFound;
