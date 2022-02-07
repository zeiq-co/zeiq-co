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
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <DefaultSeo
        titleTemplate={`%s | ${config.siteName}`}
        description="Free Images Gallery Builder"
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: config.siteUrl,
          site_name: config.siteName,
        }}
        twitter={{
          handle: '@galllery',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
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
