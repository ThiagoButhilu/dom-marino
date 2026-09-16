import { motion } from "motion/react";
import { asset } from "../lib/asset";

const photos = [
  {
    src: asset("images/galeria-quatro-queijos.jpg"),
    alt: "Fatia de pizza quatro queijos da Dom Marino",
    caption: "Quatro Queijos",
  },
  {
    src: asset("images/galeria-rucula-bresaola.jpg"),
    alt: "Pizza com rúcula e bresaola sendo finalizada",
    caption: "Rúcula & Bresaola",
  },
  {
    src: asset("images/galeria-chocolate.jpg"),
    alt: "Pizza doce coberta com chocolate granulado",
    caption: "Chocolate",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Gallery() {
  return (
    <section className="bg-creme py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-brasa">
            Direto do forno
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold text-carvao sm:text-5xl">
            Feito na hora, do jeito que tem que ser
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-14 grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-3"
        >
          {photos.map((photo) => (
            <motion.figure
              key={photo.src}
              variants={item}
              whileHover={{ scale: 1.02 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-xl shadow-lg sm:rounded-[2rem]"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-carvao/70 via-transparent to-transparent" />
              <figcaption className="absolute bottom-2 left-3 font-display text-sm font-bold text-creme sm:bottom-5 sm:left-5 sm:text-lg">
                {photo.caption}
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
