import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons/faBolt";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [keywordSearch, setKeywordSearch] = useState("");
  const navigate = useNavigate();

  const handleSearchNews = (e) => {
    e.preventDefault();
    if (keywordSearch.trim()) {
      navigate(`/search/${keywordSearch}`);
      setKeywordSearch("");
    }
  };

  return (
    <nav className="py-3 lg:px-20">
      <div className="navbar bg-base-100 pr-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="0"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-medium uppercase"
            >
              <li>
                <Link to="/">Indonesia</Link>
              </li>
              <li>
                <Link to="/programming">Programming</Link>
              </li>
              <li>
                <Link to="/saved">Saved</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-2xl px-2">
            flashNews
            <span className="text-orange-500 fa-sm">
              <FontAwesomeIcon icon={faBolt} />
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium uppercase">
            <li>
              <Link to="/">Indonesia</Link>
            </li>
            <li>
              <Link to="/programming">Programming</Link>
            </li>
            <li>
              <Link to="/saved">Saved</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end hidden sm:flex">
          <form onSubmit={handleSearchNews} className="flex flex-row gap-2">
            <input
              type="text"
              value={keywordSearch}
              onChange={(e) => setKeywordSearch(e.target.value)}
              placeholder="Type here..."
              className="input input-bordered w-full max-w-52 rounded-lg"
            />
            <button className="btn bg-orange-500 text-base-100 rounded-lg px-6 border-none hover:bg-orange-300">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
