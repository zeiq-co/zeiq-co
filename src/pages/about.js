import { NextSeo } from 'next-seo';
import Layout from '../components/Layout';
import PageHero from '../components/global/PageHero';
import AboutInfo from '../components/about/AboutInfo';
import Testimonials from '../components/home/Testimonials';
import Technologies from '../components/home/Technologies';

const AboutUs = () => (
  <Layout>
    <NextSeo
      title="About Us"
      description="Zeiq is a leading software development company in UK that offers offshore software development, web development and web designing services."
    />
    <PageHero title="Who we are" subTitle="We are agents of change" />
    <AboutInfo />
    <section className="section bg-white">
      <div className="container">
        <p>
          Creative. We are a powerful mix of technologists, planners, auditors,
          strategists, marketers, creative thinkers, designers and developers.
          Collaborating with each other, for you to turn your idea into a
          reality.We are agents of change. We exist to provide businesses with
          ‘that’ chance to reimagine and reinvent their digital world. We are
          experienced in working with SME and large enterprises. We specialize
          in helping start-ups become a brand through their technology, with an
          aim to help challenge the market, driving innovation and accelerating
          business performance.
        </p>
        <h2 className="text-dark font-weight-500 mt-5">About Us</h2>
        <p>
          Zeiq is a digital development company that focuses on uplifting your
          business and services. We started out as a small company in 2017 by
          serving clients locally. However quickly expanded our reach by working
          with some great European enterprises across many industries. Our
          Commitment Zeiq is fully committed to boosting our clients and their
          businesses to superior standards. We keep pace with the evolution of
          technology and believe in social digital community. Our Philosophy
          Zeiq aims to understands you, your business, your culture. We ensure
          our strategies are based solely on solving the problems faced by
          business’s needs. We are constantly on the lookout for newer and
          innovative ways to introduce your brand to audiences online.
        </p>
      </div>
    </section>
    <Technologies />
    <Testimonials />
  </Layout>
);

export default AboutUs;
