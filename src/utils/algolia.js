const albumQuery = `{
    albums: allContentfulAlbum {
        edges {
          node {
            title
            slug
            alumbCoverUrl
            credits {
              json
            }
          }
        }
      }
  }`

const songQuery = `{
    songs: allContentfulSong {
        edges {
          node {
            songTitle
            slug
            lyrics {
              json
            }
            album {
              alumbCoverUrl
              slug
              title
            }
            audioEmbed {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      }
  }`

const flatten = arr =>
  arr.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    ...rest,
  }))
const settings = {
  attributesToSnippet: [`excerpt:20`],
}

const queries = [
  {
    query: albumQuery,
    transformer: ({ data }) => flatten(data.albums.edges),
    indexName: `albums`,
    settings,
  },
  {
    query: songQuery,
    transformer: ({ data }) => flatten(data.songs.edges),
    indexName: `songs`,
    settings,
  },
  // {
  //   query: postQuery,
  //   transformer: ({ data }) => flatten(data.posts.edges),
  //   indexName: `Posts`,
  //   settings,
  // },
]

module.exports = queries
