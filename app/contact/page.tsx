import { Mail, Phone, Github, Linkedin } from 'lucide-react';

export default function Contact() {
    return (
        <section className="max-w-md mx-auto text-center space-y-6">
            <h1 className="text-3xl font-bold">Contacto</h1>
            <p className="text-gray-700 dark:text-gray-300">
                ¿Quieres colaborar o platicar sobre un proyecto? Escríbeme.
            </p>
            <div className="flex flex-col items-center gap-3 text-sm">
                <a
                    href="tel:+522227898883"
                    className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400"
                >
                    <Phone size={16} /> (+52) 22-27-89-88-83
                </a>
                <a
                    href="mailto:crisscottmendoza@gmail.com"
                    className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400"
                >
                    <Mail size={16} /> crisscottmendoza@gmail.com
                </a>
                <a
                    href="https://github.com/crisscott"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400"
                >
                    <Github size={16} /> github.com/crisscott
                </a>
                <a
                    href="https://www.linkedin.com/in/crisscott"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400"
                >
                    <Linkedin size={16} /> linkedin.com/in/crisscott
                </a>
            </div>
        </section>
    );
}
