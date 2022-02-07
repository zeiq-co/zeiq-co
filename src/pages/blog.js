import { NextSeo } from 'next-seo';

import config from '../utils/config';
import Layout from '../components/Layout';
import BlogHero from '../components/blog/BlogHero';
import PostItem from '../components/blog/PostItem';

const bgColors = ['#c11c3b', '#139090', '#d59801', '#296e4a'];

function BlogPage() {
  return (
    <Layout>
      <NextSeo
        title={config.siteName}
        description="A short description goes here."
      />
      <BlogHero />
      <div className="section pt-n30 bg-white">
        <div className="container">
          <div className="row">
            <PostItem bgColor={bgColors[0]} />
            <PostItem bgColor={bgColors[1]} />
            <PostItem bgColor={bgColors[2]} />
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
