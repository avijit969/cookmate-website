export default function FeaturesSection() {
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

    return (
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
    );
}
