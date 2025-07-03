import '@fontsource/audiowide';
import Background from './Background';
import Transition from './transition';
import SpotlightCard from './SpotlightCard';

export default function About() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden px-4 bg-black">
      <Background />

      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <Transition delay={0.3}>
          <div
            className="max-w-3xl text-center space-y-4"
            style={{
              fontFamily: 'Audiowide, sans-serif',
              fontSize: '1.5rem',
              fontWeight: 400,
              color: '#c5ced6',
              textAlign: 'center',
              textShadow: '0 0 20px #c5ced6',
              marginTop: '25vh',
            }}
          >
            <SpotlightCard
              className="custom-spotlight-card p-8 rounded-xl"
              spotlightColor="rgba(0, 29, 255, 0.2)"
            >
              <h1>About Astrodyssey</h1>
              <p >
                Astrodyssey is a cosmic exploration experience built to inspire

                and deliver deep space knowledge through interactive visuals and facts

                Navigate the universe one scroll at a time.

              This project was built using React, Tailwind CSS, NASA APIs, and help from Resource tools like Stitch by Google, ReactBits and ChatGPT for learning and development support. </p>
            </SpotlightCard>
          </div>
        </Transition>
      </div>
    </div>
  );
}
