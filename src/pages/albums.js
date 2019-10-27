import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './album.module.css'
import Layout from '../components/layout'
import AlbumPreview from '../components/album-preview'
import PinegroveGrid from '../components/pinegrove-grid'

// const links = [
//   { location: '/pre/', text: 'poore-order marigold' },
//   { location: '/tickets/', text: 'get tickets' },
//   { location: '/store/', text: 'store' },
//   { location: '/search/', text: 'search' },
//   { location: '/albums/', text: 'recorded' },
//   { location: '/live/', text: 'tour archive' },
//   { location: '/articles/', text: 'media' },
//   { location: 'https://amperland.gokinjo.space/', text: 'community' },
// ]

class AlbumIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const albums = get(this, 'props.data.allContentfulAlbum.edges')

    const links = albums.map(({ node }) => {
      return {
        location: '/album/' + node.slug,
        text: node.title,
        image: node.albumCover.fluid,
      }
    })
    return (
      <Layout location={this.props.location}>
        <div>
          <Helmet title={siteTitle} />
          <header id>
            <h1>recorded</h1>
          </header>
          <PinegroveGrid links={links} colorOverride={'red'} />
        </div>
      </Layout>
    )
  }
}

export default AlbumIndex

export const pageQuery = graphql`
  query AlbumIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulAlbum {
      edges {
        node {
          title
          slug

          albumCover {
            fluid(maxWidth: 500, maxHeight: 500, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
