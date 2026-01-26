import '@fontsource/audiowide';
import Background from './Background';
import Transition from './Transition';
import SpotlightCard from './SpotlightCard';
import SpaceNewsGallery from './SpaceNewsGallery'; 

export default function Explore() {
  return (
    <div className="relative min-h-screen w-full bg-black overflow-x-hidden text-white">
      <Background />


      <div className="relative z-50 flex flex-col items-center justify-start pt-32 px-4 sm:px-6 pb-40">
        <Transition delay={0.3}>
          <div
            className="max-w-3xl space-y-4 text-center mb-20"
            style={{
              fontFamily: 'Audiowide, sans-serif',
              fontWeight: 400,
              color: '#c5ced6',
              textAlign: 'center',
              textShadow: '0 0 20px #c5ced6',
              marginTop: '25vh',
              marginBottom: '50vh',
              fontSize: 'clamp(1rem, 2.5vw, 1.5rem)' 
            }}
          >
            <SpotlightCard
              className="custom-spotlight-card p-6 md:p-8 rounded-xl mb-12"
              spotlightColor="rgba(0, 29, 255, 0.2)"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Explore the Cosmos</h1>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed opacity-90">
                Discover planets, stars, and celestial wonders.
              </p>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed opacity-90">
                Our universe awaits you with interactive visuals and facts across galaxies.
              </p>
              <p className="text-xs sm:text-sm md:text-base opacity-70 mt-2">
                Embark on your astronomical journey today.
              </p>
            </SpotlightCard>
          </div>
        </Transition>


        <div className="z-40 w-full max-w-5xl px-2 sm:px-4 mt-20">
          <SpaceNewsGallery />
        </div>
      </div>
    </div>
  );
}
