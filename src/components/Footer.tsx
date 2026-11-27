import { Download } from 'lucide-react';
import { APP_DATA } from '../constants/appData';
import { AppIcon } from './AppIcon';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#E3E5E8] bg-[#F8F9FA] py-10 transition-colors duration-300 dark:border-[#2C2D30] dark:bg-[#1A1B1E]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <AppIcon size="sm" />
            <div>
              <p className="font-display text-sm font-bold text-[#202124] dark:text-[#F1F3F4]">
                {APP_DATA.name}
              </p>
              <p className="text-xs text-[#5F6368] dark:text-[#9AA0A6]">
                Developed by <span className="font-medium">{APP_DATA.developer}</span> ·{' '}
                {APP_DATA.platform} {APP_DATA.category}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-[#5F6368] dark:text-[#9AA0A6]">
            <a
              href="#overview"
              className="hover:text-[#01875F] dark:hover:text-[#6DD58C] transition-colors"
            >
              Overview
            </a>
            <a
              href="#about"
              className="hover:text-[#01875F] dark:hover:text-[#6DD58C] transition-colors"
            >
              About
            </a>
            <a
              href="#compatibility"
              className="hover:text-[#01875F] dark:hover:text-[#6DD58C] transition-colors"
            >
              Compatibility
            </a>
            <a
              href="#install-guide"
              className="hover:text-[#01875F] dark:hover:text-[#6DD58C] transition-colors"
            >
              Install Guide
            </a>
            <a
              href={APP_DATA.downloadUrl}
              download={APP_DATA.fileName}
              className="inline-flex items-center gap-1.5 text-[#01875F] hover:underline dark:text-[#6DD58C]"
            >
              <Download className="h-3.5 w-3.5" />
              <span>{APP_DATA.fileName}</span>
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-2 border-t border-[#E3E5E8] pt-6 text-xs text-[#5F6368] sm:flex-row sm:items-center dark:border-[#2C2D30] dark:text-[#9AA0A6]">
          <p>
            © {currentYear} {APP_DATA.developer}. All rights reserved.
          </p>
          <p>
            Official {APP_DATA.name} ({APP_DATA.release}) Android release portal.
          </p>
        </div>
      </div>
    </footer>
  );
}
