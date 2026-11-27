import { useRef, useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Cpu,
  HardDrive,
  Maximize2,
  Wifi,
  Wrench,
  X,
} from 'lucide-react';
import { motion } from 'motion/react';
import { APP_DATA, PREVIEW_SCREENS, type PreviewScreen } from '../constants/appData';

const SCREEN_ICONS: Record<string, typeof Wrench> = {
  'suite-hub': Wrench,
  'device-diagnostics': Cpu,
  'network-utilities': Wifi,
  'file-storage': HardDrive,
};

function ScreenMockupContent({ screen }: { screen: PreviewScreen }) {
  const Icon = SCREEN_ICONS[screen.id] || Wrench;

  return (
    <div className="flex h-full flex-col justify-between rounded-2xl border border-[#E3E5E8] bg-[#18191B] p-4 text-white dark:border-[#34363A] dark:bg-[#111214]">
      {/* Simulated Android Status Bar */}
      <div>
        <div className="flex items-center justify-between text-[10px] font-mono text-[#9AA0A6]">
          <span>ANDROID</span>
          <span>{APP_DATA.release}</span>
        </div>

        <div className="mt-4 flex items-center gap-2.5">
          <div
            className="flex h-9 w-9 items-center justify-center rounded-xl"
            style={{ backgroundColor: `${screen.accentColor}26`, color: '#6DD58C' }}
          >
            <Icon className="h-4 w-4" />
          </div>
          <div className="min-w-0">
            <p className="text-[11px] font-medium text-[#9AA0A6]">{screen.category}</p>
            <p className="font-display text-sm font-semibold truncate text-white">
              {screen.title}
            </p>
          </div>
        </div>
      </div>

      {/* Simulated Utility Rows */}
      <div className="my-4 space-y-2">
        {screen.highlights.map((item, idx) => (
          <div
            key={item}
            className="flex items-center justify-between rounded-xl border border-white/8 bg-white/[0.04] px-3 py-2.5"
          >
            <span className="text-xs font-medium text-[#E8EAED]">{item}</span>
            <span className="font-mono text-[10px] text-[#6DD58C]">0{idx + 1}</span>
          </div>
        ))}
      </div>

      {/* Simulated Bottom Action Strip */}
      <div className="flex items-center justify-between border-t border-white/10 pt-3 text-[11px] text-[#9AA0A6]">
        <span>{APP_DATA.name}</span>
        <span className="text-[#6DD58C]">{APP_DATA.developer}</span>
      </div>
    </div>
  );
}

export function OverviewCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeScreen, setActiveScreen] = useState<PreviewScreen | null>(null);

  const scrollByAmount = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const offset = direction === 'left' ? -320 : 320;
    scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
  };

  return (
    <section
      id="overview"
      className="border-b border-[#E3E5E8] bg-white py-10 sm:py-12 dark:border-[#2C2D30] dark:bg-[#131314]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="font-display text-xl font-semibold tracking-tight text-[#202124] sm:text-2xl dark:text-[#F1F3F4]">
              App overview
            </h2>
            <p className="mt-1 text-sm text-[#5F6368] dark:text-[#9AA0A6]">
              Explore core utility views included inside {APP_DATA.name}
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => scrollByAmount('left')}
              aria-label="Scroll overview previews left"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DADCE0] bg-white text-[#5F6368] transition-colors hover:bg-[#F1F3F4] hover:text-[#202124] dark:border-[#3C4043] dark:bg-[#1E1F20] dark:text-[#BDC1C6] dark:hover:bg-[#282A2D]"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollByAmount('right')}
              aria-label="Scroll overview previews right"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DADCE0] bg-white text-[#5F6368] transition-colors hover:bg-[#F1F3F4] hover:text-[#202124] dark:border-[#3C4043] dark:bg-[#1E1F20] dark:text-[#BDC1C6] dark:hover:bg-[#282A2D]"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Play Store Screenshot Strip */}
        <div
          ref={scrollContainerRef}
          className="no-scrollbar mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2"
        >
          {PREVIEW_SCREENS.map((screen, index) => (
            <motion.button
              key={screen.id}
              type="button"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              onClick={() => setActiveScreen(screen)}
              className="group relative flex w-[260px] shrink-0 snap-start flex-col rounded-2xl border border-[#E3E5E8] bg-[#F8F9FA] p-3 text-left transition-all duration-200 hover:border-[#01875F]/50 hover:shadow-md sm:w-[276px] dark:border-[#2C2D30] dark:bg-[#1E1F20] dark:hover:border-[#6DD58C]/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#01875F]"
            >
              <div className="h-[248px] w-full">
                <ScreenMockupContent screen={screen} />
              </div>

              <div className="mt-3 flex items-center justify-between gap-2 px-1">
                <div className="min-w-0">
                  <p className="text-sm font-semibold truncate text-[#202124] dark:text-[#F1F3F4]">
                    {screen.title}
                  </p>
                  <p className="text-xs truncate text-[#5F6368] dark:text-[#9AA0A6]">
                    {screen.subtitle}
                  </p>
                </div>
                <Maximize2 className="h-4 w-4 shrink-0 text-[#5F6368] opacity-60 transition-opacity group-hover:opacity-100 dark:text-[#9AA0A6]" />
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Preview Lightbox Modal */}
      {activeScreen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${activeScreen.title} preview`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-4 backdrop-blur-sm"
          onClick={() => setActiveScreen(null)}
        >
          <div
            className="w-full max-w-md rounded-3xl border border-[#E3E5E8] bg-white p-5 shadow-2xl dark:border-[#3C4043] dark:bg-[#1E1F20]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-medium text-[#01875F] dark:text-[#6DD58C]">
                  {activeScreen.category}
                </p>
                <h3 className="font-display text-lg font-bold text-[#202124] dark:text-[#F1F3F4]">
                  {activeScreen.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveScreen(null)}
                aria-label="Close preview"
                className="flex h-10 w-10 items-center justify-center rounded-full text-[#5F6368] hover:bg-[#F1F3F4] dark:text-[#9AA0A6] dark:hover:bg-[#2C2D30]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="h-[310px]">
              <ScreenMockupContent screen={activeScreen} />
            </div>

            <p className="mt-4 text-sm text-[#5F6368] dark:text-[#9AA0A6]">
              {activeScreen.subtitle}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
