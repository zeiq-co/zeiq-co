import { NextSeo } from 'next-seo';
import config from '../utils/config';

import contactData from '../../content/general/contact.yaml';
import seoData from '../../content/seo/contactSeo.yaml';

import Layout from '../components/Layout';
import ContactInfo from '../components/contact/ContactInfo';

function ContactPage() {
  return (
    <Layout>
      <NextSeo
        title={seoData?.seoTitle}
        description={seoData?.seoTitle}
        openGraph={{
          title: `${seoData?.seoTitle}`,
          description: seoData?.seoTitle,
          images: [
            {
              url:
                `${config.siteUrl}${seoData?.seoImage}` ||
                `${config.siteUrl}/images/about.png`,
              width: 500,
              height: 500,
              alt: seoData?.imageAlt,
              type: 'image/jpeg',
            },
          ],
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: seoData?.keywords,
          },
        ]}
      />
      <ContactInfo contactData={contactData} />
    </Layout>
  );
}

export default ContactPage;
