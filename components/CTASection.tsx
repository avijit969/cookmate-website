import Link from "next/link";

export default function CTASection() {
    return (
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
    );
}
