import Image from "next/image";
import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { SubscriptionCarousel } from "@/components/SubscriptionCarousel";
import { UsersCounter } from "@/components/UsersCounter";
import { AvatarGrid } from "@/components/AvatarGrid";

export default function Home() {
  return (
    <div className="min-h-screen bg-white pt-[60px] lg:pt-[80px]">
      <Header />
      <main>
        {/* HERO */}
        <section
          className="relative mt-[-60px] lg:mt-[-80px] h-[100vh] min-h-[680px] lg:min-h-[780px] max-h-[1080px] overflow-hidden flex flex-col items-center justify-center gap-8 p-6 md:p-8"
          style={{
            background:
              "url(/images/homepage/hero-min.jpg) center / cover no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-[#040926]/50" aria-hidden="true" />
          <div className="relative z-10 w-full max-w-4xl flex flex-col items-center justify-center text-center md:text-left">
            <div className="w-full flex flex-col items-center md:items-start gap-8 lg:gap-16">
              <div className="w-full flex flex-col items-center md:items-start gap-4 lg:gap-6">
                <h1 className="text-[60px] md:text-[90px] lg:text-[140px] font-normal text-white leading-[1em] tracking-tight uppercase text-center md:text-left font-anton">
                  Empieza el movimiento
                </h1>
                <p className="text-xl md:text-2xl lg:text-2xl text-[#C8CAD3] text-center md:text-left max-w-3xl mx-auto md:mx-0 text-balance">
                  Somos la nueva plataforma para quienes quieren organizar,
                  escalar y sostener su causa.
                </p>
              </div>
              <Link href="/es/crear-peticion">
                <Button variant="gradient" size="xl">
                  Crea tu petición
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* ALL IN ONE */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1 flex flex-col gap-8">
                <div className="flex flex-col justify-center gap-8 md:gap-12 items-start">
                  <h2 className="text-3xl md:text-4xl lg:text-6xl text-balance font-anton font-normal leading-[1.2] tracking-[-1.5625%] uppercase text-left text-[#0E1020]">
                    Todo-en-uno para crear un movimiento
                  </h2>
                  <div className="flex flex-col justify-center gap-2 items-start">
                    <p className="text-base md:text-xl font-semibold text-left text-[#0E1020]">
                      Olvídate de dispersar tu energía entre múltiples herramientas
                    </p>
                    <p className="text-base leading-relaxed text-left text-[#4B5162]">
                      MOVEMENTS integra todo lo que necesitas para transformar tu
                      idea en un movimiento poderoso: desde el lanzamiento inicial
                      hasta la gestión avanzada de tu comunidad y la construcción
                      de un modelo sostenible, todo desde una sola plataforma
                      intuitiva.
                    </p>
                  </div>
                  <Link href="/es/crear-movimiento">
                    <Button variant="gradient" size="md">
                      Crea tu movimiento
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex-1 relative">
                <Image
                  alt="Todo-en-uno para crear un movimiento"
                  src="/images/homepage/all-in-one/all-in-one-mockups-ES-desktop.png"
                  width={600}
                  height={400}
                  className="w-full h-auto hidden lg:block"
                />
                <Image
                  alt="Todo-en-uno para crear un movimiento"
                  src="/images/homepage/all-in-one/all-in-one-mockups-ES-mobile.png"
                  width={600}
                  height={400}
                  className="w-full h-auto lg:hidden"
                />
              </div>
            </div>
          </div>
        </section>

        {/* PROTEST SEPARATOR */}
        <section className="bg-white flex flex-col items-center justify-center w-full">
          <div className="w-full max-w-[1600px] flex justify-center">
            <Image
              alt=""
              src="/images/homepage/bg_protest_separator.png"
              width={1552}
              height={151}
              className="w-full max-w-[1552px] h-auto"
            />
          </div>
        </section>

        {/* COMMUNITY / MOVERS COUNTER */}
        <section className="py-16 bg-[#040926]">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="flex flex-col items-center gap-16">
              <UsersCounter />
              <AvatarGrid />
              <Link href="/es/registro">
                <Button variant="gradient" size="md">
                  Únete ahora
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section
          className="relative"
          style={{ paddingTop: 20, background: "var(--base-primary, #040926)" }}
        >
          <div
            className="max-w-[1272px] mx-auto px-6 lg:text-center"
            style={{
              paddingBottom: 400,
              background:
                "url(/images/homepage/values/values-background-desktop.jpg) center / cover no-repeat",
            }}
          >
            <div className="flex flex-col items-center max-w-xl mx-auto">
              <div className="flex flex-col justify-center gap-8 md:gap-12 items-start">
                <h2 className="text-3xl md:text-4xl lg:text-6xl text-balance font-anton font-normal leading-[1.2] tracking-[-1.5625%] uppercase text-left text-white">
                  Plataforma abierta con valores
                </h2>
                <div className="flex flex-col justify-center gap-2 items-start">
                  <p className="text-base md:text-xl font-semibold text-left text-white">
                    Creemos en la democratización del cambio social
                  </p>
                  <p className="text-base leading-relaxed text-left text-[#C8CAD3]">
                    Ya seas una persona impulsando el cambio, un colectivo
                    emergente o una organización consolidada, MOVEMENTS te da
                    las mismas oportunidades para generar impacto. Nuestra
                    comunidad se construye sobre pilares inquebrantables: el
                    respeto mutuo, la transparencia y el compromiso genuino con
                    el bien común.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* YOURS */}
        <section className="pt-16 lg:pt-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="hidden lg:block">
              <div className="flex gap-24 mb-24">
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl lg:text-6xl text-balance font-anton font-normal leading-[1.2] tracking-[-1.5625%] uppercase text-left text-[#0E1020]">
                    Todo lo que generas es tuyo
                  </h2>
                </div>
                <div className="flex-1 flex flex-col gap-6">
                  <div className="flex flex-col justify-center gap-8 md:gap-12 items-start">
                    <div className="flex flex-col justify-center gap-2 items-start">
                      <p className="text-base md:text-xl font-semibold text-left text-[#0E1020]">
                        Tu trabajo, tu comunidad, tus resultados
                      </p>
                      <p className="text-base leading-relaxed text-left text-[#4B5162]">
                        En MOVEMENTS, eres quien tiene control absoluto de lo
                        que construyes. Sin algoritmos que limiten el alcance,
                        sin plataformas que retengan a la comunidad. Se mantiene
                        control total sobre la audiencia, contenido e ingresos,
                        porque el movimiento pertenece solo a quien lo crea.
                      </p>
                    </div>
                    <Link href="/es/crear-peticion">
                      <Button variant="gradient" size="md">
                        Crea tu petición
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <Image
                  alt="Todo lo que generas es tuyo"
                  src="/images/homepage/yours/yours-mockup-ES-desktop.png"
                  width={1200}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="lg:hidden flex flex-col gap-12">
              <div className="flex flex-col justify-center gap-8 md:gap-12 items-start">
                <h2 className="text-3xl md:text-4xl lg:text-6xl text-balance font-anton font-normal leading-[1.2] tracking-[-1.5625%] uppercase text-left text-[#0E1020]">
                  Todo lo que generas es tuyo
                </h2>
                <div className="flex flex-col justify-center gap-2 items-start">
                  <p className="text-base md:text-xl font-semibold text-left text-[#0E1020]">
                    Tu trabajo, tu comunidad, tus resultados
                  </p>
                  <p className="text-base leading-relaxed text-left text-[#4B5162]">
                    En MOVEMENTS, eres quien tiene control absoluto de lo que
                    construyes. Sin algoritmos que limiten el alcance, sin
                    plataformas que retengan a la comunidad. Se mantiene control
                    total sobre la audiencia, contenido e ingresos, porque el
                    movimiento pertenece solo a quien lo crea.
                  </p>
                </div>
                <Link href="/es/crear-peticion">
                  <Button variant="gradient" size="md">
                    Crea tu petición
                  </Button>
                </Link>
              </div>
              <div className="w-full">
                <Image
                  alt="Todo lo que generas es tuyo"
                  src="/images/homepage/yours/yours-mockup-ES-mobile-new.png"
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* PEOPLE */}
        <section
          className="py-20 md:py-32 relative"
          style={{
            background:
              "url(/images/homepage/people/people-background.jpg) center / cover no-repeat",
          }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1 relative">
                <Image
                  alt="Llega a más gente"
                  src="/images/homepage/people/people-images.png"
                  width={600}
                  height={400}
                  className="w-[382px] lg:w-full h-auto"
                />
              </div>
              <div className="flex-1 flex flex-col gap-8">
                <div className="flex flex-col justify-center gap-8 md:gap-12 items-start">
                  <h2 className="text-3xl md:text-4xl lg:text-6xl text-balance font-anton font-normal leading-[1.2] tracking-[-1.5625%] uppercase text-left text-white">
                    Llega a más gente
                  </h2>
                  <div className="flex flex-col justify-center gap-2 items-start">
                    <p className="text-base md:text-xl font-semibold text-left text-white">
                      Amplifica tu impacto exponencialmente
                    </p>
                    <p className="text-base leading-relaxed text-left text-[#C8CAD3]">
                      Nuestro conjunto de herramientas de difusión inteligente
                      conecta tu causa con las personas que realmente pueden
                      marcar la diferencia. Desde funcionalidades virales hasta
                      sistemas de recomendación basados en valores compartidos,
                      MOVEMENTS convierte a cada integrante de la comunidad en
                      un multiplicador de tu mensaje, expandiendo tu alcance
                      hasta comunidades que nunca imaginaste alcanzar.
                    </p>
                  </div>
                  <Link href="/es/crear-movimiento">
                    <Button variant="gradient" size="md">
                      Crea tu movimiento
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SUBSCRIPTIONS MOCK */}
        <section className="py-16 md:py-32 bg-white relative">
          <div
            className="absolute pointer-events-none hidden lg:block"
            style={{
              background:
                "url(/images/homepage/subscriptions/subscriptions-mockup-ES-desktop.png) center / contain no-repeat",
              maxHeight: 590,
              width: "100%",
              height: "100%",
              right: 0,
              top: "50%",
              transform: "translateY(-50%)",
              flexShrink: 0,
              zIndex: 0,
            }}
          />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex items-center flex-col lg:flex-row gap-8">
              <div
                className="flex-1 m-auto lg:m-0 flex flex-col items-center md:items-start lg:items-start"
                style={{ maxWidth: 516, gap: 48, flex: "1 0 0", alignSelf: "stretch" }}
              >
                <div className="flex flex-col justify-center gap-8 md:gap-12 items-start">
                  <h2 className="text-3xl md:text-4xl lg:text-6xl text-balance font-anton font-normal leading-[1.2] tracking-[-1.5625%] uppercase text-left text-[#0E1020]">
                    Un nuevo modelo de sostenibilidad para el cambio
                  </h2>
                  <div className="flex flex-col justify-center gap-2 items-start">
                    <p className="text-base md:text-xl font-semibold text-left text-[#0E1020]">
                      El cambio real necesita tiempo y recursos
                    </p>
                    <p className="text-base leading-relaxed text-left text-[#4B5162]">
                      Por eso vamos más allá de las peticiones tradicionales y
                      te ofrecemos un ecosistema completo de sostenibilidad.
                      Convierte la pasión de tu comunidad en el combustible que
                      mantenga vivo tu movimiento a largo plazo.
                    </p>
                  </div>
                  <Link href="/es/registro">
                    <Button variant="gradient" size="md">
                      Únete ahora
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="w-full relative lg:hidden">
                <Image
                  alt="Un nuevo modelo de sostenibilidad para el cambio"
                  src="/images/homepage/subscriptions/subscriptions-mockup-ES-mobile.png"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                  style={{ margin: "0 auto", maxWidth: 600 }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* SUPPORT / CAROUSEL */}
        <section className="w-full p-2 md:p-6">
          <div className="bg-[#F4F5F8] rounded-2xl px-4 pt-12 pb-6 md:pt-32 md:pb-20">
            <div className="flex flex-col items-center justify-center gap-12 md:gap-16 w-full lg:max-w-4xl mx-auto">
              <div className="mb-6 md:mb-0 md:max-w-2xl lg:max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl lg:text-6xl text-balance font-anton font-normal leading-[1.2] tracking-[-1.5625%] uppercase text-center text-[#0E1020]">
                  Apoya la plataforma
                  <br />
                  <span className="text-[#C8CAD3]">
                    que hace que cualquier causa pueda organizarse, crecer y ganar
                  </span>
                </h2>
              </div>
              <SubscriptionCarousel />
              <div className="flex flex-col items-center justify-center gap-3">
                <Button variant="gradient" size="xl">
                  Suscríbete desde 5€ al mes
                </Button>
                <p className="text-xs text-[#4B5162] flex items-center justify-center gap-1">
                  <ShieldCheck className="w-4 h-4" />
                  Pago seguro. Cancela cuando quieras.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
