import { NextSeo } from 'next-seo';
import Image from 'next/image';
import md from 'markdown-it';

import { getPathsFromDir, getSingleMdx } from '../../utils/helpers';
import config from '../../utils/config';
import Layout from '../../components/Layout';
import PostHero from '../../components/blog/PostHero';

const BlogPost = ({ page }) => {
  if (!page) return null;
  return (
    <Layout>
      <NextSeo
        title={`${page.title}`}
        description={page.seoDescription}
        openGraph={{
          url: `${config.siteUrl}/page/${page.slug}`,
          title: page.title,
          description: page?.seoDescription
            ? page?.seoDescription
            : page.siteTitle,
          images: [
            {
              url: `${config.siteUrl}/${
                page.featuredImage ? page.featuredImage : ''
              }`,
              width: 800,
              height: 600,
              alt: page.title,
              type: 'image/jpeg',
            },
          ],
          site_name: 'Zeiq',
        }}
      />
      <PostHero post={page} />
      <section className="section pb-0">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-n5 has-anim anim-delay-2">
              <Image
                src={page.featuredImage}
                alt={page.title}
                className="img-fluid"
                height={800}
                width={1400}
                objectFit="cover"
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
                    <div
                      dangerouslySetInnerHTML={{
                        __html: md().render(page.content),
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;

const filesDir = 'content/pages';

export async function getStaticPaths() {
  // Retrieve all our slugs
  const paths = getPathsFromDir(filesDir);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  if (!slug) return { notFound: true };

  const { data: frontmatter, content } = getSingleMdx(
    `${filesDir}/${slug}.mdx`,
  );
  return {
    props: {
      page: { content, slug, ...frontmatter },
    },
    revalidate: 3600, // in seconds (1 hour)
  };
}
