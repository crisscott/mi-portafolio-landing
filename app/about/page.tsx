export default function About() {
    return (
        <section className="space-y-8">
            <div className="space-y-4">
                <h1 className="text-3xl font-bold">Sobre mí</h1>
                <p className="text-gray-700 dark:text-gray-300">
                    Desarrollador Fullstack con más de 5 años de experiencia en
                    integración de sistemas empresariales. Especializado en
                    arquitecturas backend con Java EE y Oracle, y en frontend
                    con Next.js 14 y TypeScript.
                </p>
            </div>

            <div className="space-y-6">
                <h2 className="text-2xl font-semibold">Experiencia</h2>

                <div>
                    <h3 className="text-xl font-medium">
                        Grupo Telnet – Analista Programador
                    </h3>
                    <p className="text-sm text-zinc-500">
                        Ene. 2023 – Actualidad · Puebla, México
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                        <li>
                            Integración de APIs de delivery (DiDi, Rappi, Uber
                            Eats) con el sistema POS mediante Java EE, Webhooks
                            y RMI.
                        </li>
                        <li>
                            Reducción del tiempo de procesamiento de pedidos de
                            90s a 10s y cero downtime en los últimos 6 meses.
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-medium">
                        Criteria Inteligencia de Negocios – Desarrollador de
                        Software
                    </h3>
                    <p className="text-sm text-zinc-500">
                        Ago. 2019 – Dic. 2022 · Puebla, México
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                        <li>
                            Desarrollo de un CRM integral con Laravel y MySQL
                            para centralizar datos contables y de nómina.
                        </li>
                        <li>
                            Automatización de facturación conectada a SAP,
                            reduciendo tiempos de proceso de 2h a 15min por
                            lote.
                        </li>
                    </ul>
                </div>
            </div>

            <div className="space-y-2">
                <h2 className="text-2xl font-semibold">Educación</h2>
                <p className="text-gray-700 dark:text-gray-300">
                    Instituto Tecnológico de Puebla — Ingeniería en Tecnologías
                    de la Información y Comunicaciones (2014-2019). Especialidad
                    en Estrategias de Inteligencia de Negocios.
                </p>
            </div>
        </section>
    );
}
