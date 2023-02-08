import { getServerSideSitemap } from 'next-sitemap';
import path from 'path';
import { getPathsFromDir } from '../../utils/helpers';
import config from '../../utils/config';

const remoteUrl = `${config.siteUrl}`;
const siteUrl = new URL(remoteUrl).origin;
const filesDir = path.join(process.cwd(), 'content/work');
const filesDir2 = path.join(process.cwd(), 'content/products');

const lastMod = new Date().toISOString();

const allPaths1 = getPathsFromDir(filesDir) || [];
const allPaths2 = getPathsFromDir(filesDir2) || [];

const mergedArray = [...allPaths1, ...allPaths2];

const paths = mergedArray.map((item) => ({
  loc: `${siteUrl}/work/${item?.params?.slug}`,
  lastmod: lastMod,
}));

export const getServerSideProps = async ({ res }) =>
  getServerSideSitemap({ res }, paths);

export default function Sitemap() {}
