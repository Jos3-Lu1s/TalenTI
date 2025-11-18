export default function ApplicationLogo({ size = "text-6xl" }) {
    return (
        <h1 className={`${size} font-black tracking-tight select-none`}>
            <span className="text-blue-700 dark:text-blue-400">Talen</span>
            <span className="text-cyan-500 dark:text-cyan-300">TI</span>
        </h1>
    );
}
