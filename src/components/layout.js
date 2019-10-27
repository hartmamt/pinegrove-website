import React from 'react'
import { Link } from 'gatsby'
import base from './base.css'
import Container from './container'
import Navigation from './navigation'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }
    // const {
    //   breadcrumb: { crumbs },
    // } = pageContext

    return (
      <Container>
        {/* <Navigation /> */}
        {children}{' '}
        {/* <SitemapCrumbs crumbs={crumbs} crumbSeparator=" - " /> */}{' '}
        <footer id>
          <nav id="bottom">
            <ul>
              <li>
                <a href="#link">Marigold Pre-order</a>
              </li>
              <li>
                <a href="#link">Tour Dates</a>
              </li>
              <li>
                <a href="#link">Store</a>
              </li>
              <li>
                <a href="#link">Recorded</a>
              </li>
              <li>
                <a href="#link">Community</a>
              </li>
              <li>
                <a href="#link">Media</a>
              </li>
              <li>
                <a href="#link">Search</a>
              </li>
            </ul>
          </nav>
          {/* #bottom */}
          <nav id="social">
            <ul>
              <li>
                <a href="http://facebook.com/pinegroveband" target="_blank">
                  <i className="fab fa-facebook" />
                </a>
              </li>
              <li>
                <a href="http://instagram.com/pinegroveband" target="_blank">
                  <i className="fab fa-instagram" />
                </a>
              </li>
              <li>
                <a href="http://twitter.com/pinegroveband" target="_blank">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href="http://youtube.com/user/PinegroveBand" target="_blank">
                  <i className="fab fa-youtube" />
                </a>
              </li>
              <li>
                <a
                  href="https://open.spotify.com/artist/2gbT6GPXMis0OAkZbEQCYB?si=OmDBSuoQQHK2f0OWL08Ucw"
                  target="_blank"
                >
                  <i className="fab fa-spotify" />
                </a>
              </li>
              <li>
                <a
                  href="https://itunes.apple.com/gb/artist/pinegrove/1045791526"
                  target="_blank"
                >
                  <i className="fab fa-itunes" />
                </a>
              </li>
              <li>
                <a href="http://pinegrove.bandcamp.com/" target="_blank">
                  <i className="fab fa-bandcamp" />
                </a>
              </li>
            </ul>
          </nav>
          {/* #social */}
          <div id="copyright">© 2019 Pinegrove.</div>
        </footer>
      </Container>
    )
  }
}

export default Template
