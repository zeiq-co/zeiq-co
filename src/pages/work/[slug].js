import { NextSeo } from 'next-seo';
import Image from 'next/image';
import md from 'markdown-it';
import { upperFirst } from 'lodash';
import styled from 'styled-components';
import fs from 'fs';

import { getPathsFromDir, getSingleMdx } from '../../utils/helpers';
import config from '../../utils/config';
import Layout from '../../components/Layout';
import PostHero from '../../components/blog/PostHero';
import WorkProcess from '../../components/home/WorkProcess';
import Testimonials from '../../components/home/Testimonials';

const Content = styled.div`
  img {
    max-width: 60%;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

const Work = ({ data }) => (
  <Layout>
    <NextSeo
      title={`${data.title} | ${config.siteTitle}`}
      description="A short description goes here."
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
            />
          </div>
        </div>
      </div>

      <div className="section bg-white">
        <div className="container">
          <div className="row pt-5">
            <div className="col-lg-4 mt-1">
              <div className="mb-5 has-anim fade">
                <h3 className="h5 mb-2 text-dark">{data.title}</h3>
                <p className="mb-3">{data.info}</p>
                <a
                  className="line-link text-dark font-weight-500"
                  href={data.websiteUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit website{' '}
                  <svg
                    className="arrow-up-right"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </a>
              </div>
              <div className="mb-5 has-anim fade anim-delay-3">
                <h3 className="h5 mb-2 text-dark">Services we provided</h3>
                <ul className="list-unstyled">
                  <li>{upperFirst(data.projectType)}</li>
                </ul>
              </div>
              <div className="mb-5 has-anim fade anim-delay-3">
                <h3 className="h5 mb-2 text-dark">Tech Stack built upon</h3>
                <ul className="list-unstyled">
                  <li>{data.techStack}</li>
                </ul>
              </div>
              <div className="mb-5 has-anim fade anim-delay-1">
                <h3 className="h5 mb-2 text-dark">Category</h3>
                <p>{upperFirst(data.category)}</p>
              </div>

              <div className="mb-5 has-anim fade anim-delay-2">
                <h3 className="h5 mb-2 text-dark">Tags</h3>
                <p>{data.tags}</p>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="pl-0 pl-lg-5">
                <Content className="mb-5">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: md().render(data.content),
                    }}
                  />
                </Content>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WorkProcess />
      <Testimonials />
    </section>
  </Layout>
);

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
  };
}