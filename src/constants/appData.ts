export const APP_DATA = {
  name: 'DARK TOOLS',
  developer: 'DARK WORLD',
  category: 'Tools',
  platform: 'Android',
  release: 'V1',
  description: 'A powerful collection of Android tools.',
  iconUrl: 'https://i.ibb.co.com/pB0HzJ27/boom.png',
  downloadUrl: 'https://github.com/rahadhasan666/darktools/releases/download/V1/DARK_TOOLS.apk',
  fileName: 'DARK_TOOLS.apk',
} as const;

export interface PreviewScreen {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  highlights: string[];
  accentColor: string;
}

export const PREVIEW_SCREENS: PreviewScreen[] = [
  {
    id: 'suite-hub',
    title: 'Unified Tools Workspace',
    subtitle: 'Access core Android utilities from one clean dashboard',
    category: 'Workspace',
    highlights: ['Quick-launch grid', 'Zero-clutter navigation', 'Instant dark surface'],
    accentColor: '#01875F',
  },
  {
    id: 'device-diagnostics',
    title: 'Device & System Overview',
    subtitle: 'Inspect hardware, battery health, and OS environment',
    category: 'Diagnostics',
    highlights: ['CPU & memory readout', 'Build & SDK details', 'Display metrics'],
    accentColor: '#0B57D0',
  },
  {
    id: 'network-utilities',
    title: 'Network & Connectivity Tools',
    subtitle: 'Check connection state, latency, and local network info',
    category: 'Network',
    highlights: ['Wi-Fi & IP inspector', 'Ping & host check', 'Port & route lookup'],
    accentColor: '#01875F',
  },
  {
    id: 'file-storage',
    title: 'Storage & Package Utilities',
    subtitle: 'Inspect installed packages, storage usage, and APK paths',
    category: 'Storage',
    highlights: ['Package explorer', 'Storage breakdown', 'Clean utility controls'],
    accentColor: '#0B57D0',
  },
];

export const APP_CAPABILITIES = [
  {
    number: '01.',
    title: 'System & Hardware Diagnostics',
    description:
      'Review real-time device specifications, Android OS build information, battery state, and hardware capabilities in a single structured view.',
  },
  {
    number: '02.',
    title: 'Network Inspection Utilities',
    description:
      'Run quick connectivity checks, inspect active Wi-Fi or cellular parameters, and verify host reachability directly from your handset.',
  },
  {
    number: '03.',
    title: 'Storage & Package Management',
    description:
      'Browse installed Android packages, examine storage allocation, and locate utility files cleanly without sifting through nested system menus.',
  },
  {
    number: '04.',
    title: 'Focused Android Experience',
    description:
      'Built specifically for Android touch ergonomics with fast startup, minimal resource footprint, and comfortable low-light readability.',
  },
];

export const COMPATIBILITY_SPECS = [
  {
    label: 'Target Platform',
    value: 'Android OS (Smartphones & Tablets)',
    detail: 'Optimized for modern Android builds with touch-friendly responsive layouts.',
  },
  {
    label: 'Package Format',
    value: 'Standard Android APK (DARK_TOOLS.apk)',
    detail: 'Distributed as a standalone signed release package from GitHub Releases.',
  },
  {
    label: 'Device Architecture',
    value: 'ARM64-v8a & ARMv7 Compatible',
    detail: 'Runs natively across modern 64-bit and standard Android chipsets.',
  },
  {
    label: 'Root Access',
    value: 'Not Required',
    detail: 'Core diagnostic, network, and utility workflows operate on standard unrooted devices.',
  },
];

export const INSTALL_STEPS = [
  {
    step: '01',
    title: 'Download the APK Package',
    description:
      'Tap the green Install button above to start downloading DARK_TOOLS.apk directly from the official GitHub V1 release.',
  },
  {
    step: '02',
    title: 'Open Your Downloads Folder',
    description:
      'Once the download finishes, tap the browser notification or open your Android Files app and locate DARK_TOOLS.apk.',
  },
  {
    step: '03',
    title: 'Allow Installation Prompt',
    description:
      'If Android prompts for permission to install apps from your browser or file manager, toggle "Allow from this source" in Settings.',
  },
  {
    step: '04',
    title: 'Install & Launch DARK TOOLS',
    description:
      'Confirm Install on the Android package installer dialog, then open DARK TOOLS from your app drawer.',
  },
];

export const SEARCHABLE_INDEX = [
  { label: 'Install DARK TOOLS (DARK_TOOLS.apk)', sectionId: 'hero', category: 'Download' },
  { label: 'App Overview & Previews', sectionId: 'overview', category: 'Section' },
  { label: 'About this app', sectionId: 'about', category: 'Section' },
  { label: 'System & Hardware Diagnostics', sectionId: 'about', category: 'Feature' },
  { label: 'Network Inspection Utilities', sectionId: 'about', category: 'Feature' },
  { label: 'Storage & Package Management', sectionId: 'about', category: 'Feature' },
  { label: 'App Information & Release Details', sectionId: 'app-info', category: 'Specifications' },
  { label: 'Android Compatibility', sectionId: 'compatibility', category: 'Requirements' },
  { label: 'Download & Install Instructions', sectionId: 'install-guide', category: 'Guide' },
];
