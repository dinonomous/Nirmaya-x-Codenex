import Image from "next/image";
import amico from "@/public/assets/amico.png";
import { Baumans } from "next/font/google";

const baumans = Baumans({
  subsets: ["latin"],
  weight: "400", // Required weight
});

const Welcome = () => {
  return (
    <div className={baumans.className}>
      <div className="flex flex-col lg:flex-row items-center justify-center p-4 gap-7 md:gap-9 lg:gap-10 lg:h-[90vh] h-auto mt-10">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="text-[15px] md:text-[25px] lg:text-5xl leading-relaxed">
            Join our two-day ideathon where{" "}
            <span className="text-[#1B33EB]">ideas</span> lead the way! Pitch
            your boldest ideas to real-world challenges and compete for an
            exciting{" "}
            <span className="text-[#0F863E]">internship opportunity</span>!
          </p>
        </div>

        {/* Image */}
        <div className="w-[192px] h-[229px] md:w-[322px] md:h-[379px] lg:w-[580px] lg:h-[694px] z-10">
          <Image
            src={amico}
            alt="Illustration of ideas"
            layout="responsive"
            className="object-contain "
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
