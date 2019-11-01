import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import PageHeader from '../components/page-header'
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
          <PageHeader pageTitle={'recordings'} />
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
