const LatestPosts = () => (
  <section className="section bg-white">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 has-anim fade">
          <div className="section-title text-center mb-4">
            <p className="mb-2">Latest news</p>
            <h2 className="title text-dark">Our Blog Posts</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 has-anim fade">
          <article className="card blog-card blog-card-horizontal border-0 rounded-0">
            <div
              className="card-background"
              style={{ backgroundColor: '#c11c3b' }}
            />

            <div className="row justify-content-center align-items-center">
              <div className="col-lg-6">
                <a href="blog-single.html" className="card-image">
                  <img
                    loading="lazy"
                    src="assets/images/blogs/01-hr.jpg"
                    className="card-img rounded-0"
                    alt="blog-post"
                  />
                </a>
              </div>
              <div className="col-lg-6 mt-4 mt-sm-5 mt-lg-0">
                <div className="card-body p-0 p-lg-4">
                  <span className="card-tag mb-3">Featured</span>

                  <h3 className="card-title">
                    <a href="blog-single.html">
                      Thoughts on Branding from Rowan, a new premium coat-care
                      brand for dogs
                    </a>
                  </h3>
                  <p className="card-text">
                    We love seeing new products coming to life especially when
                    there's a lot of attention on Branding and Visual Identity,
                    the overall high quality of the product itself.
                  </p>

                  <p className="card-meta mt-3">
                    7 Dec 2021 <span className="mx-2">—</span> 3 mins read
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
        <div className="col-lg-4 col-md-6 has-anim fade">
          <article className="card blog-card border-0 rounded-0">
            <div
              className="card-background"
              style={{ backgroundColor: '#0a11a8' }}
            />

            <a href="blog-single.html" className="card-image">
              <img
                loading="lazy"
                src="assets/images/blogs/01.jpg"
                className="card-img rounded-0"
                alt="blog-post"
              />
            </a>

            <div className="card-body p-0 mt-4">
              <span className="card-tag mb-3">
                <a href="blogs-1-col.html">Design</a>
              </span>

              <h4 className="card-title">
                <a href="blog-single.html">
                  How to build Colorful &amp; Energetic Illustrations using
                  Adobe Illustrator
                </a>
              </h4>
              <p className="card-text">
                It's about 'How to create a colorful & energetic portraits in
                Adobe Illustrator'
              </p>

              <p className="card-meta mt-3">
                6 Dec 2021 <span className="mx-2">—</span> 4 mins read
              </p>
            </div>
          </article>
        </div>
        <div className="col-lg-4 col-md-6 has-anim fade anim-delay-1">
          <article className="card blog-card border-0 rounded-0">
            <div
              className="card-background"
              style={{ backgroundColor: '#002306' }}
            />

            <a href="blog-single.html" className="card-image">
              <img
                loading="lazy"
                src="assets/images/blogs/02.jpg"
                className="card-img rounded-0"
                alt="blog-post"
              />
            </a>

            <div className="card-body p-0 mt-4">
              <span className="card-tag mb-3">
                <a href="blogs-3-col.html">Book</a>
              </span>

              <h4 className="card-title">
                <a href="blog-single.html">
                  Pause, Breathe and Grow, a book by Radim Malinic
                </a>
              </h4>
              <p className="card-text">
                Introducing a book titled: Pause, Breathe and Grow, a collection
                of thought-provoking prompts.
              </p>

              <p className="card-meta mt-3">
                5 Dec 2021 <span className="mx-2">—</span> 5 mins read
              </p>
            </div>
          </article>
        </div>
        <div className="col-lg-4 col-md-6 has-anim fade anim-delay-2">
          <article className="card blog-card border-0 rounded-0">
            <div
              className="card-background"
              style={{ backgroundColor: '#c76234' }}
            />

            <a href="blog-single.html" className="card-image">
              <img
                loading="lazy"
                src="assets/images/blogs/03.jpg"
                className="card-img rounded-0"
                alt="blog-post"
              />
            </a>

            <div className="card-body p-0 mt-4">
              <span className="card-tag mb-3">
                <a href="blogs-1-col.html">3D Design</a>
              </span>

              <h4 className="card-title">
                <a href="blog-single.html">
                  Captivating and nonsense in 3D series by Roman Bratschi
                </a>
              </h4>
              <p className="card-text">
                This series is actually the nonsense aspect of it, it does make
                no sense but that's what unique about Roman's work.
              </p>

              <p className="card-meta mt-3">
                4 Dec 2021 <span className="mx-2">—</span> 2 mins read
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
);

export default LatestPosts;
