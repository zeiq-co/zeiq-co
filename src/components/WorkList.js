import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

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
    const { introVisible } = this.props;
    return (
      <div className="project-listing col-12">
        <div className="grid clearfix">
          {introVisible && (
            <div className="grid-item grid-item-wide project-thumb welcome-message">
              <div className="inner">
                <h1>
                  Hi! We're <span className="text-color">SAULT</span>. A full
                  service digital agency who helps brands stand out. Checkout
                  our work.
                </h1>
                <Link to="/services">
                  <a className="button big">All that we do&hellip;</a>
                </Link>
              </div>
            </div>
          )}
          <div className="grid-item project-thumb">
            <a href="project.html">
              <img
                src="tmp/sample-square.png"
                width="900"
                height="900"
                alt=""
              />
              <span className="project-thumb-details">
                <span className="title">BON</span>
                <span className="description">
                  Create intrigue around aesthetically pleasing products
                </span>
              </span>
              <i className="saulticon-arrow-forward" />
            </a>
          </div>
          <div className="grid-item project-thumb">
            <a href="project.html">
              <img
                src="tmp/sample-square.png"
                width="900"
                height="900"
                alt=""
              />
              <span className="project-thumb-details">
                <span className="title">FrockHub</span>
                <span className="description">
                  Luxury fashion resource by Saxon Campbell
                </span>
              </span>
              <i className="saulticon-arrow-forward" />
            </a>
          </div>
          <div className="grid-item grid-item-wide project-thumb">
            <a href="project.html">
              <img
                src="tmp/sample-square.png"
                width="900"
                height="900"
                alt=""
              />{' '}
              <span className="project-thumb-details">
                <span className="title">Swiss</span>
                <span className="description">
                  The International Typographic Style, a modernist movement
                  impacting many design-related fields
                </span>
              </span>
              <i className="saulticon-arrow-forward" />
            </a>
          </div>
          <div className="grid-item project-thumb">
            <a href="project.html">
              <img
                src="tmp/sample-square.png"
                width="900"
                height="900"
                alt=""
              />
              <span className="project-thumb-details">
                <span className="title">Houdini Slab</span>
              </span>
              <i className="saulticon-arrow-forward" />
            </a>
          </div>
          <div className="grid-item project-thumb">
            <a href="project.html">
              <img
                src="tmp/sample-square.png"
                width="900"
                height="900"
                alt=""
              />
              <span className="project-thumb-details">
                <span className="title">Pexels</span>
              </span>
              <i className="saulticon-arrow-forward" />
            </a>
          </div>
          <div className="grid-item grid-item-wide project-thumb">
            <a href="project.html">
              <img
                src="tmp/sample-square.png"
                width="900"
                height="900"
                alt=""
              />
              <span className="project-thumb-details">
                <span className="title">Reppr</span>
                <span className="description">
                  We are for shortcuts as much as you are, but can the shortcuts
                  help if the direction is wrong?
                </span>
              </span>
              <i className="saulticon-arrow-forward" />
            </a>
          </div>
          <div className="grid-item project-thumb">
            <a href="project.html">
              <img
                src="tmp/sample-square.png"
                width="900"
                height="900"
                alt=""
              />
              <span className="project-thumb-details">
                <span className="title">Andras</span>
                <span className="description">
                  We are for shortcuts as much as you are, but can the shortcuts
                  help?
                </span>
              </span>
              <i className="saulticon-arrow-forward" />
            </a>
          </div>
          <div className="grid-item project-thumb">
            <a href="project.html">
              <img
                src="tmp/sample-square.png"
                width="900"
                height="900"
                alt=""
              />
              <span className="project-thumb-details">
                <span className="title">Scholar</span>
                <span className="description">
                  Scholar MFG, an artful neoluxury leather brand based in LA
                </span>
              </span>
              <i className="saulticon-arrow-forward" />
            </a>
          </div>
          <div className="grid-item project-thumb">
            <a href="project.html">
              <img
                src="tmp/sample-square.png"
                width="900"
                height="900"
                alt=""
              />
              <span className="project-thumb-details">
                <span className="title">Samu</span>
                <span className="description">
                  Samurai Jack by Adam Whitcroft
                </span>
              </span>
              <i className="saulticon-arrow-forward" />
            </a>
          </div>
          <div className="grid-item project-thumb">
            <a href="project.html">
              <img
                src="tmp/sample-square.png"
                width="900"
                height="900"
                alt=""
              />
              <span className="project-thumb-details">
                <span className="title">Mobile UI</span>
              </span>
              <i className="saulticon-arrow-forward" />
            </a>
          </div>
          <div className="grid-sizer" />
          <div className="gutter-sizer" />
        </div>

        <p className="extra-margin-top text-center">
          <Link to="/work">
            <a className="button white big has-arrow">View all our work</a>
          </Link>
        </p>
      </div>
    );
  }
}

export default WorkList;
