import { useSelector } from "react-redux";
import NewsItem from "./NewsItem";
import nytImage from "../assets/nyt.jpg";

function NewsList({ type }) {
  const articleNews = useSelector((state) =>
    type === "indonesia" ? state.news.indonesiaNews : state.news.programmingNews
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-5 gap-y-16 md:gap-y-20 lg:gap-y-10">
      {articleNews.length > 0 && (
        <NewsItem
          key={articleNews[0]._id}
          headline={articleNews[0].headline.main}
          paragraph={articleNews[0].lead_paragraph}
          image={
            articleNews[0].multimedia && articleNews[0].multimedia.length > 0
              ? `http://www.nytimes.com/${articleNews[0].multimedia[0].url}`
              : nytImage
          }
          alt={articleNews[0].snippet}
          url={articleNews[0].web_url}
          isLarge={true}
        />
      )}
      {articleNews.length > 1 &&
        articleNews
          .slice(1)
          .map((article) => (
            <NewsItem
              key={article._id}
              headline={article.headline.main}
              paragraph={article.lead_paragraph}
              image={
                article.multimedia && article.multimedia.length > 0
                  ? `http://www.nytimes.com/${article.multimedia[0].url}`
                  : nytImage
              }
              alt={article.snippet}
              url={article.web_url}
              isLarge={false}
            />
          ))}
    </div>
  );
}

export default NewsList;
