import React, { useState, useEffect } from 'react';
import { NextSeo } from 'next-seo';
import { orderBy, random } from 'lodash';

import { getMdxFromDir } from '../utils/helpers';
import config from '../utils/config';
import Layout from '../components/Layout';
import PageHero from '../components/global/PageHero';
import PostItem from '../components/blog/PostItem';
import seoData from '../../content/seo/blogSeo.yaml';

const bgColors = ['#c11c3b', '#139090', '#d59801', '#296e4a'];

function BlogPage({ posts }) {
  // array of all articles
  // state for the loading item
  const [list, setList] = useState([...posts.slice(0, 9)]);

  // state to trigger oad more
  const [articleLoadMore, setLoadMore] = useState(false);

  // state of whether there is more to load
  const [hasMore, setHasMore] = useState(posts.length > 9);

  // load more button click
  const handleLoadMore = () => {
    setLoadMore(true);
  };

  // handle loading more articles
  useEffect(() => {
    if (articleLoadMore && hasMore) {
      const currentLength = list.length;
      const isMore = currentLength < posts.length;
      const nextResults = isMore
        ? posts.slice(currentLength, currentLength + 9)
        : [];
      setList([...list, ...nextResults]);
      setLoadMore(false);
    }
  }, [articleLoadMore, hasMore]);

  useEffect(() => {
    const isMore = list.length < posts.length;
    setHasMore(isMore);
  }, [list]);

  return (
    <Layout>
      <NextSeo
        title={seoData.seoTitle}
        description={seoData.seoDescription}
        openGraph={{
          url: `${config.siteUrl}/blog`,
          title: `${`${config.siteName} ${seoData.seoTitle}`}`,
          description: `${`${config.siteName} ${seoData.seoDescription}`}`,
          images: [
            {
              url:
                `${config.siteUrl}${seoData?.seoImage}` ||
                `${config.siteUrl}/images/blog-about-blogs.jpg`,
              width: 800,
              height: 600,
              alt: seoData.imageAlt,
              type: 'image/jpeg',
            },
          ],
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: seoData?.keywords,
          },
        ]}
      />
      <PageHero
        title="Our Blogs"
        subTitle="A home for inspiring stories on business and technology"
      />
      <div className="section pt-n30 bg-white">
        <div className="container">
          <div className="row">
            {list.map((item) => {
              const randomId = random(0, bgColors.length - 1);
              const bgColor = bgColors[randomId];
              return <PostItem key={item.slug} post={item} bgColor={bgColor} />;
            })}
            <div className="col-lg-12">
              <div className="text-center mt-5 pt-4">
                {hasMore ? (
                  <button
                    type="button"
                    data-text="Load More"
                    onClick={handleLoadMore}
                    className="btn btn-black"
                  >
                    <span>Load More</span>
                  </button>
                ) : null}
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
    revalidate: 3600, // in seconds (1 hour)
  };
}
