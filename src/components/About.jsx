import { motion } from "motion/react";
import { Flame, Users, PartyPopper } from "lucide-react";
import PizzaIllustration from "./PizzaIllustration";
import { brand, pillars } from "../data/siteConfig";

const icons = [Flame, Users, PartyPopper];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function About() {
  return (
    <section id="sobre" className="relative bg-creme pb-24 sm:pb-28">
      {/* Pizza sobreposta na costura entre o Hero/marquee e esta section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 mx-auto h-36 w-36 -translate-y-1/2 sm:h-48 sm:w-48 md:h-56 md:w-56"
      >
        <PizzaIllustration className="h-full w-full drop-shadow-2xl" />
      </motion.div>

      <div className="mx-auto -mt-8 max-w-2xl px-6 text-center sm:px-8">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-bold uppercase tracking-[0.25em] text-brasa"
        >
          Nossa história
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-3 font-display text-4xl font-bold text-carvao text-balance sm:text-5xl"
        >
          Tradição, fogo de chão e carinho em cada fatia.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="mx-auto mt-5 max-w-md text-base leading-relaxed text-carvao/70"
        >
          A {brand.name} nasceu da vontade de trazer para {brand.city} uma
          experiência de rodízio gourmet de verdade: massa de fermentação
          lenta, ingredientes selecionados e um ambiente pensado para reunir
          gente que gosta de boa comida e boa companhia.
        </motion.p>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto mt-12 grid max-w-5xl gap-5 px-6 sm:grid-cols-3 sm:px-8"
      >
        {pillars.map((pillar, i) => {
          const Icon = icons[i % icons.length];
          return (
            <motion.div
              key={pillar.title}
              variants={item}
              whileHover={{ scale: 1.02 }}
              className="flex flex-col items-center rounded-2xl border border-carvao/10 bg-white/60 p-5 text-center shadow-sm"
            >
              <Icon className="text-brasa" size={24} />
              <p className="mt-3 font-display text-base font-bold text-carvao">
                {pillar.title}
              </p>
              <p className="mt-1.5 text-sm leading-snug text-carvao/65">
                {pillar.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
