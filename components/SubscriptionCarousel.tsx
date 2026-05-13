"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

const cards = [
  {
    image: "/images/homepage/section-subscriptions/card-sanidad-publica-segura.jpg",
    icon: "/images/homepage/section-subscriptions/card-icon-sanidad-publica-segura.png",
    name: "Sanidad Pública Segur@",
    description:
      "Tamara Contreras lucha por unas condiciones laborales dignas para los médicos que garanticen una sanidad pública segura para todos.",
    url: "https://sanidadpublicasegura.movements.mov",
  },
  {
    image: "/images/homepage/section-subscriptions/card-signos-que-cambian-el-mundo.jpg",
    icon: "/images/homepage/section-subscriptions/card-icon-signos-que-cambian-el-mundo.png",
    name: "Signos que Cambian el Mundo",
    description:
      "Un movimiento que impulsa la lengua de signos como herramienta de inclusión y derechos para la comunidad sorda.",
    url: "#",
  },
  {
    image: "/images/homepage/section-subscriptions/card-generation-zero-nukes.jpg",
    icon: "/images/homepage/section-subscriptions/card-icon-generation-zero-nukes.png",
    name: "Generation Zero Nukes",
    description:
      "Una generación que exige un mundo libre de armas nucleares y se organiza para hacerlo posible.",
    url: "#",
  },
  {
    image: "/images/homepage/section-subscriptions/card-entierro-digno.jpg",
    icon: "/images/homepage/section-subscriptions/card-icon-entierro-digno.png",
    name: "Entierro Digno",
    description:
      "Una campaña que defiende el derecho a una despedida digna para todas las personas, sin importar su situación.",
    url: "#",
  },
];

export function SubscriptionCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((a) => (a + 1) % cards.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex w-full flex-col items-center justify-center gap-8 md:flex-row md:items-center md:gap-12">
      <div
        className="relative h-[279px] w-[285px] shrink-0 -translate-x-[31px] select-none md:h-[354px] md:w-[340px] md:translate-x-0"
        style={{ perspective: "1000px" }}
        aria-label="Carrusel de tarjetas en abanico"
      >
        {cards.map((card, i) => {
          // Position relative to active
          const rel = (i - active + cards.length) % cards.length;
          const z = cards.length - rel;
          const opacity = 1 - rel * 0.12;
          const tx = 27 - rel * 18;
          const ty = rel * 8;
          const tz = -rel * 22;
          const rot = -rel * 7;
          const scale = 1 - rel * 0.06;
          return (
            <div
              key={card.name}
              className="absolute left-1/2 top-1/2 h-[279px] w-[205px] overflow-hidden rounded-xl shadow-[0px_0px_40px_0px_rgba(0,0,0,0.4)] md:h-[354px] md:w-[260px]"
              style={{
                zIndex: z,
                opacity,
                transform: `translate(-50%, -50%) translateX(${tx}px) translateY(${ty}px) translateZ(${tz}px) rotate(${rot}deg) scale(${scale})`,
                transformOrigin: "center center",
                transition:
                  "transform 700ms cubic-bezier(0.22, 1, 0.36, 1), opacity 700ms cubic-bezier(0.22, 1, 0.36, 1)",
                willChange: "transform, opacity",
              }}
            >
              <Image
                alt={`Imagen representativa del movimiento ${card.name}`}
                src={card.image}
                width={260}
                height={354}
                className="h-full w-full object-cover"
              />
              <Image
                alt={card.name}
                src={card.icon}
                width={32}
                height={32}
                className="absolute bottom-2 left-2 w-8 h-8 object-cover rounded border border-white/25"
              />
            </div>
          );
        })}
      </div>

      <div className="relative w-full max-w-md text-center md:text-left">
        <div className="absolute -top-[240px] md:top-0 right-0 -mt-[112px] flex flex-col gap-2 md:justify-start">
          <p className="relative -top-4 max-w-[260px] md:max-w-[320px] rotate-[-2deg] md:rotate-[-6deg] font-caveat font-semibold text-[22px] md:text-[26px] leading-[0.9] text-[#6B46C1]">
            Esto pasa cuando una causa tiene las herramientas que necesita
          </p>
          <Image
            alt=""
            aria-hidden="true"
            src="/images/homepage/section-subscriptions/arrow-section-subscription.svg"
            width={44}
            height={35}
            className="mr-[36px] h-[26px] w-[32px] self-end -translate-y-[12px] rotate-[70deg] scale-x-[-1] md:ml-[20px] md:mr-0 md:h-[35px] md:w-[44px] md:translate-y-0 md:self-auto md:rotate-0 md:scale-x-100"
          />
        </div>
        <div
          key={active}
          className="flex flex-col items-stretch justify-center gap-3 md:items-start"
          style={{ animation: "fade-in 500ms ease-out" }}
        >
          <p className="w-full text-lg leading-relaxed text-[#0E1020] md:text-xl">
            {cards[active].description}
          </p>
          <Link
            target="_blank"
            className="flex w-full items-center justify-center gap-1 text-sm underline-offset-4 font-medium text-[#4B5162] hover:underline md:justify-start md:text-base"
            href={cards[active].url}
          >
            {cards[active].name}
            <ArrowUpRight className="w-4 h-4 text-[#C8CAD3]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
