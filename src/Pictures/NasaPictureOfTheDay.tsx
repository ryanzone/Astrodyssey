// src/Explore/NasaPictureOfTheDay.tsx
import React, { useEffect, useState } from "react";
import "./NasaPictureOfTheDay.css";

type ApodData = {
  title: string;
  explanation: string;
  url: string;
  media_type: "image" | "video";
  date: string;
};

const NasaPictureOfTheDay: React.FC = () => {
  const [data, setData] = useState<ApodData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=mFwwF4td68YulmkSY3TeMP346N6o35et2hIu8uwK`
    )
      .then((res) => res.json())
      .then((json) => {
        if (json.code) {
          setError(json.msg || "Failed to fetch APOD");
        } else {
          setData(json);
        }
      })
      .catch(() => setError("Network error."));
  }, []);

  return (
    <div className="apod-container">
      <h2 className="apod-title">📸 NASA Picture of the Day</h2>
      {error && <p className="apod-error">{error}</p>}
      {!error && !data && <p className="apod-loading">Loading...</p>}
      {data && (
        <div className="apod-card">
          <h3 className="apod-image-title">{data.title}</h3>
          {data.media_type === "image" ? (
            <img src={data.url} alt={data.title} className="apod-image" />
          ) : (
            <iframe
              title="NASA Video"
              src={data.url}
              frameBorder="0"
              allow="encrypted-media"
              allowFullScreen
              className="apod-video"
            ></iframe>
          )}
          <p className="apod-description">{data.explanation}</p>
          <p className="apod-date">🗓️ {data.date}</p>
        </div>
      )}
    </div>
  );
};

export default NasaPictureOfTheDay;
