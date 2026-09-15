import React from 'react';

interface FoodIllustrationProps {
  type: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'tray';
}

export const FoodIllustration: React.FC<FoodIllustrationProps> = ({ 
  type, 
  className = '', 
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
    tray: 'w-full h-full'
  }[size];

  switch (type) {
    case 'goli-baje':
      return (
        <div className={`relative flex items-center justify-center ${sizeClasses} ${className}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-md">
            {/* Cluster of golden-fried goli baje */}
            <circle cx="42" cy="58" r="22" fill="#C97D32" stroke="#9A561B" strokeWidth="2" />
            <circle cx="40" cy="55" r="20" fill="url(#goliGrad1)" />
            {/* Coconut flecks & ginger dots */}
            <circle cx="34" cy="50" r="2" fill="#FDF8ED" />
            <circle cx="44" cy="62" r="1.5" fill="#3F6B3B" />
            <circle cx="46" cy="48" r="1.5" fill="#FDF8ED" />

            {/* Second orb */}
            <circle cx="62" cy="54" r="20" fill="#BF732B" stroke="#9A561B" strokeWidth="2" />
            <circle cx="60" cy="52" r="18" fill="url(#goliGrad2)" />
            <circle cx="56" cy="48" r="2" fill="#FDF8ED" />
            <circle cx="68" cy="56" r="1.5" fill="#3F6B3B" />

            {/* Top golden orb */}
            <circle cx="50" cy="36" r="21" fill="#D98A3A" stroke="#A85F20" strokeWidth="2" />
            <circle cx="48" cy="34" r="19" fill="url(#goliGrad3)" />
            {/* Highlights and crispy texture */}
            <ellipse cx="44" cy="28" rx="8" ry="4" fill="#FDE1A3" opacity="0.6" />
            <circle cx="54" cy="36" r="2" fill="#FDF8ED" />
            <circle cx="42" cy="40" r="1.5" fill="#32582F" />
            <circle cx="46" cy="31" r="1" fill="#4A2E1F" />

            {/* Sprinkled curry leaf */}
            <path d="M52 22 C55 18 64 20 62 25 C58 28 54 26 52 22 Z" fill="#3F6B3B" opacity="0.9" />

            <defs>
              <radialGradient id="goliGrad1" cx="35%" cy="35%">
                <stop offset="0%" stopColor="#EDB262" />
                <stop offset="70%" stopColor="#C97D32" />
                <stop offset="100%" stopColor="#8E4812" />
              </radialGradient>
              <radialGradient id="goliGrad2" cx="40%" cy="35%">
                <stop offset="0%" stopColor="#E9AC57" />
                <stop offset="75%" stopColor="#B86C24" />
                <stop offset="100%" stopColor="#7E3A0B" />
              </radialGradient>
              <radialGradient id="goliGrad3" cx="35%" cy="30%">
                <stop offset="0%" stopColor="#F5C478" />
                <stop offset="65%" stopColor="#D98A3A" />
                <stop offset="100%" stopColor="#9C5216" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      );

    case 'neer-dosa':
      return (
        <div className={`relative flex items-center justify-center ${sizeClasses} ${className}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-sm">
            {/* Triangle folded neer dosa 1 */}
            <path
              d="M18 78 L55 22 L82 72 Z"
              fill="#ECE5D7"
              stroke="#D2C8B6"
              strokeWidth="1.5"
            />
            {/* Delicate lace holes texture */}
            <circle cx="45" cy="50" r="1.5" fill="#DCD3C0" />
            <circle cx="52" cy="44" r="1" fill="#DCD3C0" />
            <circle cx="40" cy="62" r="1.5" fill="#DCD3C0" />
            <circle cx="60" cy="58" r="1" fill="#DCD3C0" />

            {/* Triangle folded neer dosa 2 (overlapping) */}
            <path
              d="M25 80 L62 26 L88 76 Z"
              fill="#FAF6ED"
              stroke="#D9CEBC"
              strokeWidth="1.5"
            />
            <path
              d="M32 76 L60 35 L78 74 Z"
              fill="#FFFFFF"
              opacity="0.7"
            />
            {/* Fold crease */}
            <line x1="62" y1="26" x2="52" y2="78" stroke="#D3C7B2" strokeWidth="1" strokeDasharray="3,2" />
            {/* Triangular third fold */}
            <path
              d="M32 72 L72 38 L84 68 Z"
              fill="#F4EEE1"
              opacity="0.85"
            />
            {/* Fresh grated coconut garnish sprinkle */}
            <circle cx="58" cy="46" r="1.5" fill="#FFF" />
            <circle cx="64" cy="52" r="1.5" fill="#FFF" />
            <circle cx="48" cy="56" r="1.5" fill="#FFF" />
            <circle cx="52" cy="64" r="1.5" fill="#FFF" />
          </svg>
        </div>
      );

    case 'buns':
      return (
        <div className={`relative flex items-center justify-center ${sizeClasses} ${className}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-md">
            {/* Mangalore Bun 1 - back */}
            <ellipse cx="40" cy="56" rx="26" ry="20" fill="#AB6423" />
            <ellipse cx="38" cy="53" rx="24" ry="18" fill="url(#bunGrad1)" />
            {/* Cumin seeds (jeera) */}
            <line x1="28" y1="50" x2="33" y2="52" stroke="#3D2411" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="44" y1="58" x2="48" y2="56" stroke="#3D2411" strokeWidth="1.5" strokeLinecap="round" />

            {/* Mangalore Bun 2 - front, puffy golden */}
            <ellipse cx="58" cy="42" rx="28" ry="22" fill="#B56E29" />
            <ellipse cx="56" cy="39" rx="26" ry="20" fill="url(#bunGrad2)" />
            {/* Puffed dome highlight */}
            <ellipse cx="52" cy="32" rx="14" ry="7" fill="#F8DE9A" opacity="0.6" />
            {/* Cumin seeds */}
            <line x1="50" y1="36" x2="55" y2="39" stroke="#3D2411" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="62" y1="44" x2="68" y2="42" stroke="#3D2411" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="42" y1="42" x2="46" y2="45" stroke="#3D2411" strokeWidth="1.5" strokeLinecap="round" />

            <defs>
              <radialGradient id="bunGrad1" cx="40%" cy="30%">
                <stop offset="0%" stopColor="#DF9C49" />
                <stop offset="70%" stopColor="#B2681F" />
                <stop offset="100%" stopColor="#7E4108" />
              </radialGradient>
              <radialGradient id="bunGrad2" cx="35%" cy="30%">
                <stop offset="0%" stopColor="#F2BA69" />
                <stop offset="65%" stopColor="#C97B28" />
                <stop offset="100%" stopColor="#8C490D" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      );

    case 'sanna':
      return (
        <div className={`relative flex items-center justify-center ${sizeClasses} ${className}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-sm">
            {/* Steamed Sanna disc 1 */}
            <ellipse cx="42" cy="56" rx="25" ry="17" fill="#DDD5C6" />
            <ellipse cx="42" cy="53" rx="24" ry="16" fill="#F3EFE6" />
            {/* Porous sponge fermentation dots */}
            <circle cx="34" cy="51" r="1.5" fill="#DFD6C5" />
            <circle cx="45" cy="55" r="1.2" fill="#DFD6C5" />
            <circle cx="50" cy="48" r="1.5" fill="#DFD6C5" />

            {/* Steamed Sanna disc 2 (overlapping front) */}
            <ellipse cx="60" cy="42" rx="26" ry="18" fill="#DDD5C6" />
            <ellipse cx="60" cy="39" rx="25" ry="17" fill="#FFFFFF" />
            <ellipse cx="58" cy="35" rx="16" ry="9" fill="#FFF" opacity="0.9" />
            {/* Spongy dots */}
            <circle cx="52" cy="38" r="1.5" fill="#E2DACB" />
            <circle cx="62" cy="42" r="1.2" fill="#E2DACB" />
            <circle cx="68" cy="36" r="1.5" fill="#E2DACB" />
            <circle cx="57" cy="32" r="1.2" fill="#E2DACB" />
          </svg>
        </div>
      );

    case 'kori-rotti':
      return (
        <div className={`relative flex items-center justify-center ${sizeClasses} ${className}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-md">
            {/* Deep coastal gravy pool */}
            <ellipse cx="50" cy="55" rx="38" ry="24" fill="#8F3014" />
            <ellipse cx="50" cy="53" rx="36" ry="22" fill="#A83C19" />
            {/* Shards of crisp white rice rotti sticking out */}
            <polygon points="30,60 18,32 40,48" fill="#F7F3EA" stroke="#E2DACB" strokeWidth="1" />
            <polygon points="46,55 52,22 68,44" fill="#FAF7F0" stroke="#E2DACB" strokeWidth="1" />
            <polygon points="62,58 84,36 72,62" fill="#F2ECE0" stroke="#E2DACB" strokeWidth="1" />
            {/* Gravy dripping on rotti shards */}
            <path d="M38 46 Q44 42 50 50 Q56 46 62 52" fill="none" stroke="#8F3014" strokeWidth="3" strokeLinecap="round" />
            {/* Mustard seeds & curry leaves */}
            <circle cx="44" cy="58" r="1.5" fill="#1C1814" />
            <circle cx="56" cy="62" r="1.5" fill="#1C1814" />
            <path d="M48 48 C52 44 58 46 56 50 C54 52 50 51 48 48 Z" fill="#32582F" />
          </svg>
        </div>
      );

    case 'filter-coffee':
      return (
        <div className={`relative flex items-center justify-center ${sizeClasses} ${className}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-md">
            {/* Dabarah (steel/brass outer wide bowl) */}
            <ellipse cx="50" cy="74" rx="36" ry="14" fill="#8E979C" />
            <ellipse cx="50" cy="71" rx="34" ry="12" fill="url(#steelGrad1)" />
            <ellipse cx="50" cy="68" rx="28" ry="8" fill="#586166" />

            {/* Tumbler (steel glass seated inside) */}
            <path
              d="M36 40 L40 68 Q50 72 60 68 L64 40 Z"
              fill="url(#steelGrad2)"
              stroke="#838E94"
              strokeWidth="1.5"
            />
            {/* Coffee rim */}
            <ellipse cx="50" cy="40" rx="14" ry="4" fill="#351B0D" />
            {/* Frothy creamy coffee head (Kaapi froth) */}
            <ellipse cx="50" cy="39" rx="13" ry="3.5" fill="#D3A264" />
            <ellipse cx="48" cy="38" rx="8" ry="2" fill="#ECD3A5" opacity="0.8" />
            {/* Tiny coffee bubbles */}
            <circle cx="46" cy="39" r="1" fill="#75431E" />
            <circle cx="53" cy="39" r="0.8" fill="#75431E" />

            {/* Rising steam curls */}
            <path
              d="M45 28 Q42 22 47 16"
              fill="none"
              stroke="#FFF"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.6"
            />
            <path
              d="M54 26 Q58 20 52 14"
              fill="none"
              stroke="#FFF"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.6"
            />

            <defs>
              <linearGradient id="steelGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#9AA4A9" />
                <stop offset="50%" stopColor="#E4EAED" />
                <stop offset="100%" stopColor="#879196" />
              </linearGradient>
              <linearGradient id="steelGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#828C91" />
                <stop offset="40%" stopColor="#D5DDE0" />
                <stop offset="70%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#737D82" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      );

    case 'kempu-chutney':
      return (
        <div className={`relative flex items-center justify-center ${sizeClasses} ${className}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-md">
            {/* Steel Katori Bowl */}
            <ellipse cx="50" cy="62" rx="34" ry="16" fill="#889297" />
            <ellipse cx="50" cy="58" rx="32" ry="14" fill="url(#katoriGrad)" stroke="#B3BDC2" strokeWidth="2" />
            {/* Fiery red Byadagi chutney filling */}
            <ellipse cx="50" cy="55" rx="27" ry="10" fill="#B1361E" />
            <ellipse cx="48" cy="53" rx="22" ry="7" fill="#C94429" />
            {/* Tempered mustard and coconut texture */}
            <circle cx="44" cy="53" r="1.5" fill="#1C1814" />
            <circle cx="52" cy="56" r="1.5" fill="#1C1814" />
            <circle cx="58" cy="52" r="1.2" fill="#FDF8ED" />
            <circle cx="40" cy="55" r="1.2" fill="#FDF8ED" />
            {/* Curry leaf sliver */}
            <path d="M46 51 C48 48 54 49 53 53 C50 54 48 53 46 51 Z" fill="#2E502B" />

            <defs>
              <linearGradient id="katoriGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8A9499" />
                <stop offset="50%" stopColor="#E2E8EB" />
                <stop offset="100%" stopColor="#7B858A" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      );

    case 'hasi-chutney':
      return (
        <div className={`relative flex items-center justify-center ${sizeClasses} ${className}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-md">
            {/* Steel Katori Bowl */}
            <ellipse cx="50" cy="62" rx="34" ry="16" fill="#889297" />
            <ellipse cx="50" cy="58" rx="32" ry="14" fill="url(#katoriGrad2)" stroke="#B3BDC2" strokeWidth="2" />
            {/* Creamy Green-White Coconut Chutney */}
            <ellipse cx="50" cy="55" rx="27" ry="10" fill="#C4DCA4" />
            <ellipse cx="48" cy="53" rx="23" ry="7" fill="#DBECD2" />
            {/* Mustard seeds & Hing tadka */}
            <circle cx="43" cy="54" r="1.5" fill="#1E1C1A" />
            <circle cx="51" cy="52" r="1.5" fill="#1E1C1A" />
            <circle cx="57" cy="56" r="1.2" fill="#1E1C1A" />
            {/* Glossy tempered curry leaf */}
            <path d="M47 50 C51 46 58 48 56 53 C52 55 49 53 47 50 Z" fill="#385F33" />

            <defs>
              <linearGradient id="katoriGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8A9499" />
                <stop offset="50%" stopColor="#E2E8EB" />
                <stop offset="100%" stopColor="#7B858A" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      );

    case 'sambar':
      return (
        <div className={`relative flex items-center justify-center ${sizeClasses} ${className}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-md">
            {/* Steel Katori Bowl */}
            <ellipse cx="50" cy="62" rx="34" ry="16" fill="#889297" />
            <ellipse cx="50" cy="58" rx="32" ry="14" fill="url(#katoriGrad3)" stroke="#B3BDC2" strokeWidth="2" />
            {/* Golden drumstick sambar broth */}
            <ellipse cx="50" cy="55" rx="27" ry="10" fill="#C8721C" />
            <ellipse cx="48" cy="53" rx="23" ry="7" fill="#E18D2E" />
            {/* Drumstick piece */}
            <rect x="42" y="50" width="14" height="6" rx="3" fill="#4B6E32" stroke="#365022" strokeWidth="1" />
            {/* Coriander & tadka seeds */}
            <circle cx="39" cy="54" r="1.5" fill="#241E15" />
            <circle cx="59" cy="53" r="1.2" fill="#241E15" />
            <circle cx="48" cy="56" r="1.2" fill="#437237" />

            <defs>
              <linearGradient id="katoriGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8A9499" />
                <stop offset="50%" stopColor="#E2E8EB" />
                <stop offset="100%" stopColor="#7B858A" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      );

    case 'combo-raja':
      return (
        <div className={`relative flex items-center justify-center ${sizeClasses} ${className}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-md">
            {/* Outer Royal Stainless Platter */}
            <circle cx="50" cy="50" r="48" fill="#889297" />
            <circle cx="50" cy="50" r="46" fill="url(#rajaPlateSteel)" stroke="#A9B4BA" strokeWidth="1.5" />
            
            {/* Banana Leaf Bed Inlay */}
            <circle cx="50" cy="50" r="39" fill="url(#rajaLeafGrad)" />
            {/* Leaf central spine and veins */}
            <line x1="20" y1="50" x2="80" y2="50" stroke="#1D4018" strokeWidth="1" strokeOpacity="0.4" />
            <path d="M35 50 Q45 42 55 40" fill="none" stroke="#1D4018" strokeWidth="0.75" strokeOpacity="0.3" />
            <path d="M35 50 Q45 58 55 60" fill="none" stroke="#1D4018" strokeWidth="0.75" strokeOpacity="0.3" />
            <path d="M50 50 Q60 42 70 41" fill="none" stroke="#1D4018" strokeWidth="0.75" strokeOpacity="0.3" />

            {/* Main Course: Golden Rolled Roast Dosa / Neer Dosa Triangles */}
            <polygon points="26,72 50,38 68,68" fill="#F4EDE0" stroke="#D3C7B2" strokeWidth="1" />
            <polygon points="30,70 52,40 64,66" fill="url(#rajaDosaRoast)" />
            <line x1="50" y1="38" x2="44" y2="70" stroke="#A86F28" strokeWidth="1" strokeDasharray="2,2" />
            {/* Coconut fleck sprinkle */}
            <circle cx="48" cy="56" r="1.2" fill="#FFFFFF" />
            <circle cx="42" cy="62" r="1" fill="#FFFFFF" />
            <circle cx="54" cy="58" r="1" fill="#FFFFFF" />

            {/* Katori 1 (Top Left): Kempu Chutney Bowl */}
            <circle cx="34" cy="30" r="13" fill="#889297" />
            <circle cx="34" cy="30" r="12" fill="url(#rajaKatoriSteel)" stroke="#BDC7CC" strokeWidth="1" />
            <circle cx="34" cy="30" r="9" fill="#B1361E" />
            <circle cx="33" cy="29" r="7" fill="#C94429" />
            {/* Mustard seeds & curry leaf */}
            <circle cx="32" cy="29" r="1" fill="#1C1814" />
            <circle cx="36" cy="31" r="0.8" fill="#1C1814" />
            <ellipse cx="34" cy="28" rx="2" ry="1" fill="#2E502B" />

            {/* Katori 2 (Top Center-Right): Drumstick Sambar Bowl */}
            <circle cx="62" cy="28" r="13" fill="#889297" />
            <circle cx="62" cy="28" r="12" fill="url(#rajaKatoriSteel)" stroke="#BDC7CC" strokeWidth="1" />
            <circle cx="62" cy="28" r="9" fill="#C8721C" />
            <circle cx="61" cy="27" r="7" fill="#E18D2E" />
            {/* Sambar drumstick sliver */}
            <rect x="58" y="26" width="6" height="3" rx="1.5" fill="#4B6E32" />
            <circle cx="63" cy="29" r="0.8" fill="#241E15" />

            {/* Dabarah Tumbler (Far Right): Mini Filter Kaapi */}
            <ellipse cx="78" cy="58" rx="12" ry="6" fill="#889297" />
            <ellipse cx="78" cy="57" rx="11" ry="5" fill="url(#rajaKatoriSteel)" stroke="#A9B4BA" strokeWidth="0.8" />
            {/* Tumbler glass inside */}
            <path d="M72 44 L74 56 Q78 58 82 56 L84 44 Z" fill="url(#rajaKatoriSteel)" stroke="#8A9499" strokeWidth="1" />
            <ellipse cx="78" cy="44" rx="6" ry="2.2" fill="#351B0D" />
            <ellipse cx="78" cy="43.5" rx="5.5" ry="1.8" fill="#D3A264" />
            {/* Tiny steam curl */}
            <path d="M76 38 Q74 34 77 30" fill="none" stroke="#FFF" strokeWidth="1" strokeLinecap="round" opacity="0.75" />
            <path d="M81 37 Q83 33 80 29" fill="none" stroke="#FFF" strokeWidth="1" strokeLinecap="round" opacity="0.75" />

            {/* Royal Gold Star/Sparkle Emblem at Bottom */}
            <g transform="translate(45, 78) scale(0.65)">
              <polygon points="7.5,0 9.8,4.7 15,5.5 11.2,9.2 12.1,14.4 7.5,12 2.9,14.4 3.8,9.2 0,5.5 5.2,4.7" fill="#E8A93A" stroke="#B87D1B" strokeWidth="0.8" />
            </g>

            <defs>
              <linearGradient id="rajaPlateSteel" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C4CED3" />
                <stop offset="35%" stopColor="#FFFFFF" />
                <stop offset="70%" stopColor="#9CA7AC" />
                <stop offset="100%" stopColor="#6C767B" />
              </linearGradient>
              <linearGradient id="rajaLeafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2E6327" />
                <stop offset="50%" stopColor="#3C8033" />
                <stop offset="100%" stopColor="#24511E" />
              </linearGradient>
              <linearGradient id="rajaKatoriSteel" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8A9499" />
                <stop offset="50%" stopColor="#E2E8EB" />
                <stop offset="100%" stopColor="#7B858A" />
              </linearGradient>
              <radialGradient id="rajaDosaRoast" cx="45%" cy="45%">
                <stop offset="0%" stopColor="#F9E2A8" />
                <stop offset="60%" stopColor="#DE9E3E" />
                <stop offset="100%" stopColor="#A8671B" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      );

    case 'combo-buns-kaapi':
      return (
        <div className={`relative flex items-center justify-center ${sizeClasses} ${className}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-md">
            {/* Stainless plate rim plate */}
            <ellipse cx="50" cy="58" rx="46" ry="32" fill="#889297" />
            <ellipse cx="50" cy="56" rx="44" ry="30" fill="url(#bunsPlateSteel)" stroke="#A9B4BA" strokeWidth="1.2" />

            {/* Bun 1 (Back left) */}
            <ellipse cx="32" cy="54" rx="20" ry="16" fill="#A8611F" />
            <ellipse cx="31" cy="52" rx="19" ry="15" fill="url(#bunMiniGrad1)" />
            {/* Cumin seeds */}
            <line x1="24" y1="49" x2="28" y2="51" stroke="#3D2411" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="34" y1="56" x2="38" y2="54" stroke="#3D2411" strokeWidth="1.2" strokeLinecap="round" />

            {/* Bun 2 (Front center, puffy golden) */}
            <ellipse cx="44" cy="62" rx="22" ry="17" fill="#B76D25" />
            <ellipse cx="43" cy="60" rx="21" ry="16" fill="url(#bunMiniGrad2)" />
            <ellipse cx="40" cy="55" rx="11" ry="5" fill="#F8DE9A" opacity="0.65" />
            {/* Cumin seeds */}
            <line x1="38" y1="58" x2="42" y2="60" stroke="#3D2411" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="48" y1="64" x2="52" y2="62" stroke="#3D2411" strokeWidth="1.2" strokeLinecap="round" />

            {/* Melting Butter Dollop (Gir Cow Benne) */}
            <ellipse cx="42" cy="54" rx="5" ry="3" fill="#FFFBE8" stroke="#EAE0C0" strokeWidth="0.8" />
            <ellipse cx="41" cy="53" rx="2.5" ry="1.2" fill="#FFFFFF" />

            {/* Filter Kaapi Dabarah & Tumbler (Right) */}
            <ellipse cx="74" cy="66" rx="19" ry="8" fill="#889297" />
            <ellipse cx="74" cy="64" rx="18" ry="7" fill="url(#bunsSteelGrad)" stroke="#B3BDC2" strokeWidth="1" />
            <ellipse cx="74" cy="62" rx="14" ry="4.5" fill="#586166" />

            {/* Tumbler seated inside */}
            <path
              d="M66 42 L68 62 Q74 65 80 62 L82 42 Z"
              fill="url(#bunsSteelGrad2)"
              stroke="#7E8A90"
              strokeWidth="1.2"
            />
            {/* Coffee surface */}
            <ellipse cx="74" cy="42" rx="8" ry="2.6" fill="#351B0D" />
            {/* Frothy creamy head */}
            <ellipse cx="74" cy="41.2" rx="7.4" ry="2.3" fill="#D3A264" />
            <ellipse cx="72" cy="40.8" rx="4.5" ry="1.2" fill="#ECD3A5" opacity="0.8" />
            {/* Steam curls */}
            <path d="M71 33 Q68 28 72 23" fill="none" stroke="#FFF" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
            <path d="M77 32 Q80 27 76 22" fill="none" stroke="#FFF" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />

            {/* Small Chutney Katori (Bottom Left) */}
            <circle cx="20" cy="66" r="10" fill="#889297" />
            <circle cx="20" cy="65" r="9" fill="url(#bunsSteelGrad)" stroke="#BDC7CC" strokeWidth="0.8" />
            <circle cx="20" cy="65" r="6.5" fill="#C4DCA4" />
            <circle cx="19" cy="64" r="5" fill="#DBECD2" />
            <circle cx="20" cy="64" r="0.8" fill="#1E1C1A" />

            <defs>
              <linearGradient id="bunsPlateSteel" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C4CED3" />
                <stop offset="40%" stopColor="#FAFDFE" />
                <stop offset="70%" stopColor="#9AA5AA" />
                <stop offset="100%" stopColor="#717C82" />
              </linearGradient>
              <linearGradient id="bunsSteelGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8A9499" />
                <stop offset="50%" stopColor="#E2E8EB" />
                <stop offset="100%" stopColor="#7B858A" />
              </linearGradient>
              <linearGradient id="bunsSteelGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#7C878C" />
                <stop offset="40%" stopColor="#D5DDE0" />
                <stop offset="70%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#6C777C" />
              </linearGradient>
              <radialGradient id="bunMiniGrad1" cx="35%" cy="30%">
                <stop offset="0%" stopColor="#DF9C49" />
                <stop offset="70%" stopColor="#B2681F" />
                <stop offset="100%" stopColor="#7E4108" />
              </radialGradient>
              <radialGradient id="bunMiniGrad2" cx="35%" cy="30%">
                <stop offset="0%" stopColor="#F2BA69" />
                <stop offset="65%" stopColor="#C97B28" />
                <stop offset="100%" stopColor="#8C490D" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      );

    case 'beverage':
    default:
      return (
        <div className={`relative flex items-center justify-center ${sizeClasses} ${className}`}>
          <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-md">
            {/* Traditional glass / tumbler */}
            <path
              d="M34 32 L40 76 Q50 80 60 76 L66 32 Z"
              fill="#E9EFF2"
              stroke="#97A3A8"
              strokeWidth="2"
            />
            {/* Beverage level */}
            <path
              d="M36 40 L40 74 Q50 78 60 74 L64 40 Z"
              fill="#F5E4C4"
              opacity="0.9"
            />
            {/* Rim */}
            <ellipse cx="50" cy="32" rx="16" ry="5" fill="#D3DDE0" stroke="#97A3A8" strokeWidth="1.5" />
            {/* Cilantro or garnish */}
            <circle cx="48" cy="33" r="2" fill="#3F6B3B" />
            <circle cx="53" cy="33" r="1.5" fill="#3F6B3B" />
          </svg>
        </div>
      );
  }
};
