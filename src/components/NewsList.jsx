import { useSelector } from "react-redux";
import NewsItem from "./NewsItem";
import nytImage from "../assets/nyt.jpg";

function NewsList({ type }) {
  const { indonesiaNews, programmingNews, searchNews, loading, error } =
    useSelector((state) => state.news);

  const articleNews =
    type === "indonesia"
      ? indonesiaNews
      : type === "programming"
      ? programmingNews
      : searchNews;

  if (loading)
    return (
      <div className="flex flex-col justify-center items-center h-[600px]">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );

  if (error)
    return (
      <div className="flex flex-col justify-center items-center  h-[600px] w-full md:w-[600px] mx-auto">
        <div
          role="alert"
          className="alert alert-error flex flex-col md:flex-row justify-center items-center rounded-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>
            Something went wrong, unable to load content. Please try again later
          </span>
        </div>
      </div>
    );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-5 gap-y-16 md:gap-y-20 lg:gap-y-10">
      {articleNews.length > 0 && (
        <NewsItem
          key={
            articleNews[0]._id ||
            `${articleNews[0].headline.main}-${articleNews[0].web_url}`
          } // Use _id if available, if not use the combined key
          headline={articleNews[0].headline.main}
          paragraph={articleNews[0].lead_paragraph}
          image={
            articleNews[0].multimedia && articleNews[0].multimedia.length > 0
              ? `http://www.nytimes.com/${articleNews[0].multimedia[0].url}`
              : nytImage
          }
          alt={articleNews[0].snippet}
          url={articleNews[0].web_url}
          newsId={
            articleNews[0]._id ||
            `${articleNews[0].headline.main}-${articleNews[0].web_url}`
          } // Use _id if available, if not use the combined key
          isLarge={true}
        />
      )}
      {articleNews.length > 1 &&
        articleNews.slice(1).map((article) => (
          <NewsItem
            key={article._id || `${article.headline.main}-${article.web_url}`} // Use _id if available, if not use the combined key
            headline={article.headline.main}
            paragraph={article.lead_paragraph}
            image={
              article.multimedia && article.multimedia.length > 0
                ? `http://www.nytimes.com/${article.multimedia[0].url}`
                : nytImage
            }
            alt={article.snippet}
            url={article.web_url}
            newsId={
              article._id || `${article.headline.main}-${article.web_url}`
            } // Use _id if available, if not use the combined key
            isLarge={false}
          />
        ))}
    </div>
  );
}

export default NewsList;
