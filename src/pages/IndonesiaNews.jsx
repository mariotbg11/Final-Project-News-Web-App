import { useState, useEffect } from "react";
import NewsList from "../components/NewsList";

function IndonesiaNews() {
  const [indonesiaNews, setIndonesiaNews] = useState([]);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_NEWS_API_KEY;
    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=Indonesia&fq=headline:("Indonesia") AND document_type:("article")&api-key=${apiKey}`;

    async function getIndonesiaNews() {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data.response.docs);
      setIndonesiaNews(data.response.docs);
    }
    getIndonesiaNews();
  }, []);

  return (
    <section>
      <div className="bg-base-100">
        <div className="mx-auto px-4 lg:px-24 py-8">
          <h1 className="text-2xl md:text-3xl font-semibold text-center mb-8 md:mb-12 underline">
            Indonesia News
          </h1>
          <NewsList articleNews={indonesiaNews} />
        </div>
      </div>
    </section>
  );
}

export default IndonesiaNews;
