const DeveloperLostSVG = () => {
    return (
        <svg
            width="100%"
            viewBox="0 0 400 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-zinc-800 dark:text-zinc-200"
        >
            {/* Fondo del círculo */}
            <circle
                cx="200"
                cy="150"
                r="140"
                className="fill-zinc-200 dark:fill-zinc-800"
            />

            {/* Cuerpo del dev */}
            <path
                d="M160 120c-20 0-25 15-25 30 0 20 10 30 30 30h10v20h-40v10h110v-10h-40v-20h10c20 0 30-10 30-30 0-15-5-30-25-30s-25 10-25 10-5-10-25-10z"
                className="fill-blue-600 dark:fill-blue-400"
            />

            {/* Ojos */}
            {/* Ojo izquierdo */}
            <circle
                cx="150"
                cy="110"
                r="10"
                className="fill-white dark:fill-zinc-100"
            />
            <circle
                cx="150"
                cy="110"
                r="4"
                className="fill-black dark:fill-zinc-200"
            />

            {/* Ojo derecho */}
            <circle
                cx="250"
                cy="110"
                r="10"
                className="fill-white dark:fill-zinc-100"
            />
            <circle
                cx="250"
                cy="110"
                r="4"
                className="fill-black dark:fill-zinc-200"
            />

            {/* Texto */}
            <text
                x="200"
                y="270"
                textAnchor="middle"
                className="fill-zinc-400 dark:fill-zinc-500 text-sm"
            >
                ¿Estás perdido?
            </text>
        </svg>
    );
};

export default DeveloperLostSVG;
