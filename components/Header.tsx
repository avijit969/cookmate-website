import Link from "next/link";

export default function Header() {
    return (
        <header className="fixed top-0 z-50 w-full glass">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
                <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-orange-500 to-pink-500">
                        CookMate
                    </span>
                </div>
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-300">
                    <Link href="#features" className="hover:text-orange-500 transition-colors">Features</Link>
                    <Link href="#download" className="hover:text-orange-500 transition-colors">Download</Link>
                </nav>
                <div className="flex items-center gap-4">
                    <Link
                        href="https://github.com/avijit969/cookmate"
                        className="rounded-full bg-zinc-900 px-5 py-2 text-sm font-semibold text-white transition-transform hover:scale-105 hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
                    >
                        Get App
                    </Link>
                </div>
            </div>
        </header>
    );
}
