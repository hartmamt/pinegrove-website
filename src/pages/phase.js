import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import ReactPlayer from 'react-player'

let links = [{ location: '/tour/all/', text: 'all' }]

const compare = function(a, b) {
  return parseInt(b.text) - parseInt(a.text)
}

class PhaseIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <div>
          <header data-aos="fade">
            <h1>phase</h1>
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
            className="container"
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <ReactPlayer
              url="https://www.youtube.com/watch?v=Ad8BabV7oLg"
              playing
            />
          </div>
        </div>
      </Layout>
    )
  }
}

export default PhaseIndex

export const pageQuery = graphql`
  query PhaseIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
