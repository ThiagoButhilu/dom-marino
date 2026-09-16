// Ilustração vetorial de uma pizza (não uma foto, não um círculo) — usada
// para sobrepor a costura entre sections. O contorno da massa é levemente
// irregular de propósito, pra não ler como uma forma geométrica perfeita.
export default function PizzaIllustration({ className }) {
  return (
    <svg viewBox="-15 -35 230 250" className={className} aria-hidden="true">
      <path
        d="M192,100 L179,133 L164,164 L133,180 L100,194 L67,180 L36,164 L22,132 L7,100 L21,67 L37,37 L68,22 L100,5 L134,19 L164,36 L180,67 Z"
        fill="#E3A945"
        stroke="#3A241A"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      <circle cx="100" cy="100" r="74" fill="#F6D97C" stroke="#3A241A" strokeWidth="2" />

      <path d="M58,68 Q75,58 90,72 Q78,86 58,68 Z" fill="#F0C965" opacity="0.65" />
      <path d="M118,128 Q140,122 146,140 Q124,150 118,128 Z" fill="#F0C965" opacity="0.65" />

      <g stroke="#C98A2E" strokeWidth="2" opacity="0.7">
        <line x1="100" y1="100" x2="100" y2="27" />
        <line x1="100" y1="100" x2="163" y2="63" />
        <line x1="100" y1="100" x2="163" y2="137" />
        <line x1="100" y1="100" x2="100" y2="173" />
        <line x1="100" y1="100" x2="37" y2="137" />
        <line x1="100" y1="100" x2="37" y2="63" />
      </g>

      <g fill="#B03A1B" stroke="#7C2712" strokeWidth="1.5">
        <circle cx="85" cy="75" r="9" />
        <circle cx="125" cy="80" r="8" />
        <circle cx="70" cy="115" r="9" />
        <circle cx="130" cy="125" r="8" />
        <circle cx="100" cy="145" r="8" />
        <circle cx="60" cy="140" r="7" />
        <circle cx="140" cy="105" r="7" />
      </g>

      <g fill="#4B6B32" opacity="0.8">
        <circle cx="95" cy="60" r="2" />
        <circle cx="112" cy="66" r="1.7" />
        <circle cx="75" cy="92" r="2" />
        <circle cx="142" cy="96" r="1.7" />
        <circle cx="90" cy="122" r="2" />
        <circle cx="118" cy="138" r="1.7" />
        <circle cx="63" cy="122" r="1.7" />
        <circle cx="132" cy="150" r="2" />
      </g>

      <g stroke="#FBF3E7" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.55">
        <path d="M80,2 C75,-8 85,-13 80,-23" />
        <path d="M100,0 C95,-12 105,-17 100,-29" />
        <path d="M120,2 C115,-8 125,-13 120,-23" />
      </g>
    </svg>
  );
}
