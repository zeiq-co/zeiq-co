import Head from 'next/head';
import { ZeiqProvider } from '@zeiq/web';
import { StoreProvider } from 'easy-peasy';
import { DefaultSeo } from 'next-seo';
// eslint-disable-next-line import/no-extraneous-dependencies
import NProgress from 'nprogress';
import Router from 'next/router';
import { SessionProvider } from 'next-auth/react';

import withReduxStore from '../utils/with-redux-store';
import GlobalStyles from '../utils/styles';
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
        <script async src="/scripts.js" />
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
    </>
  );
}

export default withReduxStore(MyApp);
