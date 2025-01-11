import Image from "next/image";
import { Michroma, Baumans } from "next/font/google";
import Welcome from "../WelcomePage/page";
const michorma = Michroma({ weight: "400", subsets: ["latin"], preload: true });
const baumans = Baumans({ weight: "400", subsets: ["latin"], preload: true });

/**
 * The hero section of the website
 *
 * This component renders the hero section of the website, which includes a
 * background image, a heading, and a subheading.
 *
 * @returns The hero section component
 */
export const Hero = () => {
  const codeTextGradient = "linear-gradient(90deg, #757AD0 0%, #CD89D7 100%)";
  return (
<div className={`${michorma.className} w-full relative flex flex-col justify-center items-center mt-20 lg:mt-0`}>
      {/* Background */}
      <img
        alt="Looper background"
        src="/images/hero-section-looper-bg.svg"
        className="w-[100%] h-auto object-cover absolute top-0"
      />

      {/* Text */}
      <div className="flex flex-col md:gap-4 items-center h-auto lg:h-[110vh] justify-center">
        <div className="relative">
          <h1
            style={{
              background: codeTextGradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: "clamp(26px, 6vw, 96px)",
            }}
            className=" text-[96px] relative left-[18%] "
          >
            people&apos;s
          </h1>
          <h1
            style={{ fontSize: "clamp(26px, 6vw, 96px)" }}
            className=" bg-transparent leading-[50px]"
          >
            The <span className=" line-through">Code</span> Business
          </h1>
        </div>

        <div className="relative">
          {/* Central Image */}
          <Image
            alt="Hero section image"
            src="/images/hero-section-image.svg"
            width={686}
            height={457}
            className=""
            objectFit="contain"
          />
          <div
            style={{
              background: codeTextGradient,
            }}
            className="-z-10 blur-3xl md:w-[980px] md:h-[980px] w-[340px] h-[360px] opacity-60  bg-[#18311f] border-8 border-white border-opacity-5 rounded-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          ></div>
        </div>
        <h2 style={{ fontSize: "clamp(22px, 4vw, 64px)" }}>
          Where{" "}
          <span
            style={{
              ...baumans.style,
              background: codeTextGradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            idea&apos;s
          </span>{" "}
          take lead
        </h2>
      </div>
      <Welcome />
    </div>
  );
};

