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
          <base href="/" target="_blank" />

          <link rel="shortcut icon" href="/img/favicon.png" />
          <link
            href="//fonts.googleapis.com/css?family=Merriweather:300,400%7CRubik:400,500,700"
            rel="stylesheet"
          />
          <link
            href="css/app.min.css"
            rel="stylesheet"
            type="text/css"
            crossorigin="anonymous"
          />
        </head>

        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key="body"
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
          <script src="js/app.min.js" crossorigin="anonymous" />

          <script
            defer
            src="//use.fontawesome.com/releases/v5.0.8/js/all.js"
            integrity="sha384-SlE991lGASHoBfWbelyBPLsUlwY1GwNDJo3jSJO04KZ33K2bwfV9YBauFfnzvynJ"
            crossorigin="anonymous"
          />
        </body>
      </html>
    );
  }
};
