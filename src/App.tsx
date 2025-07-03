import { Routes, Route } from 'react-router-dom';
import Hero from './Hero';
import Galaxy from './Galaxy';
import GooeyNav from './GooeyNav';
import About from './About/About';
import Explore from './Explore/Explore';
import Pictures from './Pictures/Pictures';

export default function App() {
  return (
    <div style={{ fontFamily: 'Audiowide, sans-serif' }}>
      <div >
        <GooeyNav items={[{ label: 'Home' }, { label: 'About' }, { label: 'Explore' }, { label: 'Pictures' }]} />
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Galaxy />
              <div >
                <Hero />
              </div>
              <div/>
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/pictures" element={<Pictures />} />
      </Routes>
    </div>
  );
}
