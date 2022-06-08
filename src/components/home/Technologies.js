import Image from 'next/image';

import brandsData from '../../../content/general/brands.yaml';

const Technologies = () => (
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
        {brandsData.map((item) => (
          <div className="logo-item" key={item.title}>
            <a href="#!" className="has-anim fade">
              <Image
                src={item.image}
                alt={item.title}
                height={250}
                width={400}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Technologies;
