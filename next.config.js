/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV === 'development'

const securityHeaders = [
  // Prevent clickjacking via iframes
  { key: 'X-Frame-Options', value: 'DENY' },
  // Block MIME-type sniffing
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  // Control referrer info sent to external sites
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  // Disable browser features the site doesn't use
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
  // Force HTTPS (active once deployed on desktiles.app)
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  // Content Security Policy
  // - default-src 'self': only load resources from same origin
  // - script-src: allow self + inline scripts (needed for JSON-LD) + Paddle (when activated)
  // - style-src: allow self + inline styles (Tailwind generates inline styles)
  // - img-src: allow self + data URIs (for inline SVGs/images)
  // - font-src: self only
  // - connect-src: self + Paddle API (when activated)
  // - frame-src: Paddle checkout overlay + Mailrelay newsletter signup form
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      `script-src 'self' 'unsafe-inline' https://cdn.paddle.com https://assets.ipzmarketing.com${isDev ? " 'unsafe-eval'" : ''}`,
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob:",
      "font-src 'self'",
      "connect-src 'self' https://checkout.paddle.com https://plausible.io",
      "frame-src https://checkout.paddle.com https://desktiles.ipzmarketing.com",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join('; '),
  },
]

const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
}

module.exports = nextConfig
