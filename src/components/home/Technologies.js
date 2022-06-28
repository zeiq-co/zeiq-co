import Image from 'next/image';

const Technologies = ({ brandsData }) => (
  <section className="section">
    <div className="container">
      <div className="row">
        <div className="col-12 has-anim fade">
          <div className="section-title text-center">
            <p className="mb-2 text-light">Our Tech Stack</p>
            <h2 className="title text-white">Technologies</h2>
          </div>
        </div>
      </div>

      <div className="clients-logo-grid">
        {brandsData &&
          brandsData.map((item) => {
            if (!item.featuredImage) return null;
            return (
              <div className="logo-item" key={item.title}>
                <a href="#!" className="has-anim fade">
                  <Image
                    src={item.featuredImage}
                    alt={item.title}
                    height={250}
                    width={400}
                  />
                </a>
              </div>
            );
          })}
      </div>
    </div>
  </section>
);

export default Technologies;
