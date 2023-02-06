import '../styles/main.css';
import Head from 'next/head';
import { GoogleAnalytics } from 'nextjs-google-analytics';

import { DefaultSeo } from 'next-seo';
import NProgress from 'nprogress';
import Router from 'next/router';
import 'jquery/dist/jquery';

import GlobalStyles from '../styles/styles';
import config from '../utils/config';
import nextSeo from '../utils/seo.json';

Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Head>
        <title>{config.siteName}</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=yes"
        />

        <meta name="theme-color" content={config.theme_color} />
        <meta
          name="apple-mobile-web-app-status-bar"
          content={config.theme_color}
        />

        <script src="/plugins/jquery.min.js" />
        <script src="/plugins/isotope.min.js" />
        <script src="/plugins/script.min.js" />
      </Head>
      <DefaultSeo {...nextSeo} />
      <GoogleAnalytics
        trackPageViews
        id={process.env.NEXT_PUBLIC_ENV_SITE_NAME}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
