"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Download } from "lucide-react";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Features", href: "#features" },
        { name: "Interface", href: "#screenshots" },
        { name: "Download", href: "#download" },
    ];

    return (
        <header
            className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "glass shadow-sm" : "bg-transparent py-4"
                }`}
        >
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-orange-500 to-pink-500">
                        CookMate
                    </span>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-300">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="hover:text-orange-500 transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* Action Button & Mobile Toggle */}
                <div className="flex items-center gap-4">
                    <Link
                        href="https://pub-6920084430834985bcce8c3128f020b5.r2.dev/cookmate.apk"
                        target="_blank"
                        className="hidden md:flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-2 text-sm font-semibold text-white transition-transform hover:scale-105 hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 shadow-lg hover:shadow-xl"
                    >
                        <Download className="w-4 h-4" />
                        <span>Get App</span>
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white/90 dark:bg-zinc-950/90 backdrop-blur-xl border-t border-zinc-100 dark:border-zinc-800 md:hidden animate-fade-in-up shadow-xl">
                    <div className="flex flex-col p-6 gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-lg font-medium text-zinc-600 dark:text-zinc-300 hover:text-orange-500 p-2 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-all"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="https://pub-6920084430834985bcce8c3128f020b5.r2.dev/cookmate.apk"
                            target="_blank"
                            className="flex items-center justify-center gap-2 rounded-full bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition-transform active:scale-95 dark:bg-white dark:text-zinc-900"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <Download className="w-4 h-4" />
                            <span>Get App</span>
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
