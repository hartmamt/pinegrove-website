import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { useMediaQuery } from 'react-responsive'
import { pinegroveGrid } from '../helpers/pinegroveGridBuilder'

export default ({ links, gridLocations }) => {
  pinegroveGrid.forEach((location, index) => {
    pinegroveGrid[index].link = links[index]
  })

  return (
    <div id="square-container" data-aos="fade" data-aos-delay="200">
      {pinegroveGrid.map(element => {
        //console.log(element.link.image.src)
        if (element.link) {
          if (element.link.location.includes('http')) {
            return (
              <a
                className={`square ${element.color}`}
                href={element.link.location}
                key={element.link.location}
              >
                <div className="square-text">{element.link.text}</div>
              </a>
            )
          }
          return (
            <Link
              className={`square ${element.color}`}
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
                <div className="square-text">{element.link.text}</div>
              )}
            </Link>
          )
        } else {
          return (
            <div className={`square ${element.color}`}>
              {' '}
              <div className="square-text"> </div>
            </div>
          )
        }
      })}
    </div>
  )
}
