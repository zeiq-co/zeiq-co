const PageHero = ({ title, subTitle }) => (
  <section className="page-header">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="my-0 my-lg-5">
            <p className="mb-3 font-weight-500  is-hero-fade">{title}</p>
            <h2 className="text-white font-weight-500">
              {subTitle}
              <span className="text-primary">.</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PageHero;
