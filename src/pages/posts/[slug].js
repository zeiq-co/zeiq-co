import { NextSeo } from 'next-seo';

import config from '../../utils/config';
import Layout from '../../components/Layout';
import PostHero from '../../components/blog/PostHero';

const BlogPost = () => (
  <Layout>
    <NextSeo
      title={config.siteName}
      description="A short description goes here."
    />
    <PostHero />
    <section className="section pb-0">
      <div className="container">
        <div className="row">
          <div className="col-12 mb-n5 has-anim anim-delay-2">
            <img
              loading="lazy"
              className="img-fluid"
              src="assets/images/blogs/blog-details/00.jpg"
              alt="blog thumb"
            />
          </div>
        </div>
      </div>

      <div className="section bg-white">
        <div className="container">
          <div className="row justify-content-center pt-5">
            <div className="col-lg-9">
              <div className="pr-0 pr-lg-5">
                <div className="content mb-5 pb-3">
                  <p className="lead">
                    Its always inspiring to see our friends, from the industry,
                    creating and making cool stuff to inspire others. Its a
                    reward that we will never take for granted and we will will
                    always be supporting.
                  </p>
                  <p>
                    Product of Branding aims to show designers how to get the
                    information you need to understand the project and make it
                    the best it can be; as well as providing those on the
                    client-side with advice on how to get the best out of the
                    creatives youre working with.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default BlogPost;
