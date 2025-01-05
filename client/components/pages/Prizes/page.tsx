import Image from "next/image";
import { Michroma, Baumans, Mynerve, Caveat } from "next/font/google";
import img1 from "@/public/assets/rewptch.png"
import img2 from "@/public/assets/rewbld.png"
import img3 from "@/public/assets/rewintrn.png"

export const michorma = Michroma({
  weight: "400",
  subsets: ["latin"],
});

export const baumans = Baumans({
  weight: "400",
  subsets: ["latin"],
});

export const caveat = Caveat({
  weight: "400",
  subsets: ["latin"],
});


export const Prizes = () => {
  return (
    <>
      <div className="text-center pb-24">
        <span style={michorma.style} className="text-center text-[60px] lg:text-[100px] bg-gradient-to-r from-[#757AD0] to-[#CD89D7] bg-clip-text text-transparent  " >Rewards</span>
      </div>





      <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-12 lg:gap-16">
  <div className="text-center">
    <Image
      src={img1}
      alt="Pitch Image"
      className="w-[300px] h-[320px] md:w-[200px] md:h-[250px] lg:w-[321px] lg:h-[364px]"
    />
    <p
      style={baumans.style}
      className="text-3xl md:text-5xl lg:text-6xl bg-gradient-to-t from-[#3E5484] to-[#944F9F] bg-clip-text text-transparent mt-4"
    >
      Pitch
    </p>
  </div>

  <div className="text-center">
    <Image
      src={img2}
      alt="Build Image"
      className="w-[300px] h-[320px] md:w-[200px] md:h-[250px] lg:w-[321px] lg:h-[364px]"
    />
    <p
      style={baumans.style}
      className="text-3xl md:text-5xl lg:text-6xl bg-gradient-to-t from-[#3E5484] to-[#944F9F] bg-clip-text text-transparent mt-4"
    >
      Build
    </p>
  </div>

  <div className="text-center">
    <Image
      src={img3}
      alt="Intern Image"
      className="w-[300px] h-[320px] md:w-[200px] md:h-[280px] lg:w-[321px] lg:h-[364px]"
    />
    <p
      style={baumans.style}
      className="text-3xl md:text-5xl lg:text-6xl bg-gradient-to-t from-[#3E5484] to-[#944F9F] bg-clip-text text-transparent mt-4"
    >
      Intern
    </p>
  </div>
</div>




      <div className="flex items-center justify-center py-10">

        <div className="w-[1100px] h-[253px] ">

          <p style={baumans.style} className="text-center p-3 md:p-0 lg:p-0 text-[40px] md:text-[44px] lg:text-6xl "> The top teams win an <span className="bg-gradient-to-t from-[#7847CC] to-[#DFA9E7] bg-clip-text text-transparent">internship</span> at <span className="text-[#38FFC77A] ">Niramaya Health Tech</span>, where <span style={caveat.style} className="text-[50px] lg:text-8xl "> innovation </span> meets <span style={caveat.style} className="text-[50px]  lg:text-8xl ">impact</span>.</p>
        </div>
      </div>
    </>
  );
};





