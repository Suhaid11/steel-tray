import React from 'react';

export type PixelIconName = 
  | 'flame' 
  | 'printer' 
  | 'clock' 
  | 'check' 
  | 'sparkle' 
  | 'coin'
  | 'tray'
  | 'katori'
  | 'tumbler'
  | 'dosa'
  | 'leaf'
  | 'alert'
  | 'rotate'
  | 'pin'
  | 'plus'
  | 'minus'
  | 'trash'
  | 'arrow-right';

interface PixelIconProps {
  name: PixelIconName;
  className?: string;
  size?: number;
}

export const PixelIcon: React.FC<PixelIconProps> = ({ name, className = '', size = 16 }) => {
  // Crisp 16x16 pixel matrix vectors with crispEdges rendering
  switch (name) {
    case 'flame':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 16 16"
          fill="currentColor"
          className={`inline-block shrink-0 ${className}`}
          style={{ shapeRendering: 'crispEdges' }}
          aria-hidden="true"
        >
          <rect x="7" y="1" width="2" height="2" />
          <rect x="6" y="3" width="4" height="2" />
          <rect x="5" y="5" width="6" height="2" />
          <rect x="4" y="7" width="8" height="3" />
          <rect x="3" y="10" width="10" height="4" />
          <rect x="5" y="14" width="6" height="2" />
          <rect x="7" y="8" width="2" height="4" fill="#FFFFFF" opacity="0.9" />
        </svg>
      );

    case 'printer':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 16 16"
          fill="currentColor"
          className={`inline-block shrink-0 ${className}`}
          style={{ shapeRendering: 'crispEdges' }}
          aria-hidden="true"
        >
          <rect x="4" y="1" width="8" height="4" opacity="0.6" />
          <rect x="2" y="5" width="12" height="6" />
          <rect x="4" y="8" width="8" height="1" fill="#000000" />
          <rect x="4" y="10" width="8" height="5" opacity="0.9" />
          <rect x="6" y="12" width="4" height="1" fill="#FFFFFF" />
        </svg>
      );

    case 'clock':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 16 16"
          fill="currentColor"
          className={`inline-block shrink-0 ${className}`}
          style={{ shapeRendering: 'crispEdges' }}
          aria-hidden="true"
        >
          <rect x="5" y="1" width="6" height="2" />
          <rect x="3" y="3" width="10" height="2" />
          <rect x="2" y="5" width="12" height="6" />
          <rect x="3" y="11" width="10" height="2" />
          <rect x="5" y="13" width="6" height="2" />
          <rect x="7" y="4" width="2" height="5" fill="#FFFFFF" />
          <rect x="9" y="7" width="3" height="2" fill="#FFFFFF" />
        </svg>
      );

    case 'check':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 16 16"
          fill="currentColor"
          className={`inline-block shrink-0 ${className}`}
          style={{ shapeRendering: 'crispEdges' }}
          aria-hidden="true"
        >
          <rect x="2" y="8" width="2" height="2" />
          <rect x="4" y="10" width="2" height="2" />
          <rect x="6" y="12" width="2" height="2" />
          <rect x="8" y="10" width="2" height="2" />
          <rect x="10" y="8" width="2" height="2" />
          <rect x="12" y="6" width="2" height="2" />
          <rect x="14" y="4" width="2" height="2" />
        </svg>
      );

    case 'coin':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 16 16"
          fill="currentColor"
          className={`inline-block shrink-0 ${className}`}
          style={{ shapeRendering: 'crispEdges' }}
          aria-hidden="true"
        >
          <rect x="5" y="2" width="6" height="2" />
          <rect x="3" y="4" width="10" height="2" />
          <rect x="2" y="6" width="12" height="4" />
          <rect x="3" y="10" width="10" height="2" />
          <rect x="5" y="12" width="6" height="2" />
          <rect x="6" y="5" width="4" height="1" fill="#FFFFFF" />
          <rect x="7" y="6" width="2" height="4" fill="#FFFFFF" />
        </svg>
      );

    case 'tray':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 16 16"
          fill="currentColor"
          className={`inline-block shrink-0 ${className}`}
          style={{ shapeRendering: 'crispEdges' }}
          aria-hidden="true"
        >
          {/* Outer plate border */}
          <rect x="1" y="2" width="14" height="12" />
          {/* Inner cutout slots */}
          <rect x="2" y="3" width="3" height="3" fill="#1A2025" />
          <rect x="6" y="3" width="3" height="3" fill="#1A2025" />
          <rect x="10" y="3" width="4" height="3" fill="#1A2025" />
          <rect x="2" y="7" width="12" height="6" fill="#1A2025" />
        </svg>
      );

    case 'katori':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 16 16"
          fill="currentColor"
          className={`inline-block shrink-0 ${className}`}
          style={{ shapeRendering: 'crispEdges' }}
          aria-hidden="true"
        >
          <rect x="5" y="2" width="6" height="2" />
          <rect x="3" y="4" width="10" height="2" />
          <rect x="2" y="6" width="12" height="4" />
          <rect x="3" y="10" width="10" height="2" />
          <rect x="5" y="12" width="6" height="2" />
          <rect x="5" y="6" width="6" height="3" fill="#FFFFFF" opacity="0.7" />
        </svg>
      );

    case 'tumbler':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 16 16"
          fill="currentColor"
          className={`inline-block shrink-0 ${className}`}
          style={{ shapeRendering: 'crispEdges' }}
          aria-hidden="true"
        >
          {/* Davarah saucer base */}
          <rect x="2" y="12" width="12" height="3" />
          {/* Tumbler glass */}
          <rect x="4" y="2" width="8" height="2" />
          <rect x="5" y="4" width="6" height="7" />
          {/* Froth layer */}
          <rect x="5" y="4" width="6" height="2" fill="#FFFFFF" opacity="0.9" />
        </svg>
      );

    case 'dosa':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 16 16"
          fill="currentColor"
          className={`inline-block shrink-0 ${className}`}
          style={{ shapeRendering: 'crispEdges' }}
          aria-hidden="true"
        >
          <rect x="7" y="2" width="2" height="2" />
          <rect x="5" y="4" width="6" height="2" />
          <rect x="4" y="6" width="8" height="2" />
          <rect x="3" y="8" width="10" height="2" />
          <rect x="2" y="10" width="12" height="2" />
          <rect x="1" y="12" width="14" height="2" />
        </svg>
      );

    case 'leaf':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 16 16"
          fill="currentColor"
          className={`inline-block shrink-0 ${className}`}
          style={{ shapeRendering: 'crispEdges' }}
          aria-hidden="true"
        >
          <rect x="2" y="3" width="12" height="10" />
          <rect x="1" y="7" width="14" height="2" fill="#FFFFFF" opacity="0.6" />
        </svg>
      );

    case 'alert':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 16 16"
          fill="currentColor"
          className={`inline-block shrink-0 ${className}`}
          style={{ shapeRendering: 'crispEdges' }}
          aria-hidden="true"
        >
          <rect x="7" y="1" width="2" height="2" />
          <rect x="6" y="3" width="4" height="2" />
          <rect x="5" y="5" width="6" height="2" />
          <rect x="4" y="7" width="8" height="2" />
          <rect x="3" y="9" width="10" height="2" />
          <rect x="2" y="11" width="12" height="2" />
          <rect x="1" y="13" width="14" height="2" />
          <rect x="7" y="6" width="2" height="4" fill="#000000" />
          <rect x="7" y="11" width="2" height="2" fill="#000000" />
        </svg>
      );

    case 'rotate':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 16 16"
          fill="currentColor"
          className={`inline-block shrink-0 ${className}`}
          style={{ shapeRendering: 'crispEdges' }}
          aria-hidden="true"
        >
          <rect x="4" y="2" width="8" height="2" />
          <rect x="2" y="4" width="2" height="8" />
          <rect x="4" y="12" width="8" height="2" />
          <rect x="12" y="6" width="2" height="6" />
          <rect x="10" y="2" width="2" height="4" />
        </svg>
      );

    case 'pin':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 16 16"
          fill="currentColor"
          className={`inline-block shrink-0 ${className}`}
          style={{ shapeRendering: 'crispEdges' }}
          aria-hidden="true"
        >
          <rect x="5" y="1" width="6" height="2" />
          <rect x="4" y="3" width="8" height="4" />
          <rect x="5" y="7" width="6" height="2" />
          <rect x="6" y="9" width="4" height="2" />
          <rect x="7" y="11" width="2" height="4" />
          <rect x="7" y="4" width="2" height="2" fill="#FFFFFF" />
        </svg>
      );

    case 'plus':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 16 16"
          fill="currentColor"
          className={`inline-block shrink-0 ${className}`}
          style={{ shapeRendering: 'crispEdges' }}
          aria-hidden="true"
        >
          <rect x="7" y="3" width="2" height="10" />
          <rect x="3" y="7" width="10" height="2" />
        </svg>
      );

    case 'minus':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 16 16"
          fill="currentColor"
          className={`inline-block shrink-0 ${className}`}
          style={{ shapeRendering: 'crispEdges' }}
          aria-hidden="true"
        >
          <rect x="3" y="7" width="10" height="2" />
        </svg>
      );

    case 'trash':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 16 16"
          fill="currentColor"
          className={`inline-block shrink-0 ${className}`}
          style={{ shapeRendering: 'crispEdges' }}
          aria-hidden="true"
        >
          <rect x="4" y="2" width="8" height="2" />
          <rect x="2" y="4" width="12" height="2" />
          <rect x="3" y="6" width="10" height="8" />
          <rect x="5" y="8" width="2" height="4" fill="#000000" opacity="0.6" />
          <rect x="9" y="8" width="2" height="4" fill="#000000" opacity="0.6" />
        </svg>
      );

    case 'arrow-right':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 16 16"
          fill="currentColor"
          className={`inline-block shrink-0 ${className}`}
          style={{ shapeRendering: 'crispEdges' }}
          aria-hidden="true"
        >
          <rect x="2" y="7" width="10" height="2" />
          <rect x="10" y="5" width="2" height="2" />
          <rect x="12" y="7" width="2" height="2" />
          <rect x="10" y="9" width="2" height="2" />
        </svg>
      );

    case 'sparkle':
    default:
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 16 16"
          fill="currentColor"
          className={`inline-block shrink-0 ${className}`}
          style={{ shapeRendering: 'crispEdges' }}
          aria-hidden="true"
        >
          <rect x="7" y="1" width="2" height="4" />
          <rect x="7" y="11" width="2" height="4" />
          <rect x="1" y="7" width="4" height="2" />
          <rect x="11" y="7" width="4" height="2" />
          <rect x="5" y="5" width="6" height="6" />
          <rect x="7" y="7" width="2" height="2" fill="#FFFFFF" />
        </svg>
      );
  }
};
