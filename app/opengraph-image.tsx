import { ImageResponse } from 'next/og'

export const runtime = 'nodejs'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(135deg, #17110d, #ff7420, #ffb15c)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          fontFamily: 'system-ui',
        }}
      >
        <div style={{ fontSize: 72, marginBottom: '20px' }}>UP</div>
        <div>URI PRODUCTION</div>
        <div style={{ fontSize: 40, marginTop: '20px' }}>
          SMM-агентство полного цикла
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  )
}

export default GET
