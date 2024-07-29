// set className to dark:hidden if you wanna use different images (className="object-contain hidden dark:block")
import Image from "next/image";

export const BrandAmbassadors = () => {
    return (
        <div className="flex flex-col items-center justify-center max-w-5xl">
            <div className="flex items-center">
                <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]">
                    <Image 
                        src="/left.png" 
                        fill className="object-contain" 
                        alt="girl saying hi" 
                    />
                </div>
                <div className="relative w-[400px] h-[400px] hidden md:block">
                    <Image 
                        src="/right.png"
                        fill className="object-contain" 
                        alt="girls saying hi back" 
                    />
                </div>
            </div>
        </div>
    );
}