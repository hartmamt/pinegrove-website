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
      <Layout location={this.props.location}>
        <div
          style={{
            background: '#fff',
          }}
        >
          <Helmet title={`${album.title} | ${siteTitle}`} />

          {/* </div> */}

          <div className="wrapper">
            {/* <div className={heroStyles.hero}> */}
            <h1 className="section-headline"> {album.title} </h1>
            {/* </div> */}
            <Img
              className={heroStyles.heroImage}
              alt={album.title}
              fluid={album.albumCover.fluid}
            />
            <div
              style={{ width: '100%' }}
              dangerouslySetInnerHTML={{
                __html: album.playerEmbed.childMarkdownRemark.html,
              }}
            />
            <p
              style={{
                display: 'block',
              }}
            >
              {album.releasedate}
            </p>
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
                            __html: track.audioEmbed.childMarkdownRemark.html,
                          }}
                        />
                        <div>Lyrics</div>
                        <pre>
                          {documentToReactComponents(track.lyrics.json)}{' '}
                        </pre>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>
                ))}
            </Accordion>

            {/* <SpotifyPlayer
              uri="spotify:album:3CIisDFciv06JbPrZNzNqW"
              size={size}
              view={view}
              theme={theme}
            /> */}
            {/* <div>{documentToReactComponents(album.tracklisting.json)}</div> */}
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
      tracks {
        songTitle
        slug
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
