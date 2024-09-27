import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProgrammingNews } from "../features/news/newsSlice";
import NewsList from "../components/NewsList";

function ProgrammingNews() {
  const dispatch = useDispatch();

  useEffect(() => {
    const apiKey = import.meta.env.VITE_NEWS_API_KEY;
    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=Computer&fq=section_name:("Technology")&api-key=${apiKey}`;

    async function getProgrammingNews() {
      const res = await fetch(url);
      const data = await res.json();
      // console.log(data.response.docs);
      dispatch(setProgrammingNews(data.response.docs));
    }
    getProgrammingNews();
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
            Programming/Tech News
          </h1>
          <NewsList type="programming" />
        </div>
      </div>
    </section>
  );
}

export default ProgrammingNews;
