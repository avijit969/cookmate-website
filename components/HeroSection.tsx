import Link from "next/link";
import { PhoneMockup } from "@/components/PhoneMockup";

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden px-6 lg:px-8 py-20 lg:py-32">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-8 items-center">
                    <div className="max-w-2xl animate-fade-in-up">
                        <div className="inline-flex rounded-full bg-orange-100 dark:bg-orange-900/30 px-3 py-1 text-sm font-medium text-orange-600 dark:text-orange-400 mb-6">
                            ✨ The #1 Social Cooking App
                        </div>
                        <h1 className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-7xl mb-6">
                            Discover. Cook. <br />
                            <span className="text-gradient">Share.</span>
                        </h1>
                        <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400 mb-8">
                            CookMate is your ultimate kitchen companion. Discover new recipes, share your culinary masterpieces, and connect with a community of food lovers.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="https://github.com/avijit969/cookmate"
                                className="flex items-center justify-center gap-2 rounded-full bg-orange-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-orange-500 hover:scale-105 active:scale-95"
                            >
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H8l4-4 4 4h-3v4h-2z" />
                                </svg>
                                Download App
                            </Link>
                            <Link
                                href="#features"
                                className="flex items-center justify-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 px-8 py-4 text-base font-semibold transition-all hover:bg-zinc-50 dark:hover:bg-zinc-900"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                    <div className="relative mx-auto lg:mr-0 lg:ml-auto w-full max-w-md lg:max-w-full animate-fade-in-up delay-200">
                        <div className="relative animate-float">
                            {/* Blur Glow Effect */}
                            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                            <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

                            <div className="relative z-10 -rotate-6 hover:rotate-0 transition-transform duration-500">
                                <PhoneMockup
                                    src="/home-page.jpeg"
                                    alt="CookMate App Interface"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
