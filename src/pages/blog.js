import { NextSeo } from 'next-seo';
import { orderBy } from 'lodash';

import { getMdxFromDir } from '../utils/helpers';
import config from '../utils/config';
import Layout from '../components/Layout';
import PageHero from '../components/global/PageHero';
import PostItem from '../components/blog/PostItem';

function BlogPage({ posts }) {
  return (
    <Layout>
      <NextSeo
        title={config.siteName}
        description="A short description goes here."
      />
      <PageHero />
      <div className="section pt-n30 bg-white">
        <div className="container">
          <div className="row">
            {posts.map((item) => (
              <PostItem key={item.slug} post={item} />
            ))}
            <div className="col-lg-12">
              <div className="text-center mt-5 pt-4 has-anim">
                <a
                  href="blogs-3-col.html"
                  className="btn btn-black"
                  data-text="Older Posts"
                >
                  <span>Older Posts</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default BlogPage;

export async function getStaticProps() {
  const result = getMdxFromDir('content/posts');
  const orderedData = orderBy(result, ['date'], ['desc']);

  return {
    props: {
      posts: orderedData,
    },
  };
}
