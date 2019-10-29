import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import PinegroveGrid from '../components/pinegrove-grid'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

class TourYearTemplate extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const shows = get(this, 'props.data.allContentfulLivePerformance.edges')

    const links = shows.map(show => ({
      location: `/show/${show.node.slug}`,
      text: show.node.venue,
    }))
    return (
      <Layout location={this.props.location}>
        <div>
          {/* <Helmet title={`${show.title} | ${siteTitle}`} /> */}

          {/* </div> */}

          <div>
            <header data-aos="fade">
              <h1>xxxx</h1>
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
              squareTextStyle={{ fontFamily: ['Oswald', 'sans-serif'] }}
              links={links}
            />
          </div>
        </div>
      </Layout>
    )
  }
}

export default TourYearTemplate

export const pageQuery = graphql`
  query TourShowsByYear($startDate: Date!, $endDate: Date!) {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulLivePerformance(
      filter: { date: { gte: $startDate, lte: $endDate } }
    ) {
      edges {
        node {
          venue
          slug
          citystatecountry
          date
          performanceImages {
            fluid {
              src
            }
          }
          setListSongs {
            songTitle
            slug
          }
          tourEntry {
            tourName
            tourEnd
            tourStart
            tourPoster {
              fluid {
                src
              }
            }
            openers {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      }
    }
  }
`
