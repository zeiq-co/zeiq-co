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
    let css;
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      );
    }
    return (
      <html lang="en" {...this.props.htmlAttributes}>
        <head>
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
          />
          <meta charSet="UTF-8" />
          <meta name="author" content="Parminder Klair" />
          <link rel="shortcut icon" href="/img/favicon.png" />
          <link
            href="//fonts.googleapis.com/css?family=Merriweather:300,400%7CRubik:400,500,700"
            rel="stylesheet"
          />
          <base href="/" target="_blank" />
          <link
            href="css/app.min.css"
            rel="stylesheet"
            type="text/css"
            crossorigin="anonymous"
          />

          {this.props.headComponents}
          {css}
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
          <script src="/js/crisp.js" />
        </body>
      </html>
    );
  }
};
