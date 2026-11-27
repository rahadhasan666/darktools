import { useState } from 'react';
import { ChevronDown, Download, ShieldCheck, Smartphone } from 'lucide-react';
import { APP_DATA, COMPATIBILITY_SPECS, INSTALL_STEPS } from '../constants/appData';

export function CompatibilityAndInstallSection() {
  const [showPermissionHelp, setShowPermissionHelp] = useState(false);

  return (
    <div className="bg-white dark:bg-[#131314]">
      {/* Android Compatibility Section */}
      <section
        id="compatibility"
        className="border-b border-[#E3E5E8] py-12 sm:py-16 dark:border-[#2C2D30]"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-xl font-semibold tracking-tight text-[#202124] sm:text-2xl dark:text-[#F1F3F4]">
              Android compatibility
            </h2>
            <p className="mt-1.5 text-sm text-[#5F6368] dark:text-[#9AA0A6]">
              Hardware and operating system details for running {APP_DATA.name} smoothly on your
              Android device.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
            {COMPATIBILITY_SPECS.map((spec) => (
              <div
                key={spec.label}
                className="rounded-2xl border border-[#E3E5E8] bg-[#F8F9FA] p-5 transition-colors duration-200 dark:border-[#2C2D30] dark:bg-[#1E1F20]"
              >
                <div className="flex items-center gap-2 text-xs font-medium text-[#01875F] dark:text-[#6DD58C]">
                  <Smartphone className="h-4 w-4 shrink-0" />
                  <span>{spec.label}</span>
                </div>
                <p className="mt-2 font-display text-base font-semibold text-[#202124] dark:text-[#F1F3F4]">
                  {spec.value}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-[#5F6368] dark:text-[#9AA0A6]">
                  {spec.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download & Installation Instructions Section */}
      <section id="install-guide" className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <h2 className="font-display text-xl font-semibold tracking-tight text-[#202124] sm:text-2xl dark:text-[#F1F3F4]">
                Download &amp; installation instructions
              </h2>
              <p className="mt-1.5 text-sm text-[#5F6368] dark:text-[#9AA0A6]">
                Follow these four steps to install <span className="font-mono">{APP_DATA.fileName}</span>{' '}
                on your Android smartphone or tablet.
              </p>
            </div>

            <a
              href={APP_DATA.downloadUrl}
              download={APP_DATA.fileName}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#01875F] px-5 text-sm font-semibold text-white transition-all duration-150 hover:bg-[#017350] active:scale-[0.98] dark:bg-[#00A173] dark:text-[#042117] dark:hover:bg-[#17B889] whitespace-nowrap shrink-0"
            >
              <Download className="h-4 w-4" />
              <span>Download {APP_DATA.fileName}</span>
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {INSTALL_STEPS.map((item) => (
              <div
                key={item.step}
                className="flex flex-col justify-between rounded-2xl border border-[#E3E5E8] bg-white p-5 dark:border-[#2C2D30] dark:bg-[#1E1F20]"
              >
                <div>
                  <span className="font-mono text-xs font-medium text-[#01875F] dark:text-[#6DD58C]">
                    Step {item.step}
                  </span>
                  <h3 className="mt-2 font-display text-base font-semibold text-[#202124] dark:text-[#F1F3F4]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5F6368] dark:text-[#9AA0A6]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Android Permission Tip Accordion */}
          <div className="mt-6 rounded-2xl border border-[#E3E5E8] bg-[#F8F9FA] dark:border-[#2C2D30] dark:bg-[#1E1F20]">
            <button
              type="button"
              onClick={() => setShowPermissionHelp((prev) => !prev)}
              aria-expanded={showPermissionHelp}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="flex items-center gap-3 text-sm font-semibold text-[#202124] dark:text-[#F1F3F4]">
                <ShieldCheck className="h-5 w-5 shrink-0 text-[#01875F] dark:text-[#6DD58C]" />
                <span>Need help enabling "Install unknown apps" on Android?</span>
              </span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-[#5F6368] transition-transform duration-200 dark:text-[#9AA0A6] ${
                  showPermissionHelp ? 'rotate-180' : ''
                }`}
              />
            </button>

            {showPermissionHelp && (
              <div className="border-t border-[#E3E5E8] px-5 py-4 text-sm leading-relaxed text-[#5F6368] dark:border-[#2C2D30] dark:text-[#9AA0A6]">
                <p>
                  Because <span className="font-mono">{APP_DATA.fileName}</span> is downloaded
                  directly from GitHub Releases rather than through an automated store updater,
                  Android displays a standard security prompt the first time your browser or Files
                  app opens an APK. Tap <strong>Settings</strong> on that prompt, enable{' '}
                  <strong>Allow from this source</strong>, press back, and tap{' '}
                  <strong>Install</strong>. You can turn that browser permission off again right
                  after installation completes.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
