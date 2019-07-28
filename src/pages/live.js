import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './album.module.css'
import Layout from '../components/layout'
import AlbumPreview from '../components/album-preview'

class LiveIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const albums = get(this, 'props.data.allContentfulAlbum.edges')

    return (
      <Layout location={this.props.location}>
        <div>
          <Helmet title={siteTitle} />{' '}
          {/* <div className={styles.hero}>Albums </div>{' '} */}{' '}
          <div className="wrapper">
            <h2 className="section-headline"> live </h2>{' '}
            <ul className="article-list">
              {' '}
              {albums.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    {' '}
                    {/* <AlbumPreview album={node} /> */}{' '}
                  </li>
                )
              })}{' '}
            </ul>{' '}
          </div>{' '}
        </div>{' '}
      </Layout>
    )
  }
}

export default LiveIndex

export const pageQuery = graphql`
  query LiveIndexQuery {
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
