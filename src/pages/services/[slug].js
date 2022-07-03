import { NextSeo } from 'next-seo';
import Image from 'next/image';
import md from 'markdown-it';
import { orderBy, filter } from 'lodash';

import {
  getPathsFromDir,
  getSingleMdx,
  getMdxFromDir,
} from '../../utils/helpers';
import config from '../../utils/config';
import Layout from '../../components/Layout';
import PostHero from '../../components/blog/PostHero';
import RelatedServices from '../../components/services/RelatedServices';
import WorkProcess from '../../components/home/WorkProcess';

const Service = ({ data, childServices }) => (
  <Layout>
    <NextSeo
      title={`${data.title}`}
      description={data.featuredOneDetails}
      canonical={`${config.siteUrl}/${data.slug}`}
      openGraph={{
        url: `${config.siteUrl}${data.slug}`,
        title: data.title,
        description: data?.featuredOneDetails
          ? data?.featuredOneDetails
          : data.title,
        images: [
          {
            url: data.featuredImage ? data.featuredImage : '',
            width: 800,
            height: 600,
            alt: data.title,
            type: 'image/jpeg',
          },
        ],
        site_name: 'Zeiq',
      }}
    />
    <PostHero post={data} />
    <section className="section pb-0">
      <div className="container">
        <div className="row">
          <div className="col-12 mb-n5 has-anim anim-delay-2">
            <Image
              src={data.featuredImage}
              alt={data.title}
              className="img-fluid"
              height={600}
              width={1400}
              objectFit="contain"
              priority
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
    <RelatedServices services={childServices} />
    <WorkProcess />
  </Layout>
);

export default Service;

const filesDir = 'content/services';

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
  let childResult = getMdxFromDir(filesDir);
  childResult = filter(childResult, (o) => o.parent === slug);
  childResult = orderBy(childResult, ['listingOrder'], ['asc']);
  // console.log('childServices', childResult);

  return {
    props: {
      data: { content, slug, ...frontmatter },
      childServices: childResult,
    },
    revalidate: 3600, // in seconds (1 hour)
  };
}
