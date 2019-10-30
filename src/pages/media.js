import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './album.module.css'
import Layout from '../components/layout'
import AlbumPreview from '../components/album-preview'

class MediaIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <div>
          <Helmet title={siteTitle} />
          <header data-aos="fade">
            <h1>media</h1>
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
          <div className="container">
            <div style={{ height: '50%' }}>
              <div className="coming-soon" style={{ textAlign: 'center' }}>
                coming soon...
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default MediaIndex

export const pageQuery = graphql`
  query MediaIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
