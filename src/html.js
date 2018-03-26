import React from 'react';

let stylesStr;
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`); // eslint-disable-line
  } catch (e) {
    console.log(e); // eslint-disable-line
  }
}

module.exports = class HTML extends React.Component {
  render() {
    return (
      <html lang="en" {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <link rel="shortcut icon" href="favicon.png" />
          <link
            href="https://fonts.googleapis.com/css?family=Merriweather:300,400%7CRubik:400,500,700"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/css/bootstrap-grid.min.css" />
          <link
            rel="stylesheet"
            href="/css/bootstrap-grid.css"
            type="text/css"
          />
          <link rel="stylesheet" href="/css/style-dark.css" type="text/css" />
          <link
            rel="stylesheet"
            href="/css/style-personal.css"
            type="text/css"
          />
          <link rel="stylesheet" href="/css/style.css" type="text/css" />
        </head>

        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key="body"
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
          <script src="js/modernizr-custom.min.js" />
          <script src="js/jquery.min.js" />
          <script src="js/imagesloaded.pkgd.min.js" />
          <script src="js/masonry.pkgd.min.js" />
          <script src="js/functions.js" />
          <script src="js/owl.carousel.min.js" />
          <script src="js/jquery.matchheight-min.js" />
        </body>
      </html>
    );
  }
};
