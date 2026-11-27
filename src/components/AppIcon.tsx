import { useState } from 'react';
import { Wrench } from 'lucide-react';
import { APP_DATA } from '../constants/appData';

interface AppIconProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  floating?: boolean;
  className?: string;
}

const SIZE_CLASSES: Record<NonNullable<AppIconProps['size']>, string> = {
  sm: 'w-9 h-9 rounded-[10px]',
  md: 'w-14 h-14 rounded-[14px]',
  lg: 'w-[72px] h-[72px] sm:w-24 sm:h-24 rounded-[20px] sm:rounded-[24px]',
  xl: 'w-28 h-28 sm:w-32 sm:h-32 rounded-[26px] sm:rounded-[30px]',
};

export function AppIcon({ size = 'lg', floating = false, className = '' }: AppIconProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`relative shrink-0 overflow-hidden bg-[#1E1F20] shadow-[0_6px_24px_-4px_rgba(0,0,0,0.18)] ring-1 ring-black/8 dark:ring-white/12 ${
        SIZE_CLASSES[size]
      } ${floating ? 'animate-gentle-float' : ''} ${className}`}
    >
      {!hasError ? (
        <img
          src={APP_DATA.iconUrl}
          alt={`${APP_DATA.name} Android application icon`}
          referrerPolicy="no-referrer"
          loading="eager"
          decoding="async"
          onError={() => setHasError(true)}
          className="h-full w-full object-cover select-none"
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#1F2937] via-[#111827] to-[#01875F]/40 text-white">
          <Wrench className="h-1/2 w-1/2 text-[#6DD58C]" strokeWidth={1.75} />
        </div>
      )}
    </div>
  );
}
