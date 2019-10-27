import React from 'react'
import PropTypes from 'prop-types'
//import AOS from 'aos'
import './pages/pinegrove.css'

export default function HTML(props) {
  // AOS.init()
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />

        <title>Pinegrove</title>

        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/img/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/img/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/img/icons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/img/icons/safari-pinned-tab.svg"
          color="#214e68"
        />
        <link rel="shortcut icon" href="/img/icons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#214e68" />
        <meta
          name="msapplication-config"
          content="/img/icons/browserconfig.xml"
        />
        <meta name="theme-color" content="#214e68" />

        <link rel="stylesheet" href="css/pinegrove.css?v4.4" />

        <link
          href="https://fonts.googleapis.com/css?family=Source+Code+Pro:400,400i,700,700i&amp;display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Special+Elite&amp;display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.11.2/css/all.css"
          integrity="sha384-zrnmn8R8KkWl12rAZFt4yKjxplaDaT7/EUkKm7AovijfrQItFWR7O/JJn4DAa/gx"
          crossOrigin="anonymous"
        />
        {/* 
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        /> */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/instantsearch.css@7.3.1/themes/reset-min.css"
          integrity="sha256-t2ATOGCtAIZNnzER679jwcFcKYfLlw01gli6F6oszk8="
          crossOrigin="anonymous"
        />
        {/* <script async src="//genius.codes"></script> */}
        {/* <script
          charSet="utf-8"
          src="https://widget.bandsintown.com/main.min.js"
        ></script> */}
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
