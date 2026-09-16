import { motion } from "motion/react";
import { MapPin, Clock } from "lucide-react";
import { address, hours } from "../data/siteConfig";

export default function Address() {
  const mapQuery =
    address.lat && address.lng
      ? `${address.lat},${address.lng}`
      : address.mapsQuery;
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    mapQuery
  )}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="endereco" className="bg-creme py-24 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 sm:px-8 md:grid-cols-2 md:items-stretch">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-brasa">
            Onde estamos
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold text-carvao sm:text-5xl">
            Venha nos visitar
          </h2>

          <div className="mt-8 flex items-start justify-center gap-4 text-left md:justify-start">
            <MapPin className="mt-1 shrink-0 text-brasa" size={22} />
            <div>
              <p className="font-display text-lg font-bold text-carvao">
                {address.name}
              </p>
              <p className="font-semibold text-carvao">{address.street}</p>
              <p className="text-carvao/65">
                {address.neighborhood} · {address.city}
              </p>
              <p className="text-carvao/65">{address.zip}</p>
              <a
                href={address.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block text-sm font-bold text-brasa underline decoration-brasa/30 underline-offset-4 hover:decoration-brasa"
              >
                Abrir no Google Maps
              </a>
            </div>
          </div>

          <div className="mt-8 flex items-start justify-center gap-4 text-left md:justify-start">
            <Clock className="mt-1 shrink-0 text-brasa" size={22} />
            <div className="w-full max-w-xs">
              {hours.map((h) => (
                <div
                  key={h.day}
                  className="flex justify-between border-b border-carvao/10 py-1.5 text-sm last:border-none"
                >
                  <span className="text-carvao/70">{h.day}</span>
                  <span className="font-semibold text-carvao">{h.time}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="min-h-[320px] overflow-hidden rounded-[2rem] border-4 border-white shadow-xl"
        >
          <iframe
            title="Localização no mapa"
            src={mapSrc}
            className="h-full min-h-[320px] w-full grayscale-[15%]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}
