import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import heroStyles from '../components/hero.module.css'

class VoteBernieIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bandsInTownReady: false,
    }
  }

  render() {
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const post = get(this.props, 'data.contentfulBlogPost')

    return (
      <Layout location={this.props.location} title={'vote bernie'}>
        <div>
          <div className="wrapper">
            <header data-aos="fade">
              <h1>vote bernie</h1>
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
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {/* <Helmet title={`${post.title} | ${siteTitle}`} /> */}
              {/* <div className={heroStyles.hero}>
                <Img alt={post.title} fluid={post.heroImage.fluid} />
              </div> */}
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img alt={post.title} src={post.heroImage.fluid.src} />
              </div>
              <div
                className="wrapper"
                style={{
                  marginTop: '20px',
                  fontFamily: 'Helvetica,Arial,sans-serif',
                  padding: '20px',
                  maxWidth: '800px',
                }}
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html: post.body.childMarkdownRemark.html,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

// class LiveIndex extends React.Component {
//   render() {
//     const siteTitle = get(this, 'props.data.site.siteMetadata.title')
//     const shows = get(this, 'props.data.allContentfulLivePerformance.edges')
//     const songs = shows.setListSongs
//     const isTabletOrMobileDevice = useMediaQuery({
//       query: '(max-device-width: 1224px)',
//     })

//     return (
//       <Layout location={this.props.location}>
//         <div>
//           <Helmet title={siteTitle} />
//           <div className="wrapper">
//             <h2 className="section-headline"> live </h2>
//             <div>
//               {shows.map(({ node }) => {
//                 console.log(node.setListSongs && node.setListSongs.join(' '))
//                 const shortMonths = [
//                   'Jan',
//                   'Feb',
//                   'Mar',
//                   'Apr',
//                   'May',
//                   'Jun',
//                   'Jul',
//                   'Aug',
//                   'Sep',
//                   'Oct',
//                   'Nov',
//                   'Dec',
//                 ]

//                 return (
//                   <div key={node.slug} className={styles.setlistPreview}>
//                     <div
//                       className={`${styles.condensed} + ${styles.dateBlock}`}
//                     >
//                       <span className={styles.month}>
//                         {shortMonths[new Date(node.date).getMonth()]}
//                       </span>
//                       <span className={styles.day}>
//                         {new Date(node.date).getDate()}
//                       </span>
//                       <span className={styles.year}>
//                         {new Date(node.date).getFullYear()}
//                       </span>
//                     </div>
//                     <div
//                       className={styles.details}
//                       style={{
//                         maxWidth: isTabletOrMobileDevice ? '300px' : '800px',
//                       }}
//                     >
//                       <Link to={`/live/${node.slug}`}>
//                         {node.venue} {node.citystatecountry}
//                       </Link>
//                       <div
//                         style={{
//                           color: '#9c1f2e',
//                           fontStyle: 'italic',
//                           textOverflow: 'ellipsis',
//                           whiteSpace: 'nowrap',
//                           overflow: 'hidden',
//                           display: 'block',
//                         }}
//                       >
//                         {node.setListSongs
//                           ? node.setListSongs.map(song => (
//                               <span style={{ marginRight: '5px' }}>
//                                 {/* <Link to={`/song/${song.slug}`}> */}
//                                 {song.songTitle}
//                                 {/* </Link> */}
//                               </span>
//                             ))
//                           : null}
//                       </div>
//                     </div>
//                   </div>
//                 )
//               })}
//             </div>
//           </div>
//         </div>
//       </Layout>
//     )
//   }
// }

export default VoteBernieIndex

export const pageQuery = graphql`
  query VoteBernieIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBlogPost(id: { eq: "54a84a48-a7f3-57b2-affd-46f4dd837c0e" }) {
      title
      slug
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 600, resizingBehavior: SCALE) {
          tracedSVG
          aspectRatio
          src
          srcSet
          sizes
        }
      }
      description {
        childMarkdownRemark {
          html
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
