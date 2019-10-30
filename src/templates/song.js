import React from 'react'
import { graphql, Link } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/layout'

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

class SongTemplate extends React.Component {
  render() {
    const song = get(this.props, 'data.contentfulSong')
    //console.log(song)
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    //console.log(song)
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
          <div id="site-container">
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

            <div className="container">
              <div className="col" data-aos="fade">
                <h2>Lyrics</h2>
                <pre>{documentToReactComponents(song.lyrics.json)} </pre>
                {song.tabPrint ? (
                  <div>
                    <h2>tab</h2>
                    <p>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={song.tabView.file.url}
                      >
                        view
                      </a>{' '}
                      /
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={song.tabPrint.file.url}
                      >
                        print
                      </a>
                    </p>
                  </div>
                ) : null}
              </div>
              {/* .col */}
              <div className="col text-center" data-aos="fade">
                <h2>found on</h2>

                {song.album &&
                  song.album.map(album => (
                    <div>
                      <div className="album-image-med">
                        <Link to={`/album/${album.slug}`}>
                          <img
                            src={album.albumCover.fluid.src}
                            alt={album.title}
                          />
                        </Link>
                      </div>
                      <div className="bandcamp-embed-med">
                        <div
                          style={{
                            maxWidth: '450px',
                            marginTop: '20px',
                            marginBottom: '20px',
                          }}
                          dangerouslySetInnerHTML={{
                            __html: album.playerEmbed.childMarkdownRemark.html,
                          }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
              {/* .col */}
              <div className="col" data-aos="fade">
                <h2>played live recently</h2>
                <div className="coming-soon" style={{ textAlign: 'center' }}>
                  coming soon...
                </div>
                {/* <div className="date-venu-list"> */}

                {/* {song.live_performance &&
                    song.live_performance.map(live => (
                      <div className="date-venue-item">
                        <div className="date">
                          <div className="mm">
                            {months[parseInt(live.date.substring(5, 7) - 1)]}
                          </div>
                          <div className="dd">{live.date.substring(8, 10)}</div>
                          <div className="YY">{live.date.substring(0, 4)}</div>
                        </div>
                        <div className="venue">
                          <Link to={`/show/${live.slug}`}>{live.venue}</Link>
                          <br />
                          {live.citystatecountry}
                        </div>
                      </div>
                    ))} */}
                {/* </div> */}
                {/* .date-venue-list */}
              </div>
              {/* .col */}
            </div>
            {/* .container */}
          </div>
        </div>{' '}
      </Layout>
    )
  }
}

export default SongTemplate
/*
live_performance {
        citystatecountry
        venue
        date
        slug
      }
      */

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
      tab {
        json
      }
      album {
        title
        albumCover {
          fluid {
            src
          }
        }
        slug
        playerEmbed {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`
