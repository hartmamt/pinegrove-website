import React from 'react'

export default ({ pageTitle }) => (
  <header data-aos="fade">
    <h1>{pageTitle}</h1>
    <div className="back-link">
      <a href="javascript:history.back();">
        <img src="/img/arrow-back.svg" alt="Back" />
      </a>
    </div>
    <div className="home-link">
      <a href="/">
        <img src="/img/home.png" alt="home" />
      </a>
    </div>
  </header>
)
