import React from 'react';
import { Link } from 'gatsby';

const CallAction = () => {
  return (
    <div className="call-to-action-wrapper call-to-action text-white-wrapper  ptb--120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="inner text-center">
              <span>READY TO DO THIS</span>
              <h2>Lets get to work</h2>
              <Link className="rn-button-style--2" to="/contact">
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CallAction;
