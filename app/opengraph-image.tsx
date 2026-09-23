import { ImageResponse } from 'next/og'

export const runtime = 'nodejs'
export const alt = 'DeskTiles — Projects. Not folders.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: '#1D1D1F',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Gradient glow top-right */}
        <div
          style={{
            position: 'absolute',
            top: -120,
            right: -120,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(168,150,216,0.25) 0%, transparent 70%)',
            display: 'flex',
          }}
        />
        {/* Gradient glow bottom-left */}
        <div
          style={{
            position: 'absolute',
            bottom: -100,
            left: -100,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(123,168,196,0.2) 0%, transparent 70%)',
            display: 'flex',
          }}
        />

        {/* Tile mockups — decorative */}
        <div
          style={{
            position: 'absolute',
            left: 60,
            top: 60,
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            opacity: 0.35,
          }}
        >
          {[
            { label: 'Work', color: '#7BA8C4' },
            { label: 'Client A', color: '#A896D8' },
            { label: 'Research', color: '#C8B060' },
          ].map((t) => (
            <div
              key={t.label}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: 999,
                padding: '8px 20px',
                width: 160,
              }}
            >
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: t.color, display: 'flex' }} />
              <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14, fontWeight: 600 }}>{t.label}</span>
            </div>
          ))}
        </div>

        {/* Main content */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
          {/* App name */}
          <div
            style={{
              fontSize: 22,
              fontWeight: 600,
              color: 'rgba(255,255,255,0.5)',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              marginBottom: 24,
              display: 'flex',
            }}
          >
            DeskTiles
          </div>

          {/* Main headline */}
          <div
            style={{
              fontSize: 80,
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-0.04em',
              lineHeight: 1.0,
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <span>Projects.</span>
            <span
              style={{
                background: 'linear-gradient(135deg, #A896D8 0%, #AABAD6 50%, #7BC4A8 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                display: 'flex',
              }}
            >
              Not folders.
            </span>
          </div>

          {/* Subline */}
          <div
            style={{
              marginTop: 32,
              fontSize: 24,
              color: 'rgba(255,255,255,0.45)',
              fontWeight: 400,
              display: 'flex',
            }}
          >
            The Mac desktop. Reimagined.
          </div>

          {/* Price pill */}
          <div
            style={{
              marginTop: 40,
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              background: 'rgba(251,191,36,0.12)',
              border: '1px solid rgba(251,191,36,0.3)',
              borderRadius: 999,
              padding: '10px 28px',
            }}
          >
            <span style={{ color: '#FBBF24', fontSize: 16, fontWeight: 700, letterSpacing: '0.05em', display: 'flex' }}>
              LAUNCH OFFER — €14.99
            </span>
          </div>
        </div>

        {/* desktiles.app bottom */}
        <div
          style={{
            position: 'absolute',
            bottom: 36,
            right: 48,
            fontSize: 16,
            color: 'rgba(255,255,255,0.2)',
            letterSpacing: '0.02em',
            display: 'flex',
          }}
        >
          desktiles.app
        </div>
      </div>
    ),
    { ...size }
  )
}
