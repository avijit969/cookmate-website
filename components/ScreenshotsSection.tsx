"use client";

import { PhoneMockup } from "./PhoneMockup";

const screenshots = [
    { src: "/screenshot/01login.png", alt: "Login Screen" },
    { src: "/screenshot/02-create-account.png", alt: "Create Account" },
    { src: "/screenshot/03-verfy-email.png", alt: "Verify Email" },
    { src: "/screenshot/04-otp-email.png", alt: "OTP Verification" },
    { src: "/screenshot/05-veryfy-sucessfully.png", alt: "Verified Successfully" },
    { src: "/screenshot/welcome-email.png", alt: "Welcome Email" },
    { src: "/screenshot/06-home-page.png", alt: "Home Feed" },
    { src: "/screenshot/darkmode.png", alt: "Dark Mode" },
    { src: "/screenshot/08-explore-recipe.png", alt: "Explore Recipes" },
    { src: "/screenshot/recipe-view-page.png", alt: "Recipe Details" },
    { src: "/screenshot/recipe-veiw-with-comments.png", alt: "Recipe Comments" },
    { src: "/screenshot/read-comments.png", alt: "Read Comments" },
    { src: "/screenshot/update-comment.png", alt: "Update Comment" },
    { src: "/screenshot/delete-comment.png", alt: "Delete Comment" },
    { src: "/screenshot/11-view-saved.png", alt: "Saved Recipes" },
    { src: "/screenshot/07-create-recipe.png", alt: "Create Recipe" },
    { src: "/screenshot/your-created-recipe.png", alt: "Your Recipes" },
    { src: "/screenshot/09-profile-picture-update.png", alt: "Profile Update" },
    { src: "/screenshot/10-name-update.png", alt: "Name Update" },
    { src: "/screenshot/logout.png", alt: "Logout" },
];

export default function ScreenshotsSection() {
    return (
        <section className="py-24 overflow-hidden bg-white dark:bg-zinc-900">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-16 text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                    App Screens
                </h2>
                <p className="text-lg text-zinc-600 dark:text-zinc-400">
                    A complete walkthrough of the CookMate experience.
                </p>
            </div>

            <div className="relative w-full group">
                <div
                    className="flex gap-8 whitespace-nowrap animate-marquee px-4 hover:[animation-play-state:paused]"
                    style={{ width: "max-content" }}
                >
                    {[...screenshots, ...screenshots].map((shot, idx) => (
                        <div
                            key={`${shot.src}-${idx}`}
                            className="inline-block flex-none"
                        >
                            <PhoneMockup src={shot.src} alt={shot.alt} />
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                .animate-marquee {
                    animation: marquee 120s linear infinite; /* Slowed down for better viewing of many items */
                }
            `}</style>
        </section>
    );
}
