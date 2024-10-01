import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons/faBolt";
import { ReactTyped } from "react-typed";

function Header() {
  return (
    <header>
      <div className="mx-auto px-4 lg:px-24 py-8">
        <div className="card bg-gray-100 text-neutral-content w-full rounded-lg">
          <div className="card-body items-center text-center text-black px-0">
            <h2 className="card-title uppercase text-xs font-medium spacing tracking-[0.2em] mb-1">
              Welcome to{" "}
              <ReactTyped
                strings={["flashNews"]}
                typeSpeed={60}
                backSpeed={60}
                loop
              />
              <span className="text-orange-500 fa-sm">
                <FontAwesomeIcon icon={faBolt} />
              </span>
            </h2>
            <p className="text-md md:text-2xl lg:text-3xl font-semibold">
              Discover the <span className="text-orange-500">stories</span>📘,
              Get the <span className="text-orange-500">facts</span>✅,
              <br />
              <span className="text-orange-500">fast</span> and
              <span className="text-orange-500"> reliable</span>💡, all in one
              place📌.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
