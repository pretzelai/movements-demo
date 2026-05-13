"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function UsersCounter() {
  const [count, setCount] = useState(0);
  const target = 2847;

  useEffect(() => {
    const duration = 2000;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.floor(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="flex flex-col items-center gap-6 relative">
      <h2 className="text-xl md:text-2xl font-semibold text-white">
        Comunidad de Movers
      </h2>
      <div
        className="relative leading-[100%] text-[68px] md:text-[140px] font-normal uppercase font-anton"
        style={{
          background:
            "linear-gradient(90deg, #6B46C1 0%, #EC4899 50%, #FACC15 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        <span>{count.toLocaleString("es-ES")}</span>
        <div
          className="hidden lg:block lg:absolute"
          style={{ width: 275, height: "auto", top: 0, right: -295 }}
        >
          <Image
            alt="Personas esperando a unirse a tu movimiento"
            src="/images/homepage/users-counter/users-counter-annotation-1-ES-desktop.png"
            width={290}
            height={65}
            className="object-contain w-auto h-auto"
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="lg:hidden">
          <Image
            alt="Personas esperando a unirse a tu movimiento"
            src="/images/homepage/users-counter/users-counter-annotation-1-ES-mobile.png"
            width={280}
            height={64}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
