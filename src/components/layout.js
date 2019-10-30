import React from 'react'
import { Link } from 'gatsby'
import AOS from 'aos'
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
  componentDidMount() {
    AOS.init()
  }
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

    const nowrap = { whiteSpace: 'nowrap' }
    return (
      <div id="site-container">
        {children}
        <footer id>
          <nav id="bottom">
            <ul>
              <li>
                <a
                  style={nowrap}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://pinegrove.ffm.to/marigold"
                >
                  Marigold Pre-order
                </a>
              </li>
              <li>
                <a
                  style={nowrap}
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://youtu.be/Ad8BabV7oLg"
                >
                  Watch "Phase"
                </a>
              </li>
              <li>
                <a
                  style={nowrap}
                  href="http://pinegrove.ffm.to/marigoldtourpresale"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Marigold Ticket Pre-sale
                </a>
              </li>
              <li>
                <Link to={'/albums/'}>Recordings</Link>
              </li>
              <li>
                <Link to={'/tickets/'}>Tickets</Link>
              </li>
              <li>
                <a
                  href="http://smarturl.it/pinegrovestore"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Store
                </a>
              </li>
              <li>
                <a
                  href="https://community.pinegroveband.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Community
                </a>
              </li>
              <li>
                <Link style={nowrap} to={'/mailing-list/'}>
                  Mailing List
                </Link>
              </li>
              {/* <li>
                <a href="#link">Media</a>
              </li> */}
              {/* <li>
                <Link to={'/search/'}>Search</Link>
              </li> */}
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
                <a href="http://youtube.com/user/PinegroveBand" target="_blank">
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
    )
  }
}

export default Template
