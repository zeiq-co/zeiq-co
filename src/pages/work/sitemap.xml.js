import { getServerSideSitemap } from 'next-sitemap';
import { getPathsFromDir } from '../../utils/helpers';
import config from '../../utils/config';

const remoteUrl = `${config.siteUrl}`;

const fistDirectory = 'content/work';
const siteUrl = new URL(remoteUrl);

export const getServerSideProps = async (ctx) => {
  const allPaths = getPathsFromDir(fistDirectory);
  const paths = allPaths.map((item) => ({
    loc: `https://${siteUrl}work/${item?.params?.slug}`,
    lastmod: new Date().toISOString(),
  }));

  return getServerSideSitemap(ctx, paths);
};

export default function Sitemap() {}
