// src/Explore/SpaceNewsGallery.tsx

import React, { useEffect, useState } from 'react';
import './SpaceNewsGallery.css';

interface Article {
  id: number;
  title: string;
  url: string;
  image_url: string;
  published_at: string;
  news_site: string;
}

const SpaceNewsGallery: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetch('https://api.spaceflightnewsapi.net/v4/articles/?limit=4')
      .then((res) => res.json())
      .then((data) => setArticles(data.results))
      .catch((error) => console.error('Error fetching articles:', error));
  }, []);

  return (
    <div className="space-news-gallery">
      <h2 className="gallery-title">Latest Space News</h2>
      <div className="card-grid">
        {articles.map((article) => (
          <div key={article.id} className="news-card">
            <img src={article.image_url} alt={article.title} />
            <div className="card-content">
              <h3>{article.title}</h3>
              <p className="published-date">
                {new Date(article.published_at).toLocaleDateString()}
              </p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpaceNewsGallery;
