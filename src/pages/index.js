import React from 'react'
import { graphql } from 'gatsby'
import AOS from 'aos'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { useMediaQuery } from 'react-responsive'
import Hero from '../components/hero'
import Layout from '../components/layout'
import PinegroveGrid from '../components/pinegrove-grid'
import AlbumPreview from '../components/album-preview'

const links = [
  {
    location: 'https://pinegrove.ffm.to/marigold',
    text: (
      <div className="square-text">
        <span className="nowrap">pre-order</span> marigold
      </div>
    ),
  },
  { location: 'https://youtu.be/Ad8BabV7oLg', text: 'watch "phase"' },
  {
    location: 'https://www.bandsintown.com/a/1685238-pinegrove',
    text: 'tour dates',
  },
  {
    location: 'http://pinegrove.ffm.to/marigoldtourpresale',
    text: 'marigold ticket pre-sale',
  },
  { location: '/albums/', text: 'recordings' },
  { location: 'http://smarturl.it/pinegrovestore', text: 'store' },
  // { location: '/search/', text: 'search' },
  // { location: '/tour-archive/', text: 'tour archive' },
  // { location: '/media/', text: 'media' },
  { location: 'https://community.pinegroveband.com/', text: 'community' },
  { location: '/mailing-list/', text: 'mailing list' },
]

class RootIndex extends React.Component {
  componentDidMount() {
    AOS.init()
  }
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const albums = get(this, 'props.data.allContentfulAlbum.edges')
    //console.log(get(this, 'props.data.allContentfulPerson.edges'))
    const [author] = get(this, 'props.data.allContentfulPerson.edges')

    // AOS.init()

    return (
      <Layout location={this.props.location} crumbLabel="Home">
        <div
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
          data-aos-delay="0"
          data-gr-c-s-loaded="true"
          screen_capture_injected="true"
        >
          <Helmet title={siteTitle} />

          {/* <h1 className="section-headline">hello & welcome</h1> */}

          <header id>
            <h1>hello & welcome</h1>
          </header>
          <PinegroveGrid links={links} />
        </div>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulAlbum(sort: { fields: [releasedate], order: DESC }) {
      edges {
        node {
          title
          slug
          releasedate
          albumCover {
            fluid(maxWidth: 500, maxHeight: 500, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
