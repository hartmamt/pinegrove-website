import React from 'react'
import { Link } from 'gatsby'
import { useMediaQuery } from 'react-responsive'
import { pinegroveGrid } from '../helpers/pinegroveGridBuilder'

export default ({ links, gridLocations }) => {
  // gridLocations.forEach((location, index) => {
  //   pinegroveGrid[location].link = links[index]
  // })

  return (
    <div id="square-container" data-aos="fade" data-aos-delay="200">
      {pinegroveGrid.map(element => {
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
            >
              {/* <img src={element.image} /> */}
              <div className="square-text">{element.link.text}</div>
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
