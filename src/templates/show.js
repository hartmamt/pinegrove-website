import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Carousel from 'react-images'
import get from 'lodash/get'
import Img from 'gatsby-image'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/layout'

//import './album.css'

const Bold = ({ children }) => <p className="bold">{children}</p>

const Text = ({ children }) => <p className="align-center">{children}</p>

const options = {
  renderText: text => {
    return text.split('\n').reduce((children, textSegment, index) => {
      return [...children, index > 0 && <br key={index} />, textSegment]
    }, [])
  },
}

class ShowTemplate extends React.Component {
  render() {
    const show = get(this.props, 'data.contentfulLivePerformance')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    //console.log(show.performanceImages.map(image => image.fluid.src))
    const images = show.performanceImages
      ? show.performanceImages.map(image => ({
          caption: 'Pinegrove live',
          src: image.fluid.src,
        }))
      : undefined

    // size may also be a plain string using the presets 'large' or 'compact'
    const size = {
      width: '100%',
      height: 300,
    }
    const view = 'list' // or 'coverart'
    const theme = 'black' // or 'white'

    //const tracks = get(this, 'props.data.contentfulLivePerformance.tracks')

    return (
      <Layout location={this.props.location}>
        <div>
          <Helmet title={`${show.title} | ${siteTitle}`} />

          {/* </div> */}

          <div>
            <header data-aos="fade">
              <h1>
                {show.venue}
                <br />
                <span>
                  {show.citystatecountry} | {show.date}
                </span>
              </h1>
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
              <div className="col" data-aos="fade">
                {show.tourEntry && show.tourEntry.tourPoster ? (
                  <p>
                    <img
                      src={
                        show.tourEntry && show.tourEntry.tourPoster
                          ? show.tourEntry.tourPoster.fluid.src
                          : '/img/gallery-temp-01.png'
                      }
                      alt="pinegrove live schedule"
                    />
                  </p>
                ) : null}
                <h2>tour</h2>
                <p>midwest tour</p>
                <h2>lineup</h2>
                {show.tourEntry && show.tourEntry.openers ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: show.tourEntry.openers.childMarkdownRemark.html,
                    }}
                  />
                ) : null}
              </div>
              {/* .col */}
              <div className="col" data-aos="fade">
                <h2>setlist</h2>
                <ol>
                  {show.setListSongs
                    ? show.setListSongs.map(song => (
                        <li>
                          <Link to={`/song/${song.slug}`}>
                            {song.songTitle}
                          </Link>
                        </li>
                      ))
                    : null}
                </ol>
              </div>
              {/* .col */}
              <div className="col" data-aos="fade">
                <h2>images</h2>
                {images ? (
                  <Carousel
                    views={images}
                    className="gallery"
                    styles={{
                      container: base => ({
                        ...base,
                        height: 'auto',
                        padding: 10,
                      }),
                    }}
                  />
                ) : null}

                {/* .gallery */}

                {/* <h2>timeline</h2>
                <div className="container">
                  <div className="col">
                    <h4>white eagle hall</h4>
                    <p>Sep 28, 2010</p>
                  </div>
                  <div className="col">
                    <h4>brooklyn steel</h4>
                    <p>Sep 29, 2010</p>
                  </div>
                  <div className="col">
                    <h4>the fonda</h4>
                    <p>Sep 29, 2010</p>
                  </div>
                </div>
                <h2>i was there</h2>
                <p>feed stuff</p> */}
              </div>
              {/* .col */}
            </div>
            {/* .container */}
          </div>

          {/* <DiscussionBox
            discourseUrl={'https://amperland.gokinjo.space/'}
            discourseEmbedUrl={
              'https://amperland.gokinjo.space/t/skylight-album-discussion/25'
            }
          /> */}
        </div>{' '}
      </Layout>
    )
  }
}

export default ShowTemplate

export const pageQuery = graphql`
  query ShowPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulLivePerformance(slug: { eq: $slug }) {
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
`
