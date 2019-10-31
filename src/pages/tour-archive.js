import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import PinegroveGrid from '../components/pinegrove-grid'

let links = [{ location: '/tour/all/', text: 'all' }]

const compare = function(a, b) {
  return parseInt(b.text) - parseInt(a.text)
}

class TourArchiveIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const shows = get(this, 'props.data.allContentfulLivePerformance.edges')

    const showsWithYear = shows
      .map(show => {
        return {
          location: '/tour/' + show.node.date.substring(0, 4),
          text: show.node.date.substring(0, 4),
        }
      })
      .sort(compare)

    let uniqueYears = []
    showsWithYear.forEach(function(item) {
      var i = uniqueYears.findIndex(x => x.text == item.text)
      if (i <= -1) {
        uniqueYears.push({ location: item.location, text: item.text })
      }
    })

    uniqueYears.unshift({ location: '/tour/all', text: 'All' })

    return (
      <Layout location={this.props.location}>
        <div>
          <Helmet title={siteTitle} />
          <header data-aos="fade">
            <h1>tour archive</h1>
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
          <PinegroveGrid
            squareTextStyle={{ font: '1.8rem "Special Elite", monospace' }}
            hasNumbers
            links={uniqueYears}
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
    allContentfulLivePerformance {
      edges {
        node {
          date
        }
      }
    }
  }
`
