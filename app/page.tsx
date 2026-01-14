import Image from "next/image";
import Link from "next/link";
import { PhoneMockup } from "@/components/PhoneMockup";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
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

      <main className="grow pt-24">
        {/* Hero Section */}
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

        {/* Features Section */}
        <section id="features" className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16 animate-fade-in-up">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Everything you need to cook better</h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                Packed with features to make your cooking journey seamless and fun.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, idx) => (
                <div key={idx} className="relative p-8 rounded-3xl bg-white dark:bg-zinc-900 shadow-sm border border-zinc-100 dark:border-zinc-800 hover:shadow-lg transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
                  <div className="inline-flex items-center justify-center rounded-2xl bg-orange-100 dark:bg-zinc-800 p-3 text-orange-600 dark:text-orange-500 mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    {feature.description}
                  </p>
                </div>
              ))}
              {/* Coming Soon Feature */}
              <div className="relative p-8 rounded-3xl bg-zinc-100/50 dark:bg-zinc-900/30 border border-zinc-100 dark:border-zinc-800 border-dashed">
                <div className="inline-flex items-center justify-center rounded-2xl bg-zinc-200 dark:bg-zinc-800 p-3 text-zinc-500 mb-6">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-zinc-500">Advanced Filter</h3>
                <p className="text-zinc-500">
                  Search per specific dishes and ingredients. (Coming Soon)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="download" className="py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-[3rem] bg-zinc-900 px-6 py-20 shadow-2xl sm:px-12 sm:py-32 lg:px-16">
              <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/30 rounded-full blur-[100px]"></div>
              <div className="relative flex flex-col items-center text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
                  Ready to start your cooking journey?
                </h2>
                <p className="mx-auto max-w-xl text-lg text-zinc-300 mb-10">
                  Download CookMate today and join thousands of food enthusiasts sharing their passion.
                </p>
                <div className="flex gap-4">
                  <Link
                    href="https://github.com/avijit969/cookmate"
                    className="rounded-full bg-white px-8 py-4 text-base font-semibold text-zinc-900 shadow-lg transition-transform hover:scale-105 active:scale-95 hover:bg-zinc-100"
                  >
                    Download for Free
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

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
    </div>
  );
}

const features = [
  {
    title: "User Authentication",
    description: "Secure login and registration with email verification via OTP. Your profile, your recipes.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: "Recipe Discovery",
    description: "Browse a rich feed of recipes complete with detailed ingredients, instructions, and cooking times.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: "Social Interactions",
    description: "Like and comment on recipes to show appreciation. Share your favorites instantly with friends.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Bookmarks",
    description: "Save your favorite recipes to your personal collection for quick and easy access later.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
      </svg>
    ),
  }
];
