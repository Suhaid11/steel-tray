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
