import React from 'react'
import { Link } from 'gatsby'
import get from 'lodash/get'
import algoliasearch from 'algoliasearch/lite'

import Helmet from 'react-helmet'
import Hero from '../components/hero'
import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
  Panel,
  RefinementList,
  Index,
  PoweredBy,
  Snippet,
} from 'react-instantsearch-dom'

//import 'instantsearch.css/themes/reset.css'
// include the full Algolia theme
//import 'instantsearch.css/themes/algolia.css'

import './search.css'

import Layout from '../components/layout'
const algoliaClient = algoliasearch(
  '6NF0KDY4N8',
  '188098fe61bba35afac37b81957d07b7'
)

const searchClient = {
  search(requests) {
    const newRequests = requests.map(request => {
      // test for empty string and do not trigger search if true
      if (!request.params.query || request.params.query.length === 0) {
        return
      }
      return request
    })
    return algoliaClient.search(newRequests)
  },
}

// const searchClient = {
//   search(requests) {
//     const shouldSearch = requests.some(({ params: { query } }) => query !== '')
//     if (shouldSearch) {
//       return algoliaClient.search(requests)
//     }
//     return Promise.resolve({
//       results: [{ hits: [] }],
//     })
//   },
//   searchForFacetValues: algoliaClient.searchForFacetValues,
// }

const SongHits = function(props) {
  return (
    <div>
      {/* <img src={props.hit.image} align="left" alt={props.hit.name} /> */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          minWidth: '300px',
        }}
      >
        <div
          style={{
            minWidth: '100px',
            display: 'flex',
            flexDirection: 'column',
            padding: '10px',
          }}
        >
          <div style={{ width: '100px' }}>
            <Link to={`/album/${props.hit.album[0].slug}`}>
              <img src={props.hit.album[0].alumbCoverUrl} />
            </Link>
          </div>
        </div>
        <div style={{ padding: '10px' }}>
          <Link to={`/song/${props.hit.slug}`}> {props.hit.songTitle}</Link>
          <br />
          <Snippet
            attribute={'lyrics.json.content.0.content.0.value'}
            hit={props.hit}
          />
        </div>
      </div>
      {/* <div className="hit-description">
        <pre>{props.hit.lyrics.content[0].content[0].value}</pre>
      </div> */}
    </div>
  )
}

const AlbumHits = function(props) {
  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', minWidth: '300px' }}>
        <div
          style={{
            minWidth: '100px',
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center',
            justifyContent: 'center',
            padding: '10px',
          }}
        >
          <div style={{ width: '100px' }}>
            <img src={props.hit.alumbCoverUrl} />
          </div>
          {/*<div style={{ width: '100px' }}>{props.hit.songTitle}</div> */}
        </div>
        <div style={{ padding: '10px' }}>
          <Link to={`/song/${props.hit.slug}`}> {props.hit.title} </Link>
        </div>
      </div>
      {/* <div className="hit-description">
        <pre>{props.hit.lyrics.content[0].content[0].value}</pre>
      </div> */}
    </div>
  )
}

class SearchPage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <div>
          <Helmet title={siteTitle} />
          <header data-aos="fade">
            <h1>search</h1>
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
          <InstantSearch
            searchClient={searchClient}
            indexName="songs"
            autoSearch={false}
          >
            <SearchBox />
            <PoweredBy />
            <Index indexName="songs">
              <Hits hitComponent={SongHits} />
            </Index>
          </InstantSearch>
        </div>
      </Layout>
    )
  }
}

export default SearchPage

export const pageQuery = graphql`
  query SearchQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
