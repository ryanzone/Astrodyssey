// Hero.tsx
import BlurText from "./BlurText";
import '@fontsource/audiowide';

export default function Hero() {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      style={{
        fontFamily: 'Audiowide, sans-serif',
        fontWeight: 400,
        color: "#c5ced6",
        textAlign: 'center',
        marginTop: '50vh',
        textShadow: '0 0 20px #c5ced6',
        fontSize: '4rem',
        marginBottom: '50vh',
      }}
    >
      <BlurText
        text="Welcome to Astrodyssey"
        delay={150}
        animateBy="words"
        direction="top"
        className="mb-4 text-[2rem] sm:text-[3rem] leading-tight"
      />
    </div>
  );
}
