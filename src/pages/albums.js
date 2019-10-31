import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import PinegroveGrid from '../components/pinegrove-grid'

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
          <header data-aos="fade">
            <h1>recordings</h1>
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
          <PinegroveGrid links={links} />
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
  }
`
