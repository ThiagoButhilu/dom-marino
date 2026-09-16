import { motion } from "motion/react";
import { Pizza } from "lucide-react";
import { menu } from "../data/siteConfig";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Menu() {
  return (
    <section id="cardapio" className="bg-carvao py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-ambar-light">
            Cardápio
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold text-creme sm:text-5xl">
            Sabores que contam história
          </h2>
          <p className="mt-4 text-base leading-relaxed text-creme/60">
            Um resumo das nossas categorias. Cada pizza tem dezenas de
            sabores à sua escolha — chama no WhatsApp para ver a lista
            completa.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2">
          {menu.map((category) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="overflow-hidden rounded-2xl border border-creme/10 bg-carvao-soft/60"
            >
              {category.image ? (
                <div className="relative h-40">
                  <img
                    src={category.image}
                    alt={category.category}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-carvao-soft via-carvao-soft/10 to-transparent" />
                  <h3 className="absolute bottom-3 left-5 font-display text-xl font-bold text-creme">
                    {category.category}
                  </h3>
                </div>
              ) : (
                <div className="flex items-center gap-2.5 px-7 pt-7">
                  <Pizza className="text-brasa" size={20} />
                  <h3 className="font-display text-xl font-bold text-ambar-light">
                    {category.category}
                  </h3>
                </div>
              )}

              <motion.ul
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="divide-y divide-creme/10 px-7 pb-7 pt-5"
              >
                {category.items.map((dish) => (
                  <motion.li
                    key={dish.name}
                    variants={item}
                    className="flex items-start justify-between gap-4 py-3.5 first:pt-0 last:pb-0"
                  >
                    <div>
                      <p className="font-semibold text-creme">{dish.name}</p>
                      <p className="mt-0.5 text-sm text-creme/55">
                        {dish.description}
                      </p>
                    </div>
                    <span className="shrink-0 font-display text-sm font-bold text-brasa">
                      {dish.price}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
