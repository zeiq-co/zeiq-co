import { getServerSideSitemap } from 'next-sitemap';
import { getPathsFromDir } from '../../utils/helpers';
import config from '../../utils/config';

const remoteUrl = `${config.siteUrl}`;
const localUrl = `http://localhost:3000`;

const fistDirectory = 'content/work';
const siteUrl = new URL(remoteUrl || localUrl);

export const getServerSideProps = async (ctx) => {
  const allPaths = getPathsFromDir(fistDirectory);
  const paths = allPaths.map((item) => ({
    loc: `https://${siteUrl}work/${item?.params?.slug}`,
    lastmod: new Date().toISOString(),
  }));

  return getServerSideSitemap(ctx, paths);
};

export default function Sitemap() {}
