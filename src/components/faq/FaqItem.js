import { useState } from 'react';

const FaqItem = ({ data }) => {
  const [active, setActive] = useState(false);
  return (
    <div>
      <div className="accordion">
        <div className="card has-anim fade">
          <div className="card-header border-bottom-0 p-0" id="q3">
            <a
              role="menuitem"
              tabIndex="0"
              aria-expanded={active ? 'true' : 'false'}
              onClick={() => setActive(!active)}
              className="d-flex justify-content-between font-w-600 my-1"
              data-toggle="collapse"
              aria-controls="faq3"
            >
              {data.title}
            </a>
          </div>
          <div className={`collapse  ${active ? 'show' : ''}`}>
            <div className="card-body content">{data.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
