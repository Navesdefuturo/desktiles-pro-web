import { MetadataRoute } from 'next'

// Rastreadores que copian páginas para entrenar modelos de IA. Se piden fuera;
// Google, Bing y Apple siguen entrando con normalidad (regla "*").
// Es una petición, no un muro: CCBot y Amazonbot la cumplen y Bytespider a menudo no.
// El bloqueo real está en el cortafuegos de Vercel (regla ya publicada el 06-11).
const AI_TRAINING_CRAWLERS = ['CCBot', 'Bytespider', 'Amazonbot']

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: AI_TRAINING_CRAWLERS, disallow: '/' },
    ],
    sitemap: 'https://desktiles.app/sitemap.xml',
  }
}
