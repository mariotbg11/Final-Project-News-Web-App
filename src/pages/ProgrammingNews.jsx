import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProgrammingNews } from "../features/news/newsSlice";
import NewsList from "../components/NewsList";

function ProgrammingNews() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProgrammingNews());
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
