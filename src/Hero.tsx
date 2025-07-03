//Hero.tsx
import BlurText from "./BlurText";
import '@fontsource/audiowide';

export default function Hero() {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{
        fontFamily: 'Audiowide, sans-serif',
        fontSize: '3rem',
        fontWeight: 400,
        color: "#c5ced6",
        textAlign: 'center',
        marginTop: '45vh',
        textShadow: '0 0 20px #c5ced6',
      }}
    >
      <BlurText
        text="Welcome to Astrodyssey"
        delay={150}
        animateBy="words"
        direction="top"
        className="mb-4"
      />
    </div>
  );
}
