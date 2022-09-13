import { getServerSideSitemap } from 'next-sitemap';
import { getPathsFromDir } from '../../utils/helpers';
import config from '../../utils/config';

const remoteUrl = `${config.siteUrl}`;
const localUrl = `http://localhost:3000`;

const siteUrl = new URL(remoteUrl || localUrl);
const filesDir = 'content/pages';

export const getServerSideProps = async (ctx) => {
  const allPaths = getPathsFromDir(filesDir);
  const paths =
    allPaths &&
    allPaths.map((item) => ({
      loc: `https://${siteUrl}page/${item?.params?.slug}`,
      lastmod: new Date().toISOString(),
    }));

  return getServerSideSitemap(ctx, paths);
};

export default function Sitemap() {}
