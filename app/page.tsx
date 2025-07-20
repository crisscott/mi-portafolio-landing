export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center px-4 bg-white text-black dark:bg-zinc-900 dark:text-white transition-colors duration-300">
            <section className="text-center max-w-2xl">
                <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                    ¡Hola! Soy{' '}
                    <span className="text-blue-600 dark:text-blue-400">
                        Cristopher Scott
                    </span>
                </h1>
                <h2 className="text-xl sm:text-2xl font-medium mb-6">
                    Desarrollador Full Stack con enfoque en backend ⚙️
                </h2>
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300">
                    Construyo soluciones robustas, APIs eficientes y
                    arquitecturas limpias. Ah, y también hago frontend con
                    cariño.
                </p>
            </section>
        </main>
    );
}
