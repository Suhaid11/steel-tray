import React from 'react';

interface UdupiSignboardProps {
  className?: string;
}

export const UdupiSignboard: React.FC<UdupiSignboardProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Heavy stamped brass & stainless medallion */}
      <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#E2D9CC] via-[#B8A892] to-[#8C7A64] p-[2px] shadow-sm shrink-0 border border-[#D5C6B2]">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-[#FAF5EC] via-[#F3E9DA] to-[#E9DDC9] flex flex-col items-center justify-center border border-[#D4C4AE] shadow-inner">
          <span className="font-mono-chit text-[8px] tracking-widest text-[#B5562D] font-bold leading-none">
            UDUPI
          </span>
          <span className="font-udupi-display text-sm font-black text-[#2C1810] tracking-tight leading-none mt-0.5">
            ST
          </span>
          <span className="font-mono-chit text-[7px] text-[#7A6456] leading-none mt-0.5">
            1964
          </span>
        </div>
      </div>

      {/* Hand-painted enamel signboard wordmark treatment */}
      <div className="flex flex-col">
        <div className="flex items-center gap-2.5">
          {/* Custom SVG Hand-Painted Wordmark: bespoke irregular, sign-painter brush letterforms */}
          <svg
            className="h-7 sm:h-8 w-auto select-none"
            viewBox="0 0 172 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Steel Tray"
          >
            {/* Layer 1: Hand-painted Signboard Drop Shadow (Terracotta / Warm Shading) */}
            <g fill="#D8C5B0" transform="translate(1.2, 1.5)">
              {/* S */}
              <path d="M17.5,7.2 C16,4.8 12.2,3.5 8.5,4.2 C4.5,5 2,8 2,11.8 C2,16.5 7.5,17.8 11.2,19 C15.5,20.4 17.5,21.8 17.5,24.2 C17.5,26.8 14.5,28 10.5,28 C5.8,28 2.8,26.2 1.2,23.5 L1.2,26.2 C3.2,28.2 6.8,29.2 10.8,29.2 C16.5,29.2 20.5,27.2 20.5,23 C20.5,18.5 15.5,16.8 11.2,15.5 C7.2,14.2 4.8,12.8 4.8,10.5 C4.8,8 7.5,6.5 11,6.5 C14.5,6.5 16.5,7.8 17.8,9.8 Z" />
              {/* T */}
              <path d="M20.5,4.2 L37.5,4.2 L37,7.8 C34.2,7.5 32,7.8 31.5,8.5 L31.5,24.5 C32.5,25.2 33.5,25.8 33.5,27 L24.5,27 C24.5,25.8 25.5,25.2 26.5,24.5 L26.5,8.5 C26,7.8 23.8,7.5 21,7.8 Z" />
              {/* E */}
              <path d="M39,4.2 L53,4.2 L53,7.5 L44.5,7.5 L44.5,13.8 L51.2,13.8 L51.2,17 L44.5,17 L44.5,24 L53.5,24 L53.2,27.2 L39,27.2 Z" />
              {/* E */}
              <path d="M55.5,4.5 L69,4.2 L69,7.6 L61,7.5 L61,13.6 L67.5,13.8 L67.5,17 L61,16.8 L61,23.8 L69.5,24 L69.2,27.2 L55.5,27.2 Z" />
              {/* L */}
              <path d="M71.5,4.2 L77,4.2 L77,24 L85.5,24 L85,27.2 L71.5,27.2 Z" />
              {/* T */}
              <path d="M94,4.2 L110.5,4.2 L110,7.8 C107.2,7.5 105,7.8 104.5,8.5 L104.5,24.5 C105.5,25.2 106.5,25.8 106.5,27 L97.5,27 C97.5,25.8 98.5,25.2 99.5,24.5 L99.5,8.5 C99,7.8 96.8,7.5 94.5,7.8 Z" />
              {/* R */}
              <path d="M112,4.2 L123,4.2 C126.8,4.2 129.2,6.5 129.2,10.2 C129.2,13.5 127,15.8 122.8,16.2 L129.5,25.5 C130,26.2 130.5,26.8 131,27.2 L124.5,27.2 L118.8,17.2 L117.2,17.2 L117.2,24.8 C117.8,25.5 118.5,26.2 118.5,27.2 L112,27.2 Z M117.2,7.5 L117.2,13.8 L122,13.8 C124,13.8 125,12.6 125,10.8 C125,8.8 124,7.5 122,7.5 Z" />
              {/* A */}
              <path d="M138.8,4.2 L142.2,4.2 L150,27.2 L144.8,27.2 L143,21.2 L137.2,21.2 L135.5,27.2 L130.5,27.2 Z M138.2,17.5 L142,17.5 L140.2,9.2 Z" />
              {/* Y */}
              <path d="M150.5,4.2 L156,4.2 L159.2,14.5 L162.5,4.2 L168,4.2 L162,18.5 L162,24.8 C162.6,25.5 163.2,26.2 163.2,27.2 L156.8,27.2 C156.8,26.2 157.5,25.5 158.2,24.8 L158.2,18.5 Z" />
            </g>

            {/* Layer 2: Main Hand-Lettered Character Strokes in Dark Filter-Coffee Brown */}
            <g fill="#2C1810">
              {/* S */}
              <path d="M17.5,7.2 C16,4.8 12.2,3.5 8.5,4.2 C4.5,5 2,8 2,11.8 C2,16.5 7.5,17.8 11.2,19 C15.5,20.4 17.5,21.8 17.5,24.2 C17.5,26.8 14.5,28 10.5,28 C5.8,28 2.8,26.2 1.2,23.5 L1.2,26.2 C3.2,28.2 6.8,29.2 10.8,29.2 C16.5,29.2 20.5,27.2 20.5,23 C20.5,18.5 15.5,16.8 11.2,15.5 C7.2,14.2 4.8,12.8 4.8,10.5 C4.8,8 7.5,6.5 11,6.5 C14.5,6.5 16.5,7.8 17.8,9.8 Z" />
              {/* T */}
              <path d="M20.5,4.2 L37.5,4.2 L37,7.8 C34.2,7.5 32,7.8 31.5,8.5 L31.5,24.5 C32.5,25.2 33.5,25.8 33.5,27 L24.5,27 C24.5,25.8 25.5,25.2 26.5,24.5 L26.5,8.5 C26,7.8 23.8,7.5 21,7.8 Z" />
              {/* E */}
              <path d="M39,4.2 L53,4.2 L53,7.5 L44.5,7.5 L44.5,13.8 L51.2,13.8 L51.2,17 L44.5,17 L44.5,24 L53.5,24 L53.2,27.2 L39,27.2 Z" />
              {/* E */}
              <path d="M55.5,4.5 L69,4.2 L69,7.6 L61,7.5 L61,13.6 L67.5,13.8 L67.5,17 L61,16.8 L61,23.8 L69.5,24 L69.2,27.2 L55.5,27.2 Z" />
              {/* L */}
              <path d="M71.5,4.2 L77,4.2 L77,24 L85.5,24 L85,27.2 L71.5,27.2 Z" />
              {/* T */}
              <path d="M94,4.2 L110.5,4.2 L110,7.8 C107.2,7.5 105,7.8 104.5,8.5 L104.5,24.5 C105.5,25.2 106.5,25.8 106.5,27 L97.5,27 C97.5,25.8 98.5,25.2 99.5,24.5 L99.5,8.5 C99,7.8 96.8,7.5 94.5,7.8 Z" />
              {/* R */}
              <path d="M112,4.2 L123,4.2 C126.8,4.2 129.2,6.5 129.2,10.2 C129.2,13.5 127,15.8 122.8,16.2 L129.5,25.5 C130,26.2 130.5,26.8 131,27.2 L124.5,27.2 L118.8,17.2 L117.2,17.2 L117.2,24.8 C117.8,25.5 118.5,26.2 118.5,27.2 L112,27.2 Z M117.2,7.5 L117.2,13.8 L122,13.8 C124,13.8 125,12.6 125,10.8 C125,8.8 124,7.5 122,7.5 Z" />
              {/* A */}
              <path d="M138.8,4.2 L142.2,4.2 L150,27.2 L144.8,27.2 L143,21.2 L137.2,21.2 L135.5,27.2 L130.5,27.2 Z M138.2,17.5 L142,17.5 L140.2,9.2 Z" />
              {/* Y */}
              <path d="M150.5,4.2 L156,4.2 L159.2,14.5 L162.5,4.2 L168,4.2 L162,18.5 L162,24.8 C162.6,25.5 163.2,26.2 163.2,27.2 L156.8,27.2 C156.8,26.2 157.5,25.5 158.2,24.8 L158.2,18.5 Z" />
            </g>

            {/* Subtle Terracotta Accent Dot on letter stem */}
            <circle cx="90.5" cy="27" r="1.5" fill="#B5562D" />
          </svg>

          {/* Fix 2: Status/live indicator is a quiet neutral badge with a small red/terracotta dot, NOT a loud red pill */}
          <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#EFE6D7] border border-[#DDCFBE] text-[10px] font-mono-chit font-semibold text-[#5A453A]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B5562D]" />
            <span>TAWA LIVE</span>
          </span>
        </div>

        {/* Kannada script subtitled in authentic sign-painter colors */}
        <div className="flex items-center gap-2 text-[11px] font-mono-chit text-[#6B5347] leading-none mt-0.5">
          <span className="text-[#B5562D] font-bold tracking-wide">
            ಸ್ಟೀಲ್ ಟ್ರೇ
          </span>
          <span className="text-[#CBBBB0]">•</span>
          <span className="truncate">ಕೌಂಟರ್ ತಟ್ಟೆ ಸೇವೆ • Car Street, Udupi</span>
        </div>
      </div>
    </div>
  );
};
