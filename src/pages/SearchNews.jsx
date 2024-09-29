import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSearchNews } from "../features/news/newsSlice";
import NewsList from "../components/NewsList";
import { useNavigate } from "react-router-dom";

function SearchNews() {
  const [keywordSearch, setKeywordSearch] = useState("");
  const navigate = useNavigate();

  const handleSearchNews = (e) => {
    e.preventDefault();
    if (keywordSearch.trim()) {
      navigate(`/search/${keywordSearch}`);
      setKeywordSearch("");
    }
  };

  const { keyword } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (keyword) {
      dispatch(fetchSearchNews(keyword));
    }
  }, [dispatch, keyword]);

  return (
    <section>
      <div className="bg-base-100">
        <div className="mx-auto px-4 lg:px-24 py-8">
          <div className="mb-14 sm:hidden">
            <form onSubmit={handleSearchNews} className="flex flex-col gap-2">
              <input
                type="text"
                value={keywordSearch}
                onChange={(e) => setKeywordSearch(e.target.value)}
                placeholder="Type here..."
                className="input input-bordered rounded-lg"
              />
              <button
                type="submit"
                className="btn bg-orange-500 text-base-100 rounded-lg w-full px-6 border-none hover:bg-orange-300"
              >
                Search
              </button>
            </form>
          </div>
          <h1 className="text-2xl md:text-3xl font-semibold text-center mb-8 md:mb-12">
            Result for : <span className="underline">{keyword} News</span>
          </h1>
          <NewsList type="searchnews" />
        </div>
      </div>
    </section>
  );
}

export default SearchNews;
