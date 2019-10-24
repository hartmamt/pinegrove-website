import React from 'react'
import { Link } from 'gatsby'
import { useMediaQuery } from 'react-responsive'
import { pinegroveGridDesktop, pinegroveGridMobile }from '../helpers/pinegroveGridBuilder'

export default ({links, desktopLocations, mobileLocations}) => {
    const isMobileDevice = useMediaQuery({
        query: '(max-device-width: 900px)',
    })

    desktopLocations.forEach((location, index) => {
        pinegroveGridDesktop[location].link = links[index];
    });

    mobileLocations.forEach((location, index) => {
        pinegroveGridMobile[location].link = links[index];
    });

    return (
        <div className={isMobileDevice ? 'pinegrove-grid-mobile' : 'pinegrove-grid'}>
        {isMobileDevice ?
          (pinegroveGridMobile.map((element) => {
            if (element.link) {
                if(element.link.location.includes('http')) {
                    return (
                        <a className={`pinegrove-grid-link ${element.type}`} href={element.link.location}>
                           <img src={element.image} />
                           <h3 className='pinegrove-grid-link-text'>{element.link.text}</h3>
                        </a>
                    )
                }
                return (
                    <Link className={`pinegrove-grid-link ${element.type}`} to={element.link.location}>
                       <img src={element.image} />
                       <h3 className='pinegrove-grid-link-text'>{element.link.text}</h3>
                    </Link>
                )
            } else {
              return (<img src={element.image} />)
            }
          })) :
          (pinegroveGridDesktop.map((element, index) => {
            if (element.link) {
                if(element.link.location.includes('http')) {
                    return (
                        <a className={`pinegrove-grid-link ${element.type}`} href={element.link.location}>
                           <img src={element.image} />
                           <h3 className='pinegrove-grid-link-text'>{element.link.text}</h3>
                        </a>
                    )
                }
                return (
                    <Link className={`pinegrove-grid-link ${element.type}`} to={element.link.location}>
                       <img src={element.image} />
                       <h3 className='pinegrove-grid-link-text'>{element.link.text}</h3>
                    </Link>
                )
            } else {
              return (<img src={element.image} />)
            }
          }))
        }
        </div>
    )
  }
