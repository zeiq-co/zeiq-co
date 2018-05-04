import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import AboutHero from '../components/AboutHero';

import SingleWorkButton from '../components/SingleWorkButton';

import BlockQuote from '../components/BlockQuote';
import BrandGallery from '../components/BrandGallery';
import CallToAction from '../components/CallToAction';

export default class SingleWork extends React.Component {
  render() {
    // console.log(brand);
    return (
      <div>
        <Helmet title="About | Zeiq" />
        <main id="content" className="white-background">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div>
                  <div className="post-featured-image">
                    <img src="tmp/zeiq-logo.svg" alt="featured" />
                  </div>
                  <div className="page-title-container">
                    <h2>work-list</h2>
                    <p className="subtitle">a,fnlkadkalsdks</p>
                  </div>
                  <div className="col">
                    <h4>Full column</h4>
                    <p>
                      He slid back into his former position. "Getting up early
                      all the time", he thought, "it makes you stupid. You've
                      got to get enough sleep. However hard he threw himself
                      onto his right, he always rolled back to where he was. He
                      must have tried it a hundred times, shut his eyes so that
                      he wouldn't have to look at the floundering legs, and only
                      stopped when he began to feel a mild, dull pain there that
                      he had never felt before.
                    </p>
                  </div>
                  <div className="col">
                    <h4>Full column</h4>
                    <p>
                      He slid back into his former position. "Getting up early
                      all the time", he thought, "it makes you stupid. You've
                      got to get enough sleep. However hard he threw himself
                      onto his right, he always rolled back to where he was. He
                      must have tried it a hundred times, shut his eyes so that
                      he wouldn't have to look at the floundering legs, and only
                      stopped when he began to feel a mild, dull pain there that
                      he had never felt before.
                    </p>
                  </div>
                </div>
                <SingleWorkButton />
                <BlockQuote />
                <CallToAction />
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
