function Navbar() {
  return (
    <nav className="py-3 md:px-20">
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
                <a>Indonesia</a>
              </li>
              <li>
                <a>Programming</a>
              </li>
              <li>
                <a>Save</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl px-2">flashNews⚡</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium uppercase">
            <li>
              <a>Indonesia</a>
            </li>
            <li>
              <a>Programming</a>
            </li>
            <li>
              <a>Save</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn bg-orange-500 text-base-100 rounded-lg px-6 border-none hover:bg-orange-300">
            Sign in
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
