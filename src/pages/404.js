import React from 'react';

const NotFoundPage = () => (
  <main id="content" className="white-background">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="row eq-height-container">
            <div className="col-md-12">
              <div className="grey-box">
                <div className="overlay eq-height">
                  <h1 className="no-bottom">Error 404</h1>
                  <h2>Page not found</h2>
                  <p>
                    Apologies, but no results were found for the requested page.
                    Perhaps searching will help find a related item or
                  </p>
                  <p>
                    <a href="index.html" className="button has-arrow">
                      Go Home
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grey-box text-center">
            <div className="overlay">
              <h2>Connect with us</h2>
              <p>
                We’re as accessible as your good neighbour. So much so that you
                can hand us over your keys too.
              </p>
              <p>
                <a href="contact.html" className="button dark has-arrow">
                  Drop a message
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
);

export default NotFoundPage;
