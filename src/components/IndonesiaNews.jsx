import NewsList from "./NewsList";

function IndonesiaNews({ articleNews }) {
  return (
    <section>
      <div className="bg-base-100">
        <div className="mx-auto px-4 lg:px-24 py-8">
          <h1 className="text-2xl md:text-3xl font-semibold text-center mb-8 md:mb-12 underline">
            Indonesia News
          </h1>
          <NewsList articleNews={articleNews} />
        </div>
      </div>
    </section>
  );
}

export default IndonesiaNews;
