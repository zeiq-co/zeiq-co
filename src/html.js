/* eslint react/destructuring-assignment: 0 */

import React from 'react';
import PropTypes from 'prop-types';

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />

          {/* Add custom css or scripts here */}
          <link
            href="https://fonts.googleapis.com/css?family=Merriweather:400,700|Rubik:400,700"
            rel="stylesheet"
          />
          <link
            href="/css/app.min.css"
            rel="stylesheet"
            type="text/css"
            crossOrigin="anonymous"
          />
          {/* Add custom css or scripts here */}
          <script
            defer
            src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"
          />

          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key="body"
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
          <script src="/js/app.min.js" crossOrigin="anonymous" />
          <script src="/js/crisp.js" />
          <script src="/js/scripts.js" />
        </body>
      </html>
    );
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object.isRequired,
  headComponents: PropTypes.array.isRequired,
  bodyAttributes: PropTypes.object.isRequired,
  preBodyComponents: PropTypes.array.isRequired,
  body: PropTypes.string.isRequired,
  postBodyComponents: PropTypes.array.isRequired,
};
