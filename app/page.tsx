import { Github, Linkedin, Mail, Phone } from 'lucide-react';

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
            </section>
        </main>
    );
}
