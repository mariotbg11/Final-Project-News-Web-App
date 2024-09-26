function CallToAction() {
  return (
    <div className="mx-auto px-4 lg:px-24 py-16">
      <div className="card bg-gray-100 text-base-100 w-full rounded-lg px-4">
        <div className="card-body text-black items-center justify-between flex-col md:flex-row px-1 lg:px-8">
          <div className="w-full md:w-1/2">
            <h2 className="card-title uppercase text-xs md:text-sm font-medium spacing tracking-[0.2em] mb-2">
              Get first update!
            </h2>
            <p className="font-medium text-lg md:text-2xl">
              Stay Informed, Stay Ahead by
              <br />
              <span className="text-orange-500">subscribe</span>✍️our latest
              news updates
            </p>
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-end gap-2 mt-2">
            <input
              type="text"
              placeholder="Your email"
              className="input input-bordered w-full max-w-xs"
            />
            <button className="btn text-base-100 bg-orange-500 hover:bg-orange-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
