import React from 'react'
import { Link, graphql } from 'gatsby'
import { useMediaQuery } from 'react-responsive'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './live.module.css'
import Layout from '../components/layout'
import AlbumPreview from '../components/album-preview'

const LiveIndex = props => {
  console.log('prop', props)
  const siteTitle = get(props, 'data.site.siteMetadata.title')
  const shows = get(props, 'data.allContentfulLivePerformance.edges')
  const songs = shows.setListSongs
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)',
  })

  return (
    <Layout location={props.location}>
      <div>
        <Helmet title={siteTitle} />{' '}
        <div className="wrapper">
          <h2 className="section-headline"> live </h2>{' '}
          <div className="col s12 m6">
            <div className="center-align">
              <h1> TOUR </h1>{' '}
            </div>{' '}
            <a
              className="bit-widget-initializer"
              data-artist-name="Pinegrove"
              data-display-local-dates="false"
              data-display-past-dates="false"
              data-auto-style="false"
              data-text-color="#334e5b"
              data-link-color="#bf0000"
              data-background-color="rgba(0,0,0,0)"
              data-display-limit="7"
              data-link-text-color="#FFFFFF"
              data-display-lineup="false"
              data-display-play-my-city="false"
              data-separator-color="rgba(124,124,124,0.25)"
            ></a>
          </div>
        </div>{' '}
      </div>{' '}
    </Layout>
  )
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

export default LiveIndex

export const pageQuery = graphql`
  query LiveIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulLivePerformance(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          venue
          slug
          date
          citystatecountry
          setListSongs {
            songTitle
            slug
          }
        }
      }
    }
  }
`
