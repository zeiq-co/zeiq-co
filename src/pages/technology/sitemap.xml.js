import { getServerSideSitemap } from 'next-sitemap';
import path from 'path';
import { getPathsFromDir } from '../../utils/helpers';
import config from '../../utils/config';

const remoteUrl = `${config.siteUrl}`;
const siteUrl = new URL(remoteUrl).origin;
const filesDir = path.join(process.cwd(), 'content/technology');

const lastMod = new Date().toISOString();

const allPaths = getPathsFromDir(filesDir) || [];
const paths = allPaths.map((item) => ({
  loc: `${siteUrl}/technology/${item?.params?.slug}`,
  lastmod: lastMod,
}));

export const getServerSideProps = async ({ res }) =>
  getServerSideSitemap({ res }, paths);

export default function Sitemap() {}
