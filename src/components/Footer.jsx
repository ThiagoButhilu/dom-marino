import { MessageCircle } from "lucide-react";
import InstagramIcon from "./icons/InstagramIcon";
import Logo from "./Logo";
import { nav, contact, brand } from "../data/siteConfig";

export default function Footer() {
  const whatsappHref = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    contact.whatsappMessage
  )}`;

  return (
    <footer className="border-t border-creme/10 bg-carvao pb-8 pt-14">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col items-center gap-3 md:items-start">
          <Logo size="sm" />
          <p className="max-w-xs text-center text-sm text-creme/50 md:text-left">
            {brand.description}
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-6">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-creme/70 hover:text-ambar-light"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex gap-3">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-creme/15 text-creme/80 transition-colors hover:border-ambar-light hover:text-ambar-light"
          >
            <MessageCircle size={18} />
          </a>
          <a
            href={contact.instagramUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-creme/15 text-creme/80 transition-colors hover:border-ambar-light hover:text-ambar-light"
          >
            <InstagramIcon size={18} />
          </a>
        </div>
      </div>

      <p className="mt-10 text-center text-xs text-creme/35">
        © {new Date().getFullYear()} {brand.name} {brand.tagline}. Todos os
        direitos reservados.
      </p>
    </footer>
  );
}
