import { Mail, Phone, Github, Linkedin } from 'lucide-react';

export default function Contact() {
    const contacts = [
        {
            href: 'tel:+522227898883',
            icon: Phone,
            label: '(+52) 22-27-89-88-83',
        },
        {
            href: 'mailto:crisscottmendoza@gmail.com',
            icon: Mail,
            label: 'crisscottmendoza@gmail.com',
        },
        {
            href: 'https://github.com/crisscott',
            icon: Github,
            label: 'github.com/crisscott',
            newTab: true,
        },
        {
            href: 'https://www.linkedin.com/in/crisscott',
            icon: Linkedin,
            label: 'linkedin.com/in/crisscott',
            newTab: true,
        },
    ];

    return (
        <section className="max-w-2xl mx-auto text-center space-y-6">
            <h1 className="text-3xl font-bold">Contacto</h1>
            <p className="text-gray-700 dark:text-gray-300">
                ¿Quieres colaborar o platicar sobre un proyecto? Escríbeme.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
                {contacts.map(({ href, icon: Icon, label, newTab }) => (
                    <a
                        key={href}
                        href={href}
                        target={newTab ? '_blank' : undefined}
                        rel={newTab ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-3 p-4 border rounded-md border-zinc-200 dark:border-zinc-800 hover:border-blue-600 dark:hover:border-blue-400 transition-colors"
                    >
                        <Icon size={20} />
                        <span className="text-sm">{label}</span>
                    </a>
                ))}
            </div>
        </section>
    );
}
