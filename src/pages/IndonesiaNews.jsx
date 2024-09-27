import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setIndonesiaNews } from "../features/news/newsSlice";
import NewsList from "../components/NewsList";

function IndonesiaNews() {
  const dispatch = useDispatch();

  useEffect(() => {
    const apiKey = import.meta.env.VITE_NEWS_API_KEY;
    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=Indonesia&fq=headline:("Indonesia") AND document_type:("article")&api-key=${apiKey}`;

    async function getIndonesiaNews() {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data.response.docs);
      dispatch(setIndonesiaNews(data.response.docs));
    }
    getIndonesiaNews();
  }, [dispatch]);

  return (
    <section>
      <div className="bg-base-100">
        <div className="mx-auto px-4 lg:px-24 py-8">
          <div className="flex flex-col gap-2 mb-14 sm:hidden">
            <input
              type="text"
              placeholder="Type here..."
              className="input input-bordered w-full sm:max-w-52"
            />
            <button className="btn bg-orange-500 text-base-100 rounded-lg px-6 border-none hover:bg-orange-300">
              Search
            </button>
          </div>
          <h1 className="text-2xl md:text-3xl font-semibold text-center mb-8 md:mb-12 underline">
            Indonesia News
          </h1>
          <NewsList type="indonesia" />
        </div>
      </div>
    </section>
  );
}

export default IndonesiaNews;
