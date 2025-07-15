"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    sectionRef.current?.classList.add("opacity-0");
    requestAnimationFrame(() => {
      sectionRef.current?.classList.add("opacity-100");
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="w-full transition-opacity duration-1000 opacity-0 bg-white flex items-center justify-center"
      style={{backgroundColor: "#f4fdfe"}}
    >
      {/* Imagen Mobile */}
      <div className="block md:hidden w-full">
        <Image
          src="/img/Banner_Mobile.JPEG"
          alt="Banner Mobile"
          width={800}
          height={1200}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Imagen Desktop */}
      <div className="hidden md:block w-full max-w-screen-2xl">
        <Image
          src="/img/Banner_Desktop.jpg"
          alt="Banner Desktop"
          width={1920}
          height={1080}
          className="w-full h-auto"
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
