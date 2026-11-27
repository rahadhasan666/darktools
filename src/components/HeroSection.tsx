import { useState } from 'react';
import { Check, Copy, Download, Share2, Smartphone, Wrench } from 'lucide-react';
import { motion } from 'motion/react';
import { APP_DATA } from '../constants/appData';
import { AppIcon } from './AppIcon';

export function HeroSection() {
  const [installState, setInstallState] = useState<'idle' | 'downloading'>('idle');
  const [copiedLink, setCopiedLink] = useState(false);
  const [sharedToast, setSharedToast] = useState(false);

  const handleInstallClick = () => {
    setInstallState('downloading');
    window.setTimeout(() => {
      setInstallState('idle');
    }, 3600);
  };

  const handleCopyApkLink = async () => {
    try {
      await navigator.clipboard.writeText(APP_DATA.downloadUrl);
      setCopiedLink(true);
      window.setTimeout(() => setCopiedLink(false), 2400);
    } catch {
      // Clipboard API unavailable in restricted contexts; fail gracefully
    }
  };

  const handleShare = async () => {
    const shareUrl = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${APP_DATA.name} by ${APP_DATA.developer}`,
          text: APP_DATA.description,
          url: shareUrl,
        });
        return;
      } catch {
        // User cancelled or share failed; fall back to clipboard
      }
    }
    try {
      await navigator.clipboard.writeText(shareUrl);
      setSharedToast(true);
      window.setTimeout(() => setSharedToast(false), 2400);
    } catch {
      // Ignore if clipboard blocked
    }
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-[#E3E5E8] bg-white pt-8 pb-12 sm:pt-12 sm:pb-16 dark:border-[#2C2D30] dark:bg-[#131314]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12"
        >
          {/* Left / Primary Application Details Column */}
          <div className="lg:col-span-7">
            {/* Play Store Mobile & Desktop Icon + Title Lockup */}
            <div className="flex items-start gap-5 sm:gap-7">
              <AppIcon size="lg" floating className="sm:hidden" />
              <AppIcon size="xl" floating className="hidden sm:block" />

              <div className="min-w-0 flex-1 pt-0.5 sm:pt-1">
                <h1 className="font-display text-3xl font-bold tracking-tight text-[#202124] sm:text-[2.75rem] sm:leading-[1.12] dark:text-[#F1F3F4]">
                  {APP_DATA.name}
                </h1>

                <div className="mt-1.5 flex flex-wrap items-center gap-x-2.5 gap-y-1">
                  <span className="text-base font-semibold text-[#01875F] dark:text-[#6DD58C]">
                    {APP_DATA.developer}
                  </span>
                </div>

                {/* Clean Unboxed Metadata Line (Zero Pills, Zero Fake Stats) */}
                <div className="mt-3 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-sm text-[#5F6368] dark:text-[#9AA0A6]">
                  <span>{APP_DATA.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{APP_DATA.platform}</span>
                  <span aria-hidden="true">·</span>
                  <span className="font-mono text-xs sm:text-sm">{APP_DATA.release}</span>
                </div>
              </div>
            </div>

            {/* App Short Description */}
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#3C4043] sm:text-lg dark:text-[#BDC1C6]">
              {APP_DATA.description}
            </p>

            {/* Primary Google Play Install Action Row */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <a
                href={APP_DATA.downloadUrl}
                download={APP_DATA.fileName}
                onClick={handleInstallClick}
                className="group relative inline-flex h-12 min-w-[220px] items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-[#01875F] px-8 text-base font-semibold text-white shadow-[0_2px_10px_rgba(1,135,95,0.28)] transition-all duration-200 hover:bg-[#017350] hover:shadow-[0_6px_18px_rgba(1,135,95,0.35)] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#01875F] dark:bg-[#00A173] dark:text-[#042117] dark:hover:bg-[#17B889] whitespace-nowrap shrink-0"
              >
                {installState === 'downloading' && (
                  <span
                    aria-hidden="true"
                    className="animate-install-shimmer pointer-events-none absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  />
                )}
                {installState === 'downloading' ? (
                  <>
                    <Check className="h-5 w-5 shrink-0" strokeWidth={2.5} />
                    <span>Downloading {APP_DATA.fileName}</span>
                  </>
                ) : (
                  <>
                    <Download className="h-5 w-5 shrink-0 transition-transform duration-200 group-hover:translate-y-0.5" />
                    <span>Install</span>
                  </>
                )}
              </a>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleShare}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-[#DADCE0] bg-white px-4 text-sm font-medium text-[#01875F] transition-colors duration-150 hover:bg-[#F8F9FA] active:scale-[0.98] dark:border-[#3C4043] dark:bg-[#1E1F20] dark:text-[#6DD58C] dark:hover:bg-[#282A2D] whitespace-nowrap shrink-0"
                >
                  {sharedToast ? (
                    <>
                      <Check className="h-4 w-4" />
                      <span>Link copied</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="h-4 w-4" />
                      <span>Share</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleCopyApkLink}
                  aria-label="Copy direct APK download URL"
                  title="Copy direct APK URL"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-[#DADCE0] bg-white px-4 text-sm font-medium text-[#5F6368] transition-colors duration-150 hover:bg-[#F8F9FA] hover:text-[#202124] active:scale-[0.98] dark:border-[#3C4043] dark:bg-[#1E1F20] dark:text-[#BDC1C6] dark:hover:bg-[#282A2D] dark:hover:text-[#E8EAED] whitespace-nowrap shrink-0"
                >
                  {copiedLink ? (
                    <>
                      <Check className="h-4 w-4 text-[#01875F] dark:text-[#6DD58C]" />
                      <span>APK URL copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      <span className="hidden sm:inline">Copy APK URL</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Direct APK Status Note */}
            <p className="mt-3.5 flex items-center gap-2 text-xs text-[#5F6368] dark:text-[#9AA0A6]">
              <Smartphone className="h-3.5 w-3.5 shrink-0 text-[#01875F] dark:text-[#6DD58C]" />
              <span>
                Direct Android package download (<span className="font-mono">{APP_DATA.fileName}</span>) from GitHub Releases.
              </span>
            </p>
          </div>

          {/* Right Column: Elevated Play Store App Showcase Card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-[#E3E5E8] bg-[#F8F9FA] p-6 shadow-sm transition-colors duration-300 dark:border-[#2C2D30] dark:bg-[#1E1F20] sm:p-8">
              <div className="flex items-center justify-between gap-4 border-b border-[#E3E5E8] pb-5 dark:border-[#2C2D30]">
                <div className="flex items-center gap-3.5 min-w-0">
                  <AppIcon size="md" />
                  <div className="min-w-0">
                    <p className="font-display text-base font-bold truncate text-[#202124] dark:text-[#F1F3F4]">
                      {APP_DATA.name}
                    </p>
                    <p className="text-xs font-medium text-[#01875F] dark:text-[#6DD58C] truncate">
                      {APP_DATA.developer}
                    </p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#5F6368] dark:text-[#9AA0A6] shrink-0">
                  <Wrench className="h-3.5 w-3.5 text-[#01875F] dark:text-[#6DD58C]" />
                  <span>{APP_DATA.category}</span>
                </span>
              </div>

              <dl className="mt-5 space-y-3.5 text-sm">
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-[#5F6368] dark:text-[#9AA0A6]">Platform</dt>
                  <dd className="font-medium text-[#202124] dark:text-[#E8EAED]">
                    {APP_DATA.platform}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-[#5F6368] dark:text-[#9AA0A6]">Category</dt>
                  <dd className="font-medium text-[#202124] dark:text-[#E8EAED]">
                    {APP_DATA.category}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-[#5F6368] dark:text-[#9AA0A6]">Developer</dt>
                  <dd className="font-medium text-[#202124] dark:text-[#E8EAED]">
                    {APP_DATA.developer}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-[#5F6368] dark:text-[#9AA0A6]">Package</dt>
                  <dd className="font-mono text-xs font-medium text-[#202124] dark:text-[#E8EAED]">
                    {APP_DATA.fileName}
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-[#5F6368] dark:text-[#9AA0A6]">Release</dt>
                  <dd className="font-mono text-xs font-medium text-[#202124] dark:text-[#E8EAED]">
                    {APP_DATA.release}
                  </dd>
                </div>
              </dl>

              <div className="mt-6 border-t border-[#E3E5E8] pt-4 dark:border-[#2C2D30]">
                <a
                  href="#install-guide"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#01875F] transition-colors hover:underline dark:text-[#6DD58C]"
                >
                  <span>How to install {APP_DATA.fileName} on Android</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
