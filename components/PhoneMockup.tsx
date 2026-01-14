import Image from "next/image";

interface PhoneMockupProps {
    src: string;
    alt: string;
}

export function PhoneMockup({ src, alt }: PhoneMockupProps) {
    return (
        <div className="relative mx-auto w-[300px] md:w-[350px]">
            <div className="relative rounded-[3rem] border-gray-800 bg-gray-800 border-[14px] shadow-xl">
                <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                <div className="rounded-[2.5rem] overflow-hidden w-full h-full bg-white dark:bg-gray-800">
                    {/* Dynamic Island / Notch */}
                    <div className="absolute top-1 left-1/2 transform -translate-x-1/2 h-[20px] w-[20px] bg-black z-20 rounded-3xl"></div>

                    <Image
                        src={src}
                        alt={alt}
                        width={400}
                        height={850}
                        className="w-full h-auto object-cover"
                        priority
                    />
                </div>
            </div>
        </div>
    );
}
