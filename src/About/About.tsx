import '@fontsource/audiowide';
import Background from './Background';
import Transition from './transition';
import SpotlightCard from './SpotlightCard';

export default function About() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden px-4 bg-black">
      <Background />

      <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
        <Transition delay={0.3}>
          <div
            className="max-w-3xl text-center space-y-4"
            style={{
              fontFamily: 'Audiowide, sans-serif',
              fontWeight: 400,
              color: '#c5ced6',
              textAlign: 'center',
              textShadow: '0 0 20px #c5ced6',
              marginTop: '50vh',
              marginBottom: '40vh',
              fontSize: '1.25rem',
            }}
          >
            <SpotlightCard
              className="custom-spotlight-card p-6 md:p-8 rounded-xl"
              spotlightColor="rgba(0, 29, 255, 0.2)"
            >
              <h1 className="text-2xl md:text-4xl font-bold mb-4">About Astrodyssey</h1>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed opacity-90">
                Astrodyssey is a cosmic exploration experience built to inspire and deliver deep space knowledge through interactive visuals and facts. <br /><br />
                Navigate the universe one scroll at a time.
                <br /><br />
                This project was built using React, Tailwind CSS, NASA APIs, and help from resource tools like Stitch by Google, ReactBits, and ChatGPT for learning and development support.
              </p>
            </SpotlightCard>
          </div>
        </Transition>
      </div>
    </div>
  );
}
