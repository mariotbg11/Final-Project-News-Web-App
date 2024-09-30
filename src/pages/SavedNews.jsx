import { useEffect, useState } from "react";
import NewsItem from "../components/NewsItem";

function SavedNews() {
  const [savedNews, setSavedNews] = useState([]);

  useEffect(() => {
    // Ambil data saved news dari localStorage
    const news = JSON.parse(localStorage.getItem("savedNews")) || [];
    setSavedNews(news);
  }, []);

  const handleDeleteNews = (newsId) => {
    setSavedNews((prevNews) =>
      prevNews.filter((news) => news.newsId !== newsId)
    );
  };

  return (
    <section>
      <div className="bg-base-100">
        <div className="mx-auto px-4 lg:px-24 py-8">
          <h1 className="text-2xl md:text-3xl font-semibold text-center mb-8 md:mb-12 underline">
            Saved News
          </h1>
          {savedNews.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-5 gap-y-16 md:gap-y-20 lg:gap-y-10">
              {savedNews.map((news) => (
                <NewsItem
                  key={news.newsId}
                  headline={news.headline}
                  paragraph={news.paragraph}
                  image={news.image}
                  alt={news.alt}
                  url={news.url}
                  newsId={news.newsId}
                  isLarge={false}
                  onDelete={handleDeleteNews}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center  h-[600px] w-full md:w-[600px] mx-auto">
              <div
                role="alert"
                className="alert flex flex-col justify-center items-center rounded-lg"
              >
                <span>No news saved available</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default SavedNews;
