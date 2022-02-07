const PostItem = ({ post, bgColor }) => (
  <div className="col-lg-12">
    <article className="card blog-card blog-card-horizontal border-0 rounded-0 has-anim">
      <div className="card-background" style={{ backgroundColor: bgColor }} />

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
            <span className="card-tag mb-3">
              <a href="blogs-3-col.html">Branding</a>
            </span>

            <h3 className="card-title">
              <a href="blog-single.html">
                Thoughts on Branding from Rowan, a new premium coat-care brand
                for dogs
              </a>
            </h3>
            <p className="card-text">
              We love seeing new products coming to life especially when there's
              a lot of attention on Branding and Visual Identity, the overall
              high quality of the product itself.
            </p>

            <p className="card-meta mt-3">
              7 Dec 2021 <span className="mx-2">—</span> 3 mins read
            </p>
          </div>
        </div>
      </div>
    </article>
  </div>
);

export default PostItem;
