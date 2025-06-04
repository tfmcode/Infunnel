"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const Loader = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const [removeLoader, setRemoveLoader] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setFadeOut(true), 300); // inicia fade-out y scale-out
    const timer2 = setTimeout(() => setRemoveLoader(true), 900); // lo remueve del DOM

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (removeLoader) return null;

  return (
    <div
      className={`fixed inset-0 bg-[#5f6884] flex flex-col items-center justify-center z-[9999] transition-opacity duration-700 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <Image
        src="/img/logoIN_navbar.png"
        alt="INFUNNEL Logo"
        width={100}
        height={100}
        className={`transition-transform duration-700 ${
          fadeOut ? "scale-90" : "scale-100"
        }`}
      />
    </div>
  );
};

export default Loader;
