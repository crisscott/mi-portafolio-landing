import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function Home() {
    return (
        <main className="px-4">
            <section className="relative flex flex-col items-center justify-center text-center max-w-3xl mx-auto py-24">
                <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-zinc-800 dark:via-zinc-900 dark:to-zinc-950" />
                <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                    ¡Hola! Soy{' '}
                    <span className="text-blue-600 dark:text-blue-400">
                        Cristopher Scott
                    </span>
                </h1>
                <h2 className="text-xl sm:text-2xl font-medium mb-6">
                    Desarrollador Fullstack especializado en backend ⚙️
                </h2>
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300">
                    Desarrollador con más de 5 años integrando sistemas
                    empresariales. Manejo Java EE, Spring, Oracle y construyo
                    frontends modernos con Next.js y TypeScript.
                </p>
                <div className="flex justify-center gap-6 mt-6 text-zinc-700 dark:text-zinc-300">
                    <a
                        href="tel:+522227898883"
                        aria-label="Teléfono"
                        className="hover:text-blue-600 dark:hover:text-blue-400"
                    >
                        <Phone />
                    </a>
                    <a
                        href="mailto:crisscottmendoza@gmail.com"
                        aria-label="Correo"
                        className="hover:text-blue-600 dark:hover:text-blue-400"
                    >
                        <Mail />
                    </a>
                    <a
                        href="https://github.com/crisscott"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="hover:text-blue-600 dark:hover:text-blue-400"
                    >
                        <Github />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/crisscott"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="hover:text-blue-600 dark:hover:text-blue-400"
                    >
                        <Linkedin />
                    </a>
                </div>
                <a
                    href="/projects"
                    className="mt-10 inline-block rounded-md bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors"
                >
                    Ver proyectos
                </a>
            </section>
        </main>
    );
}
