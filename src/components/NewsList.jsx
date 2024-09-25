import NewsItem from "./NewsItem";

function NewsList({ indonesiaNews }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-5 gap-y-16 md:gap-y-20 lg:gap-y-10">
      {indonesiaNews.length > 0 && (
        <NewsItem
          key={indonesiaNews[0]._id}
          headline={indonesiaNews[0].headline.main}
          paragraph={indonesiaNews[0].lead_paragraph}
          image={indonesiaNews[0].multimedia[0].url}
          url={indonesiaNews[0].web_url}
          islarge={true}
        />
      )}
      {indonesiaNews.length > 1 &&
        indonesiaNews
          .slice(1)
          .map((indonews) => (
            <NewsItem
              key={indonews._id}
              headline={indonews.headline.main}
              paragraph={indonews.lead_paragraph}
              image={indonews.multimedia[0].url}
              url={indonews.web_url}
              islarge={false}
            />
          ))}
    </div>
  );
}

export default NewsList;
