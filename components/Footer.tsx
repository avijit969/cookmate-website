import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-zinc-100 dark:border-zinc-800 bg-white dark:bg-black py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <p className="text-sm text-zinc-500">
                    &copy; {new Date().getFullYear()} CookMate. All rights reserved.
                </p>
                <div className="flex gap-6">
                    <Link href="https://github.com/avijit969/cookmate" className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                        GitHub
                    </Link>
                    <Link href="#" className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                        Privacy Policy
                    </Link>
                    <Link href="#" className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                        Terms
                    </Link>
                </div>
            </div>
        </footer>
    );
}
