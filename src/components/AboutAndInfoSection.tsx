import { useState } from 'react';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { APP_CAPABILITIES, APP_DATA } from '../constants/appData';

export function AboutAndInfoSection() {
  const [expanded, setExpanded] = useState(false);

  const infoRows = [
    { label: 'App name', value: APP_DATA.name },
    { label: 'Developer', value: APP_DATA.developer },
    { label: 'Category', value: APP_DATA.category },
    { label: 'Platform', value: APP_DATA.platform },
    { label: 'Release', value: APP_DATA.release, mono: true },
    { label: 'Package file', value: APP_DATA.fileName, mono: true },
    { label: 'Distribution', value: 'Direct APK (GitHub Releases)' },
  ];

  return (
    <section
      id="about"
      className="border-b border-[#E3E5E8] bg-white py-12 sm:py-16 dark:border-[#2C2D30] dark:bg-[#131314]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: About This App */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between gap-4">
              <h2 className="font-display text-xl font-semibold tracking-tight text-[#202124] sm:text-2xl dark:text-[#F1F3F4]">
                About this app
              </h2>
              <button
                type="button"
                onClick={() => setExpanded((prev) => !prev)}
                aria-expanded={expanded}
                className="inline-flex min-h-[40px] items-center gap-1.5 rounded-full px-3 text-sm font-medium text-[#01875F] transition-colors hover:bg-[#01875F]/8 dark:text-[#6DD58C] dark:hover:bg-[#6DD58C]/10 whitespace-nowrap shrink-0"
              >
                <span>{expanded ? 'Show less' : 'Read more'}</span>
                {expanded ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ArrowRight className="h-4 w-4" />
                )}
              </button>
            </div>

            <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-[#3C4043] dark:text-[#BDC1C6]">
              <p>
                {APP_DATA.name} is a powerful collection of Android tools crafted by{' '}
                <strong className="font-semibold text-[#202124] dark:text-[#F1F3F4]">
                  {APP_DATA.developer}
                </strong>{' '}
                for users who want essential device diagnostics, network checks, and system
                utilities unified inside one streamlined Android application.
              </p>
              <p>
                Instead of juggling separate single-purpose utilities, {APP_DATA.name} organizes
                everyday Android workflows into a clean, responsive dark-friendly interface built for
                speed and clarity on mobile screens.
              </p>
            </div>

            {/* Capability Breakdown */}
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {APP_CAPABILITIES.map((capability) => (
                <div
                  key={capability.number}
                  className="border-t border-[#E3E5E8] pt-4 dark:border-[#2C2D30]"
                >
                  <h3 className="font-display text-sm font-semibold text-[#202124] dark:text-[#F1F3F4]">
                    <span className="mr-2 font-mono text-xs text-[#01875F] dark:text-[#6DD58C]">
                      {capability.number}
                    </span>
                    {capability.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#5F6368] dark:text-[#9AA0A6]">
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Expandable Extended Notes */}
            {expanded && (
              <div className="mt-6 rounded-2xl border border-[#E3E5E8] bg-[#F8F9FA] p-5 text-sm leading-relaxed text-[#3C4043] dark:border-[#2C2D30] dark:bg-[#1E1F20] dark:text-[#BDC1C6]">
                <p className="font-display font-semibold text-[#202124] dark:text-[#F1F3F4]">
                  Designed for direct Android deployment
                </p>
                <p className="mt-2">
                  The {APP_DATA.release} release of {APP_DATA.name} is distributed directly as{' '}
                  <span className="font-mono text-xs">{APP_DATA.fileName}</span> so Android users
                  can download and install the package straightforwardly across compatible devices
                  without intermediary redirects or wrapper installers.
                </p>
                <button
                  type="button"
                  onClick={() => setExpanded(false)}
                  className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-[#01875F] hover:underline dark:text-[#6DD58C]"
                >
                  <ChevronDown className="h-3.5 w-3.5 rotate-180" />
                  <span>Collapse details</span>
                </button>
              </div>
            )}

            {/* Unboxed Metadata Footer Line */}
            <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#5F6368] dark:text-[#9AA0A6]">
              <span>Category: {APP_DATA.category}</span>
              <span aria-hidden="true">·</span>
              <span>Platform: {APP_DATA.platform}</span>
              <span aria-hidden="true">·</span>
              <span>Developer: {APP_DATA.developer}</span>
            </div>
          </div>

          {/* Right Column: App Information Table */}
          <div id="app-info" className="lg:col-span-5">
            <div className="rounded-2xl border border-[#E3E5E8] bg-[#F8F9FA] p-6 dark:border-[#2C2D30] dark:bg-[#1E1F20]">
              <h2 className="font-display text-lg font-semibold text-[#202124] dark:text-[#F1F3F4]">
                App information
              </h2>
              <p className="mt-1 text-xs text-[#5F6368] dark:text-[#9AA0A6]">
                Verified package and developer details
              </p>

              <dl className="mt-5 divide-y divide-[#E3E5E8] dark:divide-[#2C2D30]">
                {infoRows.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between gap-4 py-3.5 text-sm"
                  >
                    <dt className="text-[#5F6368] dark:text-[#9AA0A6] shrink-0">{row.label}</dt>
                    <dd
                      className={`text-right font-medium text-[#202124] dark:text-[#E8EAED] ${
                        row.mono ? 'font-mono text-xs' : ''
                      }`}
                    >
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
