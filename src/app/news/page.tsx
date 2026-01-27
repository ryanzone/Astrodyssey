"use client";

import { useEffect, useState } from "react";

type Article = {
  id: number;
  title: string;
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string;
};

export default function NewsPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.spaceflightnewsapi.net/v4/articles/?limit=12")
      .then((res) => res.json())
      .then((data) => setArticles(data.results))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div className="h-screen bg-black flex items-center justify-center text-white">
        Loading space news...
      </div>
    );

  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <h1 className="text-4xl font-bold mb-10 text-center">
        Space News
      </h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {articles.map((article) => (
          <a
            key={article.id}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:scale-[1.02] transition"
          >
            {/* image */}
            <div className="h-48 overflow-hidden">
              <img
                src={article.image_url}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* content */}
            <div className="p-5">
              <p className="text-sm text-purple-300 mb-1">
                {article.news_site}
              </p>

              <h2 className="font-semibold text-lg mb-2 line-clamp-2">
                {article.title}
              </h2>

              <p className="text-sm text-gray-300 line-clamp-3 mb-4">
                {article.summary}
              </p>

              <p className="text-xs text-gray-500">
                {new Date(article.published_at).toDateString()}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
