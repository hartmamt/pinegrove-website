import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { useMediaQuery } from 'react-responsive'
import Hero from '../components/hero'
import Layout from '../components/layout'
import PinegroveGrid from '../components/pinegrove-grid'
import AlbumPreview from '../components/album-preview'

const links = [
  { location: '/press/', text: 'media' },
  { location: '/live/', text: 'live' },
  { location: '/albums/', text: 'albums' },
  { location: 'https://amperland.gokinjo.space/', text: 'community' },
  { location: '/search/', text: 'search' },
]
const desktopLocations = [1,6,9,11,12]
const mobileLocations = [0,1,2,5,6]

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const albums = get(this, 'props.data.allContentfulAlbum.edges')
    console.log(get(this, 'props.data.allContentfulPerson.edges'))
    const [author] = get(this, 'props.data.allContentfulPerson.edges')

    return (
      <Layout location={this.props.location} crumbLabel="Home">
        <div>
          <Helmet title={siteTitle} />
          <div className="wrapper">
            <h1 className="section-headline">hello & welcome</h1>
            <PinegroveGrid links={links} desktopLocations={desktopLocations} mobileLocations={mobileLocations}/>
          </div>
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
