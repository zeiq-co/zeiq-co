import React from 'react';
import Link from 'gatsby-link';

import WorkItem from '../components/WorkItem';

import styled from 'styled-components';

const Contianer = styled.div`
  @media screen and (max-width: 600px) {
    position: relative !important;
    top: 0px;
    left: 0%;
  }
  `;

class WorkList extends React.Component {
  componentDidMount() {
    var $grid = jQuery('.project-listing .grid').masonry({
      itemSelector: '.grid-item',
      columnWidth: '.grid-sizer',
      gutter: '.gutter-sizer',
      percentPosition: true,
      transitionDuration: '0.3s',
    });

    $grid.imagesLoaded().progress(function() {
      $grid.masonry('layout');
    });
  }

  render() {
    const { introVisible, workList, buttonVisible } = this.props;
    let activeItemIndex = 0;
    // console.log('workList', workList);

    return (
      <div className="project-listing col-12">
        <div className="grid clearfix">
          {introVisible && (
            <Contianer className="grid-item grid-item-wide project-thumb welcome-message">
              <div className="inner">
                <h2>
                  Hi! We're <span className="text-color">ZEIQ</span>. A full
                  service digital agency which helps your brand stand out. Checkout
                  our work.
                </h2>
                <Link to="/services/" className="button big">
                  All that we do&hellip;
                </Link>
              </div>
            </Contianer>
          )}
          {workList.map(({ node }, index) => {
            activeItemIndex++;
            let size = '';
            if (activeItemIndex === 3) {
              size = 'large';
              activeItemIndex = 0;
            }
            return <WorkItem key={node.id} size={size} item={node} />;
          })}
          <div className="grid-sizer" />
          <div className="gutter-sizer" />
        </div>
        {buttonVisible ? (
          <p className="extra-margin-top text-center">
            <Link to="/work/" className="button white big has-arrow">
              View all our work
            </Link>
          </p>
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default WorkList;
