import React from 'react';
import Link from 'gatsby-link';

class ContactDetails extends React.Component {
  render() {
    const { contact } = this.props;
    return (
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
                    ZEIQ
                  </a>
                </h1>
                <ul className="ul-custom-bullet">
                  <li>
                    <i className="saulticon-map" /> {contact.address}
                  </li>
                  <li>
                    <i className="saulticon-call" /> {contact.telephone}
                  </li>
                  <li>
                    <i className="saulticon-mail" /> {contact.email}
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
            </div>{' '}
            */}
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
  }
}

export default ContactDetails;
