import Image from 'next/image';
import Link from 'next/link';

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
          brandsData.map((item, index) => {
            if (!item.featuredImage) return null;
            return (
              <div className="logo-item" key={item.title}>
                <Link href={`/technology/${item?.slug}`}>
                  <a className="has-anim fade">
                    <Image
                      priority={index}
                      src={item.featuredImage}
                      alt={item.title}
                      height={250}
                      width={400}
                    />
                  </a>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  </section>
);

export default Technologies;
