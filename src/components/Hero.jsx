import { motion } from "motion/react";
import { contact, flavors } from "../data/siteConfig";
import { asset } from "../lib/asset";

export default function Hero() {
  const whatsappHref = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    contact.whatsappMessage
  )}`;

  return (
    <section
      id="topo"
      className="grain relative flex h-screen flex-col overflow-hidden bg-carvao"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 60% at 25% 15%, rgba(232,163,61,0.16), transparent 65%)",
        }}
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-28 bg-gradient-to-b from-black/45 to-transparent" />

      <div className="grid min-h-0 flex-1 grid-rows-[auto_1fr] md:grid-cols-2 md:grid-rows-1">
        <div className="relative flex flex-col justify-center px-6 py-16 text-center sm:px-8 md:px-10 md:py-0 lg:pl-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative mx-auto"
          >
            <h1 className="font-display text-4xl font-black leading-[1.1] text-creme sm:text-5xl md:text-[3.1rem]">
              Pizza atrás de pizza, direto na sua mesa
            </h1>

            <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-creme/70">
              Rodízio gourmet em Presidente Prudente. Você senta, a gente não
              para de trazer sabor.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-4">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-brasa px-7 py-3.5 text-sm font-bold text-creme shadow-[0_8px_24px_rgba(196,64,31,0.4)] transition-transform hover:scale-[1.03] hover:bg-brasa-dark"
              >
                Reservar pelo WhatsApp
              </a>
              <a
                href="#cardapio"
                className="text-sm font-semibold text-creme/70 underline decoration-creme/30 underline-offset-4 transition-colors hover:text-ambar-light hover:decoration-ambar-light"
              >
                Ver o cardápio completo
              </a>
            </div>
          </motion.div>
        </div>

        <div className="relative h-full min-h-[220px] bg-carvao">
          <img
            src={asset("images/galeria-rucula-bresaola.jpg")}
            alt="Pizza de rúcula e bresaola sendo finalizada na Dom Marino"
            className="fade-into-bg h-full w-full object-cover"
            style={{ objectPosition: "50% 30%" }}
          />
        </div>
      </div>

      <div className="relative z-10 border-t border-ambar/15 bg-carvao-soft/60 py-4">
        <div className="flex w-max animate-marquee items-center gap-10 whitespace-nowrap">
          {[...flavors, ...flavors].map((flavor, i) => (
            <span
              key={`${flavor}-${i}`}
              className="flex items-center gap-10 font-punch text-sm uppercase tracking-wide text-creme/60"
            >
              {flavor}
              <span className="text-brasa" aria-hidden="true">
                ◆
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
