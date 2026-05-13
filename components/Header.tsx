import Image from "next/image";
import Link from "next/link";
import { Button } from "./Button";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-white">
      <div className="h-[6px] bg-gradient-to-r from-[#6B46C1] via-[#EC4899] to-[#FACC15]" />
      <div className="h-[54px] lg:h-[74px] flex items-center px-3 lg:px-4 gap-1">
        <div className="basis-0 flex gap-0 md:gap-6 grow items-center justify-start min-w-px">
          <Link href="/es" aria-label="Go to home page" className="shrink-0">
            <Image
              alt="Movements Logo"
              src="/images/bg/logo-movements.svg"
              width={130}
              height={25}
              className="w-[130px] h-[25px]"
              priority
            />
          </Link>
          <div className="flex items-center justify-center">
            <Link href="/es/suscripciones">
              <Button variant="ghost" size="sm">
                Apoya a MOVEMENTS
              </Button>
            </Link>
          </div>
        </div>
        <div className="basis-0 grow flex gap-2.5 lg:gap-3 items-center justify-end min-w-px">
          <Button variant="secondary" size="sm">
            Entrar
          </Button>
          <Button variant="primary" size="sm">
            Crear cuenta
          </Button>
        </div>
      </div>
    </header>
  );
}
