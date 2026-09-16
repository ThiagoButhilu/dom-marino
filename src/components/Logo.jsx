import { brand } from "../data/siteConfig";
import { asset } from "../lib/asset";

// Logo oficial (PNG com fundo transparente). A própria arte já traz o nome
// "Dom Marino" e o selo "Pizzaria Gourmet" desenhados, então não precisa de
// texto adicional ao lado — só ajustar a altura por contexto de uso.
export default function Logo({ size = "md" }) {
  const heightClass = size === "sm" ? "h-10" : "h-14";

  return (
    <img
      src={asset("logo.png")}
      alt={`${brand.name} ${brand.tagline}`}
      className={`${heightClass} w-auto object-contain`}
    />
  );
}
