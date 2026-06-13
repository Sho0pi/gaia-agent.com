import { OGImageRoute } from 'astro-og-canvas';

// Build-time 1200x630 social cards. One per real page, keyed by slug → /og/<slug>.png
const pages = {
  index: {
    title: 'Gaia: agents that build agents',
    description:
      'An open-source AI agent that hands work to specialist souls, and builds new ones when nothing fits.',
  },
  'why-gaia': {
    title: 'Why Gaia',
    description:
      'OpenClaw orchestrates. Hermes iterates. Gaia creates. The soul-smith pattern is a different category.',
  },
  'how-it-works': {
    title: 'How Gaia Works',
    description:
      'See Gaia forge, reuse, and coordinate specialist souls as a task changes.',
  },
};

export const { getStaticPaths, GET } = await OGImageRoute({
  param: 'route',
  pages,
  getImageOptions: (_path, page) => ({
    title: page.title,
    description: page.description,
    logo: { path: './public/gaia-icon.png', size: [84] },
    bgGradient: [
      [11, 22, 18],
      [7, 15, 12],
    ],
    border: { color: [123, 199, 159], width: 10, side: 'inline-start' },
    padding: 64,
    font: {
      title: { color: [239, 231, 210], size: 62, weight: 'SemiBold', families: ['Fraunces'] },
      description: { color: [168, 181, 172], size: 30, lineHeight: 1.4, families: ['Inter'] },
    },
    // canvaskit needs TTF/OTF (not woff2). expo-google-fonts ships TTFs via jsDelivr.
    fonts: [
      'https://cdn.jsdelivr.net/npm/@expo-google-fonts/fraunces/Fraunces_600SemiBold.ttf',
      'https://cdn.jsdelivr.net/npm/@expo-google-fonts/inter/Inter_400Regular.ttf',
    ],
  }),
});
