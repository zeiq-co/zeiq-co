import { NextSeo } from 'next-seo';
import Image from 'next/image';
import md from 'markdown-it';

import { getPathsFromDir, getSingleMdx } from '../../utils/helpers';
import config from '../../utils/config';
import Layout from '../../components/Layout';

const SingleTechnology = ({ data }) => (
  <Layout>
    <NextSeo
      title={`${data.title}`}
      description={data.seoDescription}
      openGraph={{
        url: `${config.siteUrl}/technology/${data.slug}`,
        title: data.title,
        description: data?.seoDescription
          ? data?.seoDescription
          : data.siteTitle,
        images: [
          {
            url: data.featuredImage ? data.featuredImage : '',
            width: 800,
            height: 600,
            alt: data.title,
            type: 'image/jpeg',
          },
        ],
      }}
      additionalMetaTags={[
        {
          name: 'keywords',
          content: data?.keywords,
        },
      ]}
    />
    <section className="section ">
      <div className="container">
        <div className="row">
          <div className="col-12 has-anim anim-delay-2   pb-5">
            <Image
              src={data.featuredImage}
              alt={data.title}
              width={300}
              height={100}
              layout="responsive"
              objectFit="contain"
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
                      __html: md().render(data.content),
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

export default SingleTechnology;

const filesDir = 'content/technology';
export async function getStaticPaths() {
  // Retrieve all our slugs
  const paths = getPathsFromDir(filesDir);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const { data: frontmatter, content } = getSingleMdx(
    `${filesDir}/${slug}.mdx`,
  );

  return {
    props: {
      data: { content, slug, ...frontmatter },
    },
    revalidate: 3600, // in seconds (1 hour)
  };
}
