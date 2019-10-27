import React from 'react'
import { Link, graphql } from 'gatsby'
import { useMediaQuery } from 'react-responsive'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './live.module.css'
import Layout from '../components/layout'
import PinegroveGrid from '../components/pinegrove-grid'
import AlbumPreview from '../components/album-preview'

const links = [
  { location: '/tour/all/', text: 'all' },
  { location: '/tour/2019/', text: '2019' },
  { location: '/tour/2018/', text: '2018' },
  { location: '/tour/2017/', text: '2017' },
  { location: '/tour/2016/', text: '2016' },
  { location: '/tour/2015/', text: '2015' },
  { location: '/tour/2014/', text: '2014' },
  { location: '/tour/2013/', text: '2013' },
  { location: '/tour/2012/', text: '2012' },
  { location: '/tour/2011/', text: '2011' },
]

class TourArchiveIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <div>
          <Helmet title={siteTitle} />
          <div className="back-link">
            <a href="javascript:history.back();">
              <img src="/img/arrow-back.svg" alt="Back" />
            </a>
          </div>
          <header id>
            <h1> tour archive </h1>
          </header>
          <PinegroveGrid
            squareTextStyle={{ fontFamily: ['Oswald', 'sans-serif'] }}
            links={links}
          />
        </div>
      </Layout>
    )
  }
}

export default TourArchiveIndex

export const pageQuery = graphql`
  query TourArchiveIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
