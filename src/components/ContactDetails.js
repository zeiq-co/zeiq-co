import React from 'react';
import Link from 'gatsby-link';

const ContactDetails = () => (
  <div className="col-md-6">
    <div
      className="grey-box"
      style={{
        background: 'url(tmp/sample-square.png) center bottom no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div id="address-selector" className="overlay eq-height">
        <div id="address-NLD" className="address-container active">
          <div className="address-details">
            <h1>
              We’re @{' '}
              <a href="#" className="change-address">
                NLD<i className="saulticon-chevron-down" />
                <span className="address-list">
                  <span
                    className="address-code selected"
                    data-address-code="NLD"
                  >
                    NLD
                  </span>
                  <span className="address-code" data-address-code="BEL">
                    BEL
                  </span>
                </span>
              </a>
            </h1>
            <ul className="ul-custom-bullet">
              <li>
                <i className="saulticon-map" /> Jan van Galenstraat 107<br />{' '}
                1056 BK Amsterdam<br /> Netherlands
              </li>
              <li>
                <i className="saulticon-call" /> +31 23 456 7890<br /> +31 09
                876 5432
              </li>
              <li>
                <i className="saulticon-mail" /> hello@sault.com<br />{' '}
                nld@sault.com
              </li>
            </ul>
          </div>
          <div className="map">
            <iframe
              style={{
                width: 600,
                height: 450,
              }}
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDf9LkuZPX10XENbqvaHQUi_30VHwCbmkI&q=52.3746634,4.8592912&zoom=15&maptype=roadmap"
              allowFullScreen
            />
          </div>
        </div>
        <div id="address-BEL" className="address-container">
          <div className="address-details">
            <h1>
              We’re @{' '}
              <a href="#" className="change-address">
                BEL<i className="saulticon-chevron-down" />
                <span className="address-list">
                  <span className="address-code" data-address-code="NLD">
                    NLD
                  </span>
                  <span
                    className="address-code selected"
                    data-address-code="BEL"
                  >
                    BEL
                  </span>
                </span>
              </a>
            </h1>
            <ul className="ul-custom-bullet">
              <li>
                <i className="saulticon-map" /> Sint-Jozefstraat 24<br /> 2018
                Antwerpen<br /> Belgium
              </li>
              <li>
                <i className="saulticon-call" /> +32 17 789 0456<br /> +32 17
                876 5432
              </li>
              <li>
                <i className="saulticon-mail" /> hello@sault.com<br />{' '}
                bel@sault.com
              </li>
            </ul>
          </div>
          <div className="map">
            <iframe
              style={{
                width: 600,
                height: 450,
              }}
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDf9LkuZPX10XENbqvaHQUi_30VHwCbmkI&q=52.3746634,4.8592912&zoom=15&maptype=roadmap"
              allowFullScreen=""
            />
          </div>
        </div>
        <a href="#" className="bottom-button">
          <span className="show-layer">
            Locate on map <i className="saulticon-arrow-up" />
          </span>
          <span className="hide-layer">
            Close map <i className="saulticon-arrow-down" />
          </span>
        </a>
      </div>
    </div>
  </div>
);

export default ContactDetails;
