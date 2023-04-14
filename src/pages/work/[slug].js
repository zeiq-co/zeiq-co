import { NextSeo } from 'next-seo';
import Image from 'next/image';
import md from 'markdown-it';
import upperFirst from 'lodash/upperFirst';
import styled from 'styled-components';
import fs from 'fs';
import AnchorLink from '../../components/elements/AnchorLink';

import { getPathsFromDir, getSingleMdx } from '../../utils/helpers';
import config from '../../utils/config';
import Layout from '../../components/Layout';
import PostHero from '../../components/blog/PostHero';
import WorkProcess from '../../components/home/WorkProcess';
import Testimonials from '../../components/home/Testimonials';

const Wrapper = styled.section`
  img {
    max-width: 60%;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  .shadow-medium {
    box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.5), 0 0 20px 5px rgba(255, 255, 255, 0.3), 0 0 30px 10px rgba(255, 255, 255, 0.2);
    !important;
  }
`;

const Work = ({ data }) => {
  const image = data.heroImage ? data.heroImage : data?.featuredImage || '';
  return (
    <Layout>
      <NextSeo
        title={`Zeiq ${data.title}`}
        description={data.seoDescription || data.details}
        openGraph={{
          title: data.title,
          description: data?.seoDescription
            ? data?.seoDescription
            : data.details,
          images: [
            {
              url: `${config.siteUrl}/${
                data.featuredImage ? data.featuredImage : ''
              }`,
              width: 800,
              height: 600,
              alt: data.alt || data.title,
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
      <PostHero post={data} />
      <Wrapper className="section pb-0">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-n5">
              {image && (
                <div className="img-fluid position-relative">
                  <Image
                    src={image}
                    alt={data.title}
                    height={1006}
                    width={1218}
                    layout="responsive"
                    objectFit="contain"
                    loading="lazy"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="section bg-white">
          <div className="container">
            <div className="row pt-5">
              <div className="col-lg-4 mt-1">
                <div className="mb-5">
                  <h3 className="h5 mb-2 text-dark">{data.title}</h3>
                  <p className="mb-3">{data.info}</p>
                  <div className="mb-3">
                    {data.websiteUrl && (
                      <AnchorLink
                        stackName="website"
                        stackUrl={data.websiteUrl}
                      />
                    )}
                  </div>
                  <div className="mb-3">
                    {data.androidAppUrl && (
                      <AnchorLink
                        stackName="Play store"
                        stackUrl={data.androidAppUrl}
                      />
                    )}
                  </div>
                  <div className="mb-3">
                    {data.iosAppUrl && (
                      <AnchorLink
                        stackName="App store"
                        stackUrl={data.iosAppUrl}
                      />
                    )}
                  </div>
                </div>
                <div className="mb-5">
                  <h3 className="h5 mb-2 text-dark">Services we provided</h3>
                  <ul className="list-unstyled">
                    <li>{upperFirst(data.projectType)}</li>
                  </ul>
                </div>
                <div className="mb-5">
                  <h3 className="h5 mb-2 text-dark">Tech Stack built upon</h3>
                  <ul className="list-unstyled">
                    <li>{data.techStack}</li>
                  </ul>
                </div>
                <div className="mb-5">
                  <h3 className="h5 mb-2 text-dark">Category</h3>
                  <p>{upperFirst(data.category)}</p>
                </div>

                <div className="mb-5">
                  <h3 className="h5 mb-2 text-dark">Tags</h3>
                  <p>{data.tags}</p>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="pl-0 pl-lg-5">
                  <diiv className="mb-5">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: md().render(data.content),
                      }}
                    />
                  </diiv>
                </div>
              </div>
            </div>
          </div>
        </div>
        <WorkProcess />
        <Testimonials category="home" />
      </Wrapper>
    </Layout>
  );
};
export default Work;

const filesDir = 'content/work';
const filesDir2 = 'content/products';

export async function getStaticPaths() {
  // Retrieve all our slugs
  const paths = getPathsFromDir(filesDir);
  const paths2 = getPathsFromDir(filesDir2);

  return {
    paths: [...paths, ...paths2],
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  let filePath = `${filesDir}/${slug}.mdx`;
  if (!fs.existsSync(filePath)) {
    filePath = `${filesDir2}/${slug}.mdx`;
  }
  const { data: frontmatter, content } = getSingleMdx(filePath);

  return {
    props: {
      data: { content, slug, ...frontmatter },
    },
    revalidate: 3600, // in seconds (1 hour)
  };
}
