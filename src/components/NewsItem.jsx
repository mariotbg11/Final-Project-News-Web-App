import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

function NewsItem({ headline, image, alt, paragraph, url, isLarge }) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg group ${
        isLarge ? "lg:col-span-4 md:row-span-2" : ""
      }`}
    >
      <div
        className={`card ${
          isLarge ? "md:card-compact lg:card-side" : "card-compact"
        } bg-base-100 w-full rounded-lg`}
      >
        <figure className={isLarge ? "lg:w-1/2" : ""}>
          <img
            src={`http://nytimes.com${image}`}
            alt={alt}
            className={`w-full ${
              isLarge ? "md:h-72 lg:h-[425px]" : "md:h-72 lg:h-52"
            } object-cover rounded-lg`}
          />
        </figure>
        <div className={`px-1 ${isLarge ? "lg:card-body lg:w-1/2" : ""}`}>
          <h2
            className={`card-title font-lora mt-3 ${
              isLarge ? "lg:text-4xl leading-snug mb-2" : ""
            }`}
          >
            {headline}
          </h2>
          <p className="text-sm mt-3">{paragraph}</p>
          <div className="card-actions justify-between items-center mt-8">
            <a
              href="#"
              className="px-2 py-1 text-base-100 bg-orange-500 hover:bg-orange-300 rounded-md"
            >
              <FontAwesomeIcon icon={faBookmark} />
            </a>
            <a
              href={url}
              className="text-orange-500 hover:text-orange-300 hover:underline"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
