import { NextSeo } from 'next-seo';
import config from '../utils/config';

import contactData from '../../content/general/contact.yaml';
import Layout from '../components/Layout';
import ContactInfo from '../components/contact/ContactInfo';

function ContactPage() {
  return (
    <Layout>
      <NextSeo
        title="Contact Zeiq for Software & App Services"
        description="Contact Zeiq for web design, software development, mobile app development, application development & eCommerce solutions. Call at +44-7747810130 Email at sales@zeiq.co."
        openGraph={{
          title: `Contact Zeiq for Software & App Services`,
          description:
            'Contact Zeiq for web design, software development, mobile app development, application development & eCommerce solutions. Call at +44-7747810130 Email at sales@zeiq.co.',
          images: [
            {
              url: `${config.siteUrl}/images/about.png`,
              width: 500,
              height: 500,
              alt: 'Zeiq Contact us',
              type: 'image/jpeg',
            },
          ],
        }}
      />
      <ContactInfo contactData={contactData} />
    </Layout>
  );
}

export default ContactPage;
