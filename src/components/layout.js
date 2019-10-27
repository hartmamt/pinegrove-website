import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  fab,
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
  faSpotify,
  faItunes,
  faBandcamp,
} from '@fortawesome/free-brands-svg-icons'
//import { faFacebook } from '@fortawesome/free-solid-svg-icons'
import base from './base.css'
import '../pages/pinegrove.css'
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
        <div id="site-container">
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
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li>
                <li>
                  <a href="http://instagram.com/pinegroveband" target="_blank">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li>
                  <a href="http://twitter.com/pinegroveband" target="_blank">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li>
                  <a
                    href="http://youtube.com/user/PinegroveBand"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://open.spotify.com/artist/2gbT6GPXMis0OAkZbEQCYB?si=OmDBSuoQQHK2f0OWL08Ucw"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faSpotify} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://itunes.apple.com/gb/artist/pinegrove/1045791526"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faItunes} />
                  </a>
                </li>
                <li>
                  <a href="http://pinegrove.bandcamp.com/" target="_blank">
                    <FontAwesomeIcon icon={faBandcamp} />
                  </a>
                </li>
              </ul>
            </nav>
            {/* #social */}
            <div id="copyright">© 2019 Pinegrove.</div>
          </footer>
        </div>
      </Container>
    )
  }
}

export default Template
