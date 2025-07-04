// App.tsx
import Hero from './Hero';
import Galaxy from './Galaxy';
import GooeyNav from './GooeyNav';
import About from './About/About';
import Explore from './Explore/Explore';
import Pictures from './Pictures/Pictures';

export default function App() {
  return (
    <div style={{ fontFamily: 'Audiowide, sans-serif' }}>

      <GooeyNav items={[
        { label: 'Home' },
        { label: 'About' },
        { label: 'Explore' },
        { label: 'Pictures' }
      ]} />

      {/* Galaxy background */}
      <Galaxy />

      {/* Sections */}
      <div id="home">
        <Hero />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="explore">
        <Explore />
      </div>

      <div id="pictures">
        <Pictures />
      </div>
    </div>
  );
}
  