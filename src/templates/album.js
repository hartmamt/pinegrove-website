import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import SpotifyPlayer from 'react-spotify-player'
import get from 'lodash/get'
import Img from 'gatsby-image'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/layout'
import DiscussionBox from '../components/DiscussionBox'
import SoundPlayer from '../components/SoundPlayer'
import heroStyles from '../components/hero.module.css'

import styles from './album.module.css'

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
          <div className={heroStyles.hero}>
            <Img
              className={heroStyles.heroImage}
              alt={album.title}
              fluid={album.albumCover.fluid}
            />
          </div>
          <div className="wrapper">
            <h1 className="section-headline"> {album.title} </h1>
            <p
              style={{
                display: 'block',
              }}
            >
              {album.releasedate}
            </p>
            {tracks &&
              tracks.map(track => (
                <div>
                  <Link to={`/song/${track.slug}`}> {track.songTitle} </Link>{' '}
                </div>
              ))}
            {/* <SpotifyPlayer
              uri="spotify:album:3CIisDFciv06JbPrZNzNqW"
              size={size}
              view={view}
              theme={theme}
            /> */}
            {/* <div>{documentToReactComponents(album.tracklisting.json)}</div> */}
            <div
              dangerouslySetInnerHTML={{
                __html: album.playerEmbed.childMarkdownRemark.html,
              }}
            />
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
        fluid(maxWidth: 500, maxHeight: 500, resizingBehavior: SCALE) {
          ...GatsbyContentfulFluid
        }
      }
      tracks {
        songTitle
        slug
        audioFile {
          file {
            url
          }
        }
      }
    }
  }
`
