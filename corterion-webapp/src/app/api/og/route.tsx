import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#020617', // deep navy background
            backgroundImage: 'radial-gradient(circle at center, #1e293b 0%, #020617 100%)',
          }}
        >
          {/* We fetch the logo directly from your live domain so the edge function can render it */}
          <img
            src="https://corterion.com/logo-icon.png"
            width={180}
            height={180}
            style={{ objectFit: 'contain', marginBottom: 40 }}
            alt="Corterion Icon"
          />
          
          <img
            src="https://corterion.com/logo-text.png"
            width={400}
            style={{ objectFit: 'contain', marginBottom: 30 }}
            alt="Corterion"
          />

          <p
            style={{
              fontSize: 36,
              color: '#94a3b8',
              fontStyle: 'italic',
              fontFamily: 'serif',
              marginTop: 20,
              letterSpacing: '0.05em'
            }}
          >
            Certainty, Engineered.
          </p>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    return new Response(`Failed to generate image`, {
      status: 500,
    });
  }
}
