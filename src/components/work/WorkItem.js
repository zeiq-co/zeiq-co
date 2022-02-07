const WorkItem = () => (
  <div className="col-lg-4 col-sm-6">
    <div className="mb-4 pb-3 has-anim">
      <div className="card portfolio-card">
        <a
          className="card-img overflow-hidden rounded-0"
          href="portfolio-single.html"
        >
          <img
            loading="lazy"
            className="img-fluid"
            src="assets/images/portfolio/grid/01.jpg"
            alt="Portfolio Thumbnail"
          />
        </a>
        <div className="block">
          <h3 className="h4 mb-1">
            <a
              className="text-dark text-underline"
              href="portfolio-single.html"
            >
              Observer
            </a>
          </h3>
          <p className="font-weight-500 mb-0">Nature</p>
        </div>
      </div>
    </div>
  </div>
);

export default WorkItem;
