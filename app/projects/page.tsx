const projects = [
    {
        title: 'Integración de APIs de delivery',
        description:
            'Backend Java EE y Webhooks para conectar DiDi, Rappi y Uber Eats al POS, procesando 50+ pedidos/min.',
    },
    {
        title: 'Migración de sistema legacy',
        description:
            'Reemplazo de Oracle ADF 11 con un frontend Next.js 14 y backend Node.js, orquestado con PM2.',
    },
    {
        title: 'CRM integral',
        description:
            'Aplicación Laravel + MySQL que centralizó contabilidad, nómina y prospectos.',
    },
    {
        title: 'Automatización de facturación',
        description:
            'Sistema PHP que generaba XML con addenda y timbraba facturas conectándose a SAP.',
    },
];

export default function Projects() {
    return (
        <section className="space-y-8">
            <h1 className="text-3xl font-bold">Proyectos destacados</h1>
            <ul className="grid gap-6 sm:grid-cols-2">
                {projects.map((project) => (
                    <li
                        key={project.title}
                        className="p-4 border rounded-md border-zinc-200 dark:border-zinc-800"
                    >
                        <h2 className="text-xl font-semibold mb-2">
                            {project.title}
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300 text-sm">
                            {project.description}
                        </p>
                    </li>
                ))}
            </ul>
        </section>
    );
}
