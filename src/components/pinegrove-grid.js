import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { useMediaQuery } from 'react-responsive'
import { pinegroveGrid } from '../helpers/pinegroveGridBuilder'

export default ({ links, squareTextStyle, colorOverride }) => {
  pinegroveGrid.forEach((location, index) => {
    pinegroveGrid[index].link = links[index]
  })

  return (
    <div id="square-container" data-aos="fade" data-aos-delay="200">
      {pinegroveGrid.map(element => {
        if (element.link) {
          if (element.link.location.includes('http')) {
            return (
              <a
                className={`square ${
                  colorOverride ? colorOverride : element.color
                }`}
                href={element.link.location}
                key={element.link.location}
              >
                <div className="square-text" style={squareTextStyle}>
                  {element.link.text}
                </div>
              </a>
            )
          }
          return (
            <Link
              className={`square ${
                colorOverride ? colorOverride : element.color
              }`}
              to={element.link.location}
              key={element.link.location}
              style={
                element.link.image
                  ? {
                      backgroundImage: 'url("' + element.link.image.src + '")',
                    }
                  : null
              }
            >
              {element.link.image ? null : (
                <div
                  className="square-text"
                  style={squareTextStyle ? squareTextStyle : null}
                >
                  {element.link.text}
                </div>
              )}
            </Link>
          )
        } else {
          return (
            <div
              className={`square ${
                colorOverride ? colorOverride : element.color
              }`}
            >
              {' '}
              <div className="square-text"> </div>
            </div>
          )
        }
      })}
    </div>
  )
}
