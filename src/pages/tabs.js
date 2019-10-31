import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import PinegroveGrid from '../components/pinegrove-grid'
import AlbumPreview from '../components/album-preview'

import tabStyles from './tabs.module.css'

class TabsIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const tabs = get(this, 'props.data.allContentfulSong.edges')

    const links = tabs.map(tab => ({
      location: undefined,
      text: (
        <div className={tabStyles.tab}>
          <a className={tabStyles.tab} href={tab.node.tabView.file.url}>
            {tab.node.songTitle}
          </a>{' '}
          <br />
          <a
            className={tabStyles.tab}
            style={{ fontSize: 'small', textDecoration: 'none' }}
            href={tab.node.tabPrint.file.url}
          >
            print
          </a>
        </div>
      ),
    }))

    return (
      <Layout location={this.props.location}>
        <div>
          <Helmet title={siteTitle} />
          <header data-aos="fade">
            <h1>guitar tabs</h1>
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
          <PinegroveGrid links={links} />
        </div>
      </Layout>
    )
  }
}

export default TabsIndex

export const pageQuery = graphql`
  query TabsIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulSong(
      filter: { tabPrint: { file: { url: { ne: null } } } }
      sort: { fields: songTitle }
    ) {
      edges {
        node {
          songTitle
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
        }
      }
    }
  }
`
