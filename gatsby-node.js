const Promise = require('bluebird')
const path = require('path')

const compare = function(a, b) {
  return parseInt(b.text) - parseInt(a.text)
}

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

        //console.log(result.data.allContentfulLivePerformance.edges)

        //const grouped = groupBy(shows, show => show.date)

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

    //Show List Page

    const showListPage = path.resolve('./src/templates/tour-year.js')
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

        const showsWithYear = result.data.allContentfulLivePerformance.edges

        let uniqueYears = []
        showsWithYear.forEach(function(item) {
          var i = uniqueYears.findIndex(
            x => x.text == item.node.date.substring(0, 4)
          )
          if (i <= -1) {
            uniqueYears.push({
              location: '/tour/' + item.node.date.substring(0, 4),
              text: item.node.date.substring(0, 4),
            })
          }
        })

        uniqueYears.unshift({ location: '/tour/all', text: 'All' })

        //console.log(result.data.allContentfulLivePerformance.edges)

        //const grouped = groupBy(shows, show => show.date)

        uniqueYears.forEach((year, index) => {
          createPage({
            path: `/tour/${year.text}/`,
            component: showListPage,
            context: {
              startDate: year.text + '-01-01',
              endDate: year.text + '-12-31',
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
