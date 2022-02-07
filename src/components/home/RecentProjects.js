const RecentProjects = () => (
  <section className="section bg-white portfolio-carousel-fluid">
    <div className="container">
      <div className="row">
        <div className="col-12 has-anim fade">
          <div className="section-title text-center">
            <p className="mb-2">Recent works</p>
            <h2 className="title text-dark">Selected Projects</h2>
          </div>
        </div>
      </div>
    </div>
    <div className="swiper-container">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <div className="card portfolio-card card-overlay card-hover-zoom">
            <span className="card-img">
              <img
                className="img-fluid"
                src="assets/images/portfolio/carousel/01.jpg"
                alt="Portfolio Thumbnail"
              />
              <span
                className="img-overlay"
                style={{ backgroundColor: '#D83013' }}
              />
            </span>
            <div className="card-img-overlay text-center">
              <div className="block">
                <h3 className="h2 card-title mb-3">
                  <a href="portfolio-single.html">Spearmint</a>
                </h3>
                <span className="card-subtitle">
                  <a href="portfolio-grid-3-col.html">Branding</a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="card portfolio-card card-overlay card-hover-zoom">
            <span className="card-img">
              <img
                className="img-fluid"
                src="assets/images/portfolio/carousel/02.jpg"
                alt="Portfolio Thumbnail"
              />
              <span
                className="img-overlay"
                style={{ backgroundColor: '#5A6422' }}
              />
            </span>
            <div className="card-img-overlay text-center">
              <div className="block">
                <h3 className="h2 card-title mb-3">
                  <a href="portfolio-single.html">Pear</a>
                </h3>
                <span className="card-subtitle">
                  <a href="portfolio-grid-3-col.html">Development</a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="card portfolio-card card-overlay card-hover-zoom">
            <span className="card-img">
              <img
                className="img-fluid"
                src="assets/images/portfolio/carousel/03.jpg"
                alt="Portfolio Thumbnail"
              />
              <span
                className="img-overlay"
                style={{ backgroundColor: '#E08100' }}
              />
            </span>
            <div className="card-img-overlay text-center">
              <div className="block">
                <h3 className="h2 card-title mb-3">
                  <a href="portfolio-single.html">Hibiscus</a>
                </h3>
                <span className="card-subtitle">
                  <a href="portfolio-grid-3-col.html">Development</a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="card portfolio-card card-overlay card-hover-zoom">
            <span className="card-img">
              <img
                className="img-fluid"
                src="assets/images/portfolio/carousel/04.jpg"
                alt="Portfolio Thumbnail"
              />
              <span
                className="img-overlay"
                style={{ backgroundColor: '#B10101' }}
              />
            </span>
            <div className="card-img-overlay text-center">
              <div className="block">
                <h3 className="h2 card-title mb-3">
                  <a href="portfolio-single.html">Cocacola</a>
                </h3>
                <span className="card-subtitle">
                  <a href="portfolio-grid-3-col.html">Branding</a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="card portfolio-card card-overlay card-hover-zoom">
            <span className="card-img">
              <img
                className="img-fluid"
                src="assets/images/portfolio/carousel/05.jpg"
                alt="Portfolio Thumbnail"
              />
              <span
                className="img-overlay"
                style={{ backgroundColor: '#0E268A' }}
              />
            </span>
            <div className="card-img-overlay text-center">
              <div className="block">
                <h3 className="h2 card-title mb-3">
                  <a href="portfolio-single.html">F.A M.T</a>
                </h3>
                <span className="card-subtitle">
                  <a href="portfolio-grid-3-col.html">Design</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-4">
        <div className="swiper-button prev cursor-pointer">Prev</div>
        <div className="swiper-button next cursor-pointer">Next</div>
      </div>

      <div className="swipeCarousel-control">
        <div className="swiper-pagination" />
        <div className="activeslide">01</div>
        <div className="totalslide">05</div>
      </div>
    </div>
  </section>
);

export default RecentProjects;
