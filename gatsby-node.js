const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    //Albums
    const albumPage = path.resolve('./src/templates/album.js')
    resolve(
      graphql(
        `
          {
            allContentfulAlbum {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const albums = result.data.allContentfulAlbum.edges
        albums.forEach((album, index) => {
          createPage({
            path: `/album/${album.node.slug}/`,
            component: albumPage,
            context: {
              slug: album.node.slug,
            },
          })
        })
      })
    )

    //Shows

    const showPage = path.resolve('./src/templates/show.js')
    resolve(
      graphql(
        `
          {
            allContentfulLivePerformance {
              edges {
                node {
                  venue
                  slug
                  citystatecountry
                  date
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
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const shows = result.data.allContentfulLivePerformance.edges
        shows.forEach((show, index) => {
          createPage({
            path: `/show/${show.node.slug}/`,
            component: showPage,
            context: {
              slug: show.node.slug,
            },
          })
        })
      })
    )

    //Songs

    const songPage = path.resolve('./src/templates/song.js')
    resolve(
      graphql(
        `
          {
            allContentfulSong {
              edges {
                node {
                  songTitle
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const songs = result.data.allContentfulSong.edges
        songs.forEach((song, index) => {
          createPage({
            path: `/song/${song.node.slug}/`,
            component: songPage,
            context: {
              slug: song.node.slug,
            },
          })
        })
      })
    )
  })
}
