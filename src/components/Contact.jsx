import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import InstagramIcon from "./icons/InstagramIcon";
import { contact, brand } from "../data/siteConfig";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Contact() {
  const whatsappHref = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    contact.whatsappMessage
  )}`;

  const cards = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Reservas, pedidos e dúvidas rápidas.",
      cta: "Chamar no WhatsApp",
      href: whatsappHref,
      badgeClass: "bg-gradient-to-br from-[#25D366] to-[#128C7E]",
      accentClass: "text-[#25D366]",
    },
    {
      icon: InstagramIcon,
      title: "Instagram",
      description: contact.instagramHandle,
      cta: "Seguir no Instagram",
      href: contact.instagramUrl,
      badgeClass:
        "bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF]",
      accentClass: "text-[#DD2A7B]",
    },
  ];

  return (
    <section id="contato" className="bg-carvao py-24 sm:py-28">
      <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-ambar-light">
            Fale com a gente
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold text-creme sm:text-5xl">
            Vamos combinar sua próxima pizza?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-creme/60">
            Chame no WhatsApp para reservar sua mesa ou acompanhe as novidades
            da {brand.name} no Instagram.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="mx-auto mt-12 grid max-w-xl gap-6 sm:grid-cols-2"
        >
          {cards.map((card) => (
            <motion.a
              key={card.title}
              variants={item}
              whileHover={{ scale: 1.03 }}
              href={card.href}
              target="_blank"
              rel="noreferrer"
              className="relative flex flex-col items-center gap-3 overflow-hidden rounded-2xl border border-creme/10 bg-carvao-soft/60 p-8 text-center transition-colors hover:border-ambar/40"
            >
              <span
                className={`relative flex h-12 w-12 items-center justify-center rounded-full ${card.badgeClass}`}
              >
                <card.icon className="text-white" size={22} />
              </span>
              <p className="relative font-display text-lg font-bold text-creme">
                {card.title}
              </p>
              <p className="relative text-sm text-creme/55">
                {card.description}
              </p>
              <span
                className={`relative mt-1 text-xs font-bold uppercase tracking-widest ${card.accentClass}`}
              >
                {card.cta}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
