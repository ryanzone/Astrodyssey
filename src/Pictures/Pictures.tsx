// src/Pictures/Pictures.tsx
import '@fontsource/audiowide';
import Background from './Background';
import Transition from './transition';
import SpotlightCard from './SpotlightCard';
import './Pictures.css';
import { useEffect, useState } from 'react';

interface ApodData {
  date: string;
  title: string;
  explanation: string;
  url: string;
  media_type: 'image' | 'video';
}

export default function Pictures() {
  const [apods, setApods] = useState<ApodData[]>([]);

  useEffect(() => {
    const fetchAPODs = async () => {
      const apiKey = 'mFwwF4td68YulmkSY3TeMP346N6o35et2hIu8uwK';
      const today = new Date();
      const startDate = new Date();
      startDate.setDate(today.getDate() - 3); // past 4 days
      const format = (d: Date) => d.toISOString().split('T')[0];

      const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${format(startDate)}&end_date=${format(today)}`;

      const response = await fetch(url);
      const data = await response.json();
      setApods(data.reverse()); // Newest first
    };

    fetchAPODs();
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      <Background />

      <div className="relative z-50 flex flex-col items-center justify-start pt-32 pb-20">
        <Transition delay={0.3}>
          <div
            className="max-w-3xl space-y-4 text-center"
            style={{
              fontFamily: 'Audiowide, sans-serif',
              fontSize: '1.5rem',
              fontWeight: 400,
              color: '#c5ced6',
              textAlign: 'center',
              textShadow: '0 0 20px #c5ced6',
              marginTop: '30vh',
              marginBottom: '40vh',
            }}
          >
            <SpotlightCard
              className="custom-spotlight-card p-8 rounded-xl mb-12"
              spotlightColor="rgba(0, 29, 255, 0.2)"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Pictures from Space</h1>
              <p className="text-base md:text-lg leading-relaxed opacity-90">
                A gallery of NASA’s Astronomy Picture of the Day.
              </p>
              <p className="text-sm md:text-base opacity-70 mt-2">
                Discover the universe, one day at a time.
              </p>
            </SpotlightCard>
          </div>
        </Transition>

        <div className="apod-gallery z-40 mt-4 px-4 w-full max-w-6xl">
          {apods.map((apod, index) => (
            <div className="apod-card" key={index}>
              <h2 className="apod-title">{apod.title}</h2>
              <p className="apod-date">{apod.date}</p>
              {apod.media_type === 'image' ? (
                <img src={apod.url} alt={apod.title} className="apod-image" />
              ) : (
                <iframe
                  title={apod.title}
                  src={apod.url}
                  className="apod-video"
                  allow="encrypted-media"
                  allowFullScreen
                />
              )}
              <p className="apod-explanation">{apod.explanation}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
