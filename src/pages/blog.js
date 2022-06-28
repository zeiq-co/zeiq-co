import { NextSeo } from 'next-seo';
import { orderBy, random } from 'lodash';

import { getMdxFromDir } from '../utils/helpers';
import config from '../utils/config';
import Layout from '../components/Layout';
import PageHero from '../components/global/PageHero';
import PostItem from '../components/blog/PostItem';

const bgColors = ['#c11c3b', '#139090', '#d59801', '#296e4a'];

function BlogPage({ posts }) {
  return (
    <Layout>
      <NextSeo
        title={`${config.siteName} News : Software, Website, Mobile App, Ecommerce, Digital Marketing`}
        description={`${config.siteName} Blog, Get Updated on latest news of mobile applications Development, software and web development services, ecommerce Solutions.}`}
      />
      <PageHero title="News & Updates" subTitle="Latest news" />
      <div className="section pt-n30 bg-white">
        <div className="container">
          <div className="row">
            {posts.map((item) => {
              const randomId = random(0, bgColors.length - 1);
              const bgColor = bgColors[randomId];
              return <PostItem key={item.slug} post={item} bgColor={bgColor} />;
            })}
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
