import Image from "next/image";

export const Hero = () => {
  return (
    <div className="w-full relative">
      <Image
        alt="Looper background"
        src="/images/hero-section-looper-bg.png"
        fill
        objectFit="contain"
      />
      <div className="flex flex-col gap-4">
        <h1>people's</h1>
        <h1>
          The <span>Code</span> Business
        </h1>
        <Image
          alt="Hero section image"
          src="/images/hero-section-image.png"
          fill
          objectFit="contain"
        />
        <h2>
          Where <span>idea's</span> take lead
        </h2>
      </div>
    </div>
  );
};
