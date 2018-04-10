import React from 'react';

let stylesStr;
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require (`!raw-loader!../public/styles.css`); // eslint-disable-line
  } catch (e) {
    console.log (e); // eslint-disable-line
  }
}

module.exports = class HTML extends React.Component {
  render () {
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
          <link rel="stylesheet" href="/css/app.min.css" />
        </head>

        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key="body"
            id="___gatsby"
            dangerouslySetInnerHTML={{__html: this.props.body}}
          />
          {this.props.postBodyComponents}
          <script src="js/app.min.js" />

          {/* <script
            defer
            src="//use.fontawesome.com/releases/v5.0.8/js/all.js"
            integrity="sha384-SlE991lGASHoBfWbelyBPLsUlwY1GwNDJo3jSJO04KZ33K2bwfV9YBauFfnzvynJ"
            crossorigin="anonymous"
          /> */}
        </body>
      </html>
    );
  }
};
