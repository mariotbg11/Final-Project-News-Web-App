import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as regularBookmark } from "@fortawesome/free-regular-svg-icons";
import { faBookmark as solidBookmark } from "@fortawesome/free-solid-svg-icons";

function NewsItem({
  headline,
  image,
  alt,
  paragraph,
  url,
  isLarge,
  newsId,
  onDelete,
}) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Check the news in the localStorage
    const savedNews = JSON.parse(localStorage.getItem("savedNews")) || [];
    const bookmarked = savedNews.some((news) => news.newsId === newsId);
    setIsBookmarked(bookmarked);
  }, [newsId]);

  const handleSaveNews = () => {
    let savedNews = JSON.parse(localStorage.getItem("savedNews")) || [];

    if (isBookmarked) {
      // If the news bookmarked, delete from localStorage
      savedNews = savedNews.filter((news) => news.newsId !== newsId);
      localStorage.setItem("savedNews", JSON.stringify(savedNews));
      setModalMessage("News removed from saved!"); // Show modal removed from SAVED
      if (onDelete) {
        onDelete(newsId); // Call onDelete function for updating news list on SAVED page
      }
    } else {
      // Add news to localStorage savedNews
      const newsToSave = { headline, image, alt, paragraph, url, newsId };
      savedNews.push(newsToSave);
      localStorage.setItem("savedNews", JSON.stringify(savedNews));
      setModalMessage("News added to saved"); // Show modal added to SAVED
    }

    setIsBookmarked(!isBookmarked); // Toggle icon bookmark
    setShowModal(true); // Show modal when its click
  };

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
            src={image}
            alt={alt}
            className={`w-full ${
              isLarge ? "h-72 md:h-96 lg:h-[425px]" : "h-72 md:h-96 lg:h-52"
            } object-cover rounded-lg`}
          />
        </figure>
        <div className={`px-1 ${isLarge ? "lg:card-body lg:w-1/2" : ""}`}>
          <h2
            className={`card-title font-lora mt-3 ${
              isLarge ? "lg:text-4xl leading-snug mb-2" : "text-xl line-clamp-2"
            }`}
          >
            {headline}
          </h2>
          <p
            className={`mt-3 h-20 text-sm ${
              isLarge
                ? "lg:text-base line-clamp-4 lg:line-clamp-none"
                : "line-clamp-4"
            }`}
          >
            {paragraph}
          </p>
          <div className="card-actions justify-between items-center mt-8">
            <button
              onClick={handleSaveNews}
              className="px-2 py-1 text-base-100 bg-orange-500 hover:bg-orange-300 rounded-md"
            >
              <FontAwesomeIcon
                icon={isBookmarked ? solidBookmark : regularBookmark}
              />
            </button>
            <a
              href={url}
              target="_blank"
              className="text-orange-500 hover:text-orange-300 hover:underline"
            >
              Read more
            </a>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-30">
          <div className="modal-box">
            <p className="py-4">{modalMessage}</p>
            <div className="modal-action">
              <button
                onClick={() => setShowModal(false)}
                className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-300"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NewsItem;
