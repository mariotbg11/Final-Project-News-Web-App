function FaqAccordion() {
  return (
    <div className="flex flex-col gap-3 w-full md:w-1/2 mx-auto px-4 lg:px-24 py-16">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold mb-2">FAQ</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="collapse collapse-plus bg-gray-100 rounded-lg">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-lg font-medium">
          What is FlashNews
        </div>
        <div className="collapse-content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-gray-100 rounded-lg">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-lg font-medium">
          How do I save news articles?
        </div>
        <div className="collapse-content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-gray-100 rounded-lg">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-lg font-medium">
          Can I search for specific news topics?
        </div>
        <div className="collapse-content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-gray-100 rounded-lg">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-lg font-medium">
          How do I remove a saved article?
        </div>
        <div className="collapse-content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        </div>
      </div>
    </div>
  );
}

export default FaqAccordion;
