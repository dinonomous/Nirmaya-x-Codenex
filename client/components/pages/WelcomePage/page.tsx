import Image from "next/image";
import amico from "@/public/assets/amico.png";
import { Baumans } from "@next/font/google";

const baumans = Baumans({
  subsets: ["latin"],
  weight: ["400"],
});

const Welcome = () => {
  return (
    <>
      <div className={baumans.className}>
        <div className="flex items-center justify-center p-4 gap-7 md:gap-9 lg:gap-10">
          <div className="w-[148px] h-[152px] md:w-[248px] md:h-[252px] lg:w-[591px] lg:h-[342px]">
            <p className="text-[15px]  md:text-[25px] lg:text-5xl">
              Join our two-day ideathon where <span className="text-[#1B33EB]">ideas</span> lead the way! Pitch your
              boldest ideas to real-world challenges and compete for an exciting{" "}
              <span className="text-[#0F863E]">internship opportunity</span>!
            </p>
          </div>
          <Image src={amico} alt="Example Image" className=" w-[192px] h-[229px] md:w-[322px] md:h-[379px] lg:w-[580px] lg:h-[694px]" />
        </div>
      </div>
    </>
  );
};

export default Welcome;
