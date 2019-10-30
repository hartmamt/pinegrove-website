import React from 'react'
import { Link, graphql } from 'gatsby'
import { useMediaQuery } from 'react-responsive'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './live.module.css'
import Layout from '../components/layout'
import AlbumPreview from '../components/album-preview'

class MailingListIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bandsInTownReady: false,
    }
    // const isTabletOrMobileDevice = useMediaQuery({
    //   query: '(max-device-width: 1224px)',
    // })
  }

  render() {
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <div>
          <Helmet title={siteTitle} />
          <div className="wrapper">
            <header data-aos="fade">
              <h1>mailing list</h1>
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
            <div>
              {/* Begin Mailchimp Signup Form */}
              <link
                href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css"
                rel="stylesheet"
                type="text/css"
              />
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html:
                    '\n\t#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }\n\t/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.\n\t   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */\n',
                }}
              />
              <style
                type="text/css"
                dangerouslySetInnerHTML={{
                  __html:
                    '\n\t#mc-embedded-subscribe-form input[type=checkbox]{display: inline; width: auto;margin-right: 10px;}\n\t#mergeRow-gdpr {margin-top: 20px;}\n\t#mergeRow-gdpr fieldset label {font-weight: normal;}\n\t#mc-embedded-subscribe-form .mc_fieldset{border:none;min-height: 0px;padding-bottom:0px;}\n',
                }}
              />
              <div id="mc_embed_signup" style={{ backgroundColor: '#68c3dc' }}>
                <form
                  action="https://pinegroveband.us14.list-manage.com/subscribe/post?u=eeb342c8dbf9ad87f7228ace0&id=8b3a4f19d2"
                  method="post"
                  id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                  className="validate"
                  target="_blank"
                  noValidate
                >
                  <div id="mc_embed_signup_scroll">
                    <h2>Subscribe</h2>
                    <div className="indicates-required">
                      <span className="asterisk">*</span> indicates required
                    </div>
                    <div className="mc-field-group">
                      <label htmlFor="mce-EMAIL">
                        Email Address <span className="asterisk">*</span>
                      </label>
                      <input
                        type="email"
                        name="EMAIL"
                        className="required email"
                        id="mce-EMAIL"
                      />
                    </div>
                    <div className="mc-field-group">
                      <label htmlFor="mce-FNAME">First Name </label>
                      <input
                        type="text"
                        name="FNAME"
                        className
                        id="mce-FNAME"
                      />
                    </div>
                    <div className="mc-field-group">
                      <label htmlFor="mce-LNAME">Last Name </label>
                      <input
                        type="text"
                        name="LNAME"
                        className
                        id="mce-LNAME"
                      />
                    </div>
                    <div
                      id="mergeRow-gdpr"
                      className="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group"
                    >
                      <div className="content__gdpr">
                        <label>Email signup</label>
                        <p>Click below to approve emails</p>
                        <fieldset
                          className="mc_fieldset gdprRequired mc-field-group"
                          name="interestgroup_field"
                        >
                          <label
                            className="checkbox subfield"
                            htmlFor="gdpr_10303"
                          >
                            <input
                              type="checkbox"
                              id="gdpr_10303"
                              name="gdpr[10303]"
                              defaultValue="Y"
                              className="av-checkbox gdpr"
                            />
                            <span>Email</span>{' '}
                          </label>
                        </fieldset>
                        <p>
                          You can unsubscribe at any time by clicking the link
                          in the footer of our emails. For information about our
                          privacy practices, please visit our website.
                        </p>
                      </div>
                      <div className="content__gdprLegal">
                        <p>
                          We use Mailchimp as our marketing platform. By
                          clicking below to subscribe, you acknowledge that your
                          information will be transferred to Mailchimp for
                          processing.{' '}
                          <a
                            href="https://mailchimp.com/legal/"
                            target="_blank"
                          >
                            Learn more about Mailchimp's privacy practices here.
                          </a>
                        </p>
                      </div>
                    </div>
                    <div id="mce-responses" className="clear">
                      <div
                        className="response"
                        id="mce-error-response"
                        style={{ display: 'none' }}
                      />
                      <div
                        className="response"
                        id="mce-success-response"
                        style={{ display: 'none' }}
                      />
                    </div>{' '}
                    {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                    <div
                      style={{ position: 'absolute', left: '-5000px' }}
                      aria-hidden="true"
                    >
                      <input
                        type="text"
                        name="b_eeb342c8dbf9ad87f7228ace0_8b3a4f19d2"
                        tabIndex={-1}
                        defaultValue
                      />
                    </div>
                    <div className="clear">
                      <input
                        style={{ backgroundColor: '#e92026' }}
                        type="submit"
                        defaultValue="Subscribe"
                        name="subscribe"
                        id="mc-embedded-subscribe"
                        className="button"
                      />
                    </div>
                  </div>
                </form>
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

export default MailingListIndex

export const pageQuery = graphql`
  query MailingListIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
