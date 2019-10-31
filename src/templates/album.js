import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion'

// Demo styles, see 'Styles' section below for some notes on use.
//import 'react-accessible-accordion/dist/fancy-example.css'

import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/layout'
import DiscussionBox from '../components/DiscussionBox'
import SoundPlayer from '../components/SoundPlayer'
import heroStyles from '../components/hero.module.css'

import './album.css'

const Bold = ({ children }) => <p className="bold">{children}</p>

const Text = ({ children }) => <p className="align-center">{children}</p>

const options = {
  renderText: text => {
    return text.split('\n').reduce((children, textSegment, index) => {
      return [...children, index > 0 && <br key={index} />, textSegment]
    }, [])
  },
}

class AlbumTemplate extends React.Component {
  render() {
    const album = get(this.props, 'data.contentfulAlbum')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    // size may also be a plain string using the presets 'large' or 'compact'
    const size = {
      width: '100%',
      height: 300,
    }
    const view = 'list' // or 'coverart'
    const theme = 'black' // or 'white'

    const tracks = get(this, 'props.data.contentfulAlbum.tracks')

    return (
      <Layout
        location={this.props.location}
        title={`${album.title} | ${siteTitle}`}
        ogTags={[
          <meta
            data-react-helmet="true"
            property="og:image"
            content={album.albumCover.fluid.src}
          />,
          <meta
            data-react-helmet="true"
            property="og:title"
            content={album.title}
          />,
          <meta
            data-react-helmet="true"
            property="og:url"
            content="https://www.pinegroveband.com"
          />,
          <meta data-react-helmet="true" property="og:type" content="band" />,
          <meta
            data-react-helmet="true"
            property="og:description"
            content="Amperland, home of Pinegrove"
          />,
        ]}
      >
        <div>
          <header data-aos="fade">
            <h1>{album.title}</h1>
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
            <div className="col">
              <div className="album-image" data-aos="fade">
                <img src={album.albumCover.fluid.src} alt="Cardinal" />
              </div>

              <div className="bandcamp-embed">
                <div
                  style={{ maxWidth: '450px', marginTop: '20px' }}
                  dangerouslySetInnerHTML={{
                    __html: album.playerEmbed.childMarkdownRemark.html,
                  }}
                />
              </div>
              <b>Release Date</b>
              <p
                style={{
                  display: 'block',
                }}
              >
                {album.releasedate}
              </p>
              <b>Credits</b>
              {documentToReactComponents(album.credits.json, options)}
            </div>
            <div className="col" data-aos="fade">
              <h2>tracks</h2>
              {/* <ol>
                {tracks
                  ? tracks.map(song => (
                      <li>
                        <Link to={`/song/${song.slug}`}>{song.songTitle}</Link>

                        <div
                          style={{ maxWidth: '450px', marginTop: '20px' }}
                          dangerouslySetInnerHTML={{
                            __html: song.audioEmbed.childMarkdownRemark.html,
                          }}
                        />
                      </li>
                    ))
                  : null}
              </ol> */}
              <Accordion
                allowZeroExpanded
                className="accordion accordion-section"
              >
                {tracks &&
                  tracks.map(track => (
                    <AccordionItem>
                      <AccordionItemHeading>
                        <AccordionItemButton className="old-friends">
                          <dt className="old-friends">{track.songTitle}</dt>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <div className="accordion-content">
                          <div
                            style={{ width: '100%', paddingBottom: '20px' }}
                            dangerouslySetInnerHTML={{
                              __html: track.audioEmbed.childMarkdownRemark.html,
                            }}
                          />
                          <Link to={`/song/${track.slug}`} class="coming-soon">
                            see more...
                          </Link>
                          <div className="accordion-content">
                            <h3>Lyrics</h3>
                            <pre>
                              {documentToReactComponents(track.lyrics.json)}{' '}
                            </pre>
                            {track.tabPrint ? (
                              <div>
                                <h2>tab</h2>
                                <p>
                                  <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={track.tabView.file.url}
                                  >
                                    view
                                  </a>{' '}
                                  /
                                  <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={track.tabPrint.file.url}
                                  >
                                    print
                                  </a>
                                </p>
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </AccordionItemPanel>
                    </AccordionItem>
                  ))}
              </Accordion>
            </div>
          </div>

          {/* .container */}
          {/*           
          <div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
              }}
            >
              <div style={{ flex: 2, minWidth: '300px' }}>
                <div>
                  <div>
                    <Img
                      className={'albumImage'}
                      alt={album.title}
                      fluid={album.albumCover.fluid}
                      style={{ maxWidth: '450px' }}
                    />
                  </div>
                  <div
                    style={{ maxWidth: '450px', marginTop: '20px' }}
                    dangerouslySetInnerHTML={{
                      __html: album.playerEmbed.childMarkdownRemark.html,
                    }}
                  />
                </div>
                <Accordion allowZeroExpanded>
                  {tracks &&
                    tracks.map(track => (
                      <AccordionItem>
                        <AccordionItemHeading>
                          <AccordionItemButton>
                            <Link to={`/song/${track.slug}`}>
                              {track.songTitle}{' '}
                            </Link>
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                          <div>
                            <div
                              style={{ width: '100%' }}
                              dangerouslySetInnerHTML={{
                                __html:
                                  track.audioEmbed.childMarkdownRemark.html,
                              }}
                            />
                            <div>
                              <div>
                                <div>Lyrics</div>
                                <pre>
                                  {documentToReactComponents(track.lyrics.json)}{' '}
                                </pre>
                              </div>
                            </div>
                          </div>
                        </AccordionItemPanel>
                      </AccordionItem>
                    ))}
                </Accordion>
              </div>
              <div style={{ flex: 1, marginLeft: '75px' }}>
                <b>Release Date</b>
                <p
                  style={{
                    display: 'block',
                  }}
                >
                  {album.releasedate}
                </p>
                <b>Credits</b>
                {documentToReactComponents(album.credits.json, options)}
              </div>
            </div> 
          </div>
                */}
          {/* <DiscussionBox
            discourseUrl={'https://amperland.gokinjo.space/'}
            discourseEmbedUrl={
              'https://amperland.gokinjo.space/t/skylight-album-discussion/25'
            }
          /> */}
        </div>
      </Layout>
    )
  }
}

export default AlbumTemplate

export const pageQuery = graphql`
  query AlbumPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulAlbum(slug: { eq: $slug }) {
      title
      releasedate(formatString: "MMMM Do, YYYY")
      playerEmbed {
        childMarkdownRemark {
          html
        }
      }
      albumCover {
        fluid(maxWidth: 500, maxHeight: 500, resizingBehavior: PAD) {
          ...GatsbyContentfulFluid
        }
      }
      credits {
        json
      }
      tracks {
        songTitle
        slug
        tabPrint {
          file {
            url
          }
        }
        tabView {
          file {
            url
          }
        }
        lyrics {
          json
          lyrics
        }
        audioFile {
          file {
            url
          }
        }
        audioEmbed {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`
