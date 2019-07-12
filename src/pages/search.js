import React from 'react'
import algoliasearch from 'algoliasearch/lite'
import {
  InstantSearch,
  SearchBox,
  Hits,
  Highlight,
} from 'react-instantsearch-dom'

import Layout from '../components/layout'
const algoliaClient = algoliasearch(
  '6NF0KDY4N8',
  '188098fe61bba35afac37b81957d07b7'
)

const searchClient = {
  search(requests) {
    const shouldSearch = requests.some(({ params: { query } }) => query !== '')
    if (shouldSearch) {
      return algoliaClient.search(requests)
    }
    return Promise.resolve({
      results: [{ hits: [] }],
    })
  },
  searchForFacetValues: algoliaClient.searchForFacetValues,
}

const Hit = function(props) {
  console.log(props)
  return (
    <div>
      {/* <img src={props.hit.image} align="left" alt={props.hit.name} /> */}
      <div>{props.hit.songTitle}</div>
      <div className="hit-description">
        <pre>{props.hit.lyrics.content[0].content[0].value}</pre>
      </div>
    </div>
  )
}

class SearchPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <div
          style={{
            background: '#fff',
          }}
        >
          <InstantSearch
            searchClient={searchClient}
            indexName="song"
            autoSearch={false}
          >
            <SearchBox />
            <Hits hitComponent={Hit} />
          </InstantSearch>
        </div>
      </Layout>
    )
  }
}

export default SearchPage
