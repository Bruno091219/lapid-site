import { useId } from 'react';

interface DiamondLogoProps {
  size?: number;
  className?: string;
  variant?: 'full' | 'icon';
}

function DiamondSVG({ size, id }: { size: number; id: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`${id}a`} x1="4" y1="2" x2="36" y2="38" gradientUnits="userSpaceOnUse">
          <stop stopColor="#9D7147" />
          <stop offset="1" stopColor="#6B4E2F" />
        </linearGradient>
        <linearGradient id={`${id}b`} x1="8" y1="7" x2="32" y2="33" gradientUnits="userSpaceOnUse">
          <stop stopColor="#BEA885" />
          <stop offset="1" stopColor="#9D7147" />
        </linearGradient>
        <linearGradient id={`${id}c`} x1="14" y1="14" x2="26" y2="26" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D4B896" />
          <stop offset="1" stopColor="#BEA885" />
        </linearGradient>
      </defs>
      <path d="M20 2L36 12V28L20 38L4 28V12L20 2Z" fill={`url(#${id}a)`} opacity="0.9" />
      <path d="M20 7L32 15V25L20 33L8 25V15L20 7Z" fill={`url(#${id}b)`} opacity="0.7" />
      <path d="M20 11L26 16L20 14L14 16Z" fill="rgba(250,250,248,0.6)" />
      <path d="M14 16L20 14L26 16L20 26Z" fill={`url(#${id}c)`} />
      <path d="M20 13L21.5 15.5L20 15L18.5 15.5Z" fill="rgba(250,250,248,0.9)" />
    </svg>
  );
}

function DiamondDecorSVG({ size, id }: { size: number; id: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`${id}a`} x1="4" y1="2" x2="36" y2="38" gradientUnits="userSpaceOnUse">
          <stop stopColor="#9D7147" />
          <stop offset="1" stopColor="#6B4E2F" />
        </linearGradient>
        <linearGradient id={`${id}b`} x1="8" y1="7" x2="32" y2="33" gradientUnits="userSpaceOnUse">
          <stop stopColor="#BEA885" />
          <stop offset="1" stopColor="#9D7147" />
        </linearGradient>
        <linearGradient id={`${id}c`} x1="14" y1="14" x2="26" y2="26" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D4B896" />
          <stop offset="1" stopColor="#BEA885" />
        </linearGradient>
      </defs>
      <path d="M20 2L36 12V28L20 38L4 28V12L20 2Z" fill={`url(#${id}a)`} opacity="0.6" />
      <path d="M20 7L32 15V25L20 33L8 25V15L20 7Z" fill={`url(#${id}b)`} opacity="0.5" />
      <path d="M14 16L20 14L26 16L20 26Z" fill={`url(#${id}c)`} opacity="0.7" />
    </svg>
  );
}

export function DiamondLogo({ size = 32, className = '', variant = 'full' }: DiamondLogoProps) {
  const id = useId().replace(/:/g, '_');
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <DiamondSVG size={size} id={id} />
      {variant === 'full' && (
        <span className="font-bold tracking-tight" style={{ fontSize: size * 0.6, color: '#FAFAF8' }}>
          <span className="gold-text">Lapid</span>
          <span style={{ color: '#FAFAF8', opacity: 0.7, fontWeight: 400 }}> Studio</span>
        </span>
      )}
    </div>
  );
}

export function DiamondDecor({ size = 24, className = '' }: { size?: number; className?: string }) {
  const id = useId().replace(/:/g, '_');
  return (
    <span className={className} style={{ display: 'inline-flex', alignItems: 'center' }}>
      <DiamondDecorSVG size={size} id={id} />
    </span>
  );
}
