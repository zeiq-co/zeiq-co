import fs from 'fs';
import matter from 'gray-matter';
import { NextSeo } from 'next-seo';

import config from '../utils/config';
import Layout from '../components/Layout';
import PageHero from '../components/global/PageHero';
import PostItem from '../components/blog/PostItem';

const bgColors = ['#c11c3b', '#139090', '#d59801', '#296e4a'];

function BlogPage({ posts }) {
  console.log('posts', posts);

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

export async function getStaticProps() {
  const directory = 'content/posts';
  const files = fs.readdirSync(directory);

  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`${directory}/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
