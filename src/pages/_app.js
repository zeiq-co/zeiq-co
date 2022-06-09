import '../styles/main.css';
import Head from 'next/head';
import { ZeiqProvider } from '@zeiq/web';
import { StoreProvider } from 'easy-peasy';
import { DefaultSeo } from 'next-seo';
// eslint-disable-next-line import/no-extraneous-dependencies
import NProgress from 'nprogress';
import Router from 'next/router';
import { SessionProvider } from 'next-auth/react';

import withReduxStore from '../utils/with-redux-store';
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

function MyApp({ Component, pageProps, reduxStore }) {
  return (
    <>
      <GlobalStyles />
      <Head>
        <title>{config.siteName}</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=0"
        />
        <meta name="theme-color" content={config.theme_color} />
        <meta
          name="apple-mobile-web-app-status-bar"
          content={config.theme_color}
        />
      </Head>
      <DefaultSeo {...nextSeo} />

      <ZeiqProvider>
        <StoreProvider store={reduxStore}>
          <SessionProvider session={pageProps ? pageProps.session : undefined}>
            <Component {...pageProps} />
          </SessionProvider>
        </StoreProvider>
      </ZeiqProvider>
      <>
        <script src="/plugins/jquery.min.js" />
        <script src="/plugins/bootstrap.bundle.min.js" />
        <script src="/plugins/swiper-bundle.min.js" />
        <script src="/plugins/isotope.min.js" />

        <script async src="/plugins/scripts.js" />
      </>
    </>
  );
}

export default withReduxStore(MyApp);
