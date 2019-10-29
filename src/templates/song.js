import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/layout'

class SongTemplate extends React.Component {
  render() {
    const song = get(this.props, 'data.contentfulSong')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    // size may also be a plain string using the presets 'large' or 'compact'
    const size = {
      width: '100%',
      height: 300,
    }
    const view = 'list' // or 'coverart'
    const theme = 'black' // or 'white'

    //const tracks = get(this, 'props.data.contentfulAlbum.tracks')

    return (
      <Layout location={this.props.location}>
        <div>
          <Helmet title={`${song.songTitle} | ${siteTitle}`} />{' '}
          <div>
            <header data-aos="fade">
              <h1>{song.songTitle}</h1>
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
            <h4>Lyrics</h4>
            <div>
              <pre>{documentToReactComponents(song.lyrics.json)} </pre>
            </div>
            <h4>Tab</h4>
            <div>
              <pre>{documentToReactComponents(song.tab.json)} </pre>
            </div>
          </div>
          {/* <DiscussionBox
                    discourseUrl={'https://amperland.gokinjo.space/'}
                    discourseEmbedUrl={
                      'https://amperland.gokinjo.space/t/skylight-album-discussion/25'
                    }
                  /> */}{' '}
        </div>{' '}
      </Layout>
    )
  }
}

export default SongTemplate

export const pageQuery = graphql`
  query SongBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulSong(slug: { eq: $slug }) {
      songTitle
      lyrics {
        json
        lyrics
      }
      tab {
        json
      }
    }
  }
`
