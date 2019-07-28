import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './album.module.css'
import Layout from '../components/layout'
import AlbumPreview from '../components/album-preview'

class PressIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const albums = get(this, 'props.data.allContentfulAlbum.edges')

    return (
      <Layout location={this.props.location}>
        <div>
          <Helmet title={siteTitle} />{' '}
          {/* <div className={styles.hero}>Albums </div>{' '} */}{' '}
          <div className="wrapper">
            <h2 className="section-headline"> press </h2>{' '}
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

export default PressIndex

export const pageQuery = graphql`
  query PressIndexQuery {
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
