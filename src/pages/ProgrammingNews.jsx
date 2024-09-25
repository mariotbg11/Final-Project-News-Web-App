import { useState, useEffect } from "react";
import NewsList from "../components/NewsList";

function ProgrammingNews() {
  const [programmingNews, setProgrammingNews] = useState([]);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_NEWS_API_KEY;
    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=Computer&fq=section_name:("Technology")&api-key=${apiKey}`;

    async function getProgrammingNews() {
      const res = await fetch(url);
      const data = await res.json();
      // console.log(data.response.docs);
      setProgrammingNews(data.response.docs);
    }
    getProgrammingNews();
  }, []);

  return (
    <section>
      <div className="bg-base-100">
        <div className="mx-auto px-4 lg:px-24 py-8">
          <h1 className="text-2xl md:text-3xl font-semibold text-center mb-8 md:mb-12 underline">
            Programming/Tech News
          </h1>
          <NewsList articleNews={programmingNews} />
        </div>
      </div>
    </section>
  );
}

export default ProgrammingNews;
