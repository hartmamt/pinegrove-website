import React from 'react'
import { Link } from 'gatsby'
import { slide as Menu } from 'react-burger-menu'
import { useMediaQuery } from 'react-responsive'

import styles from './navigation.module.css'
import './hamburger.css'

export default () => {
  const showSettings = event => {
    event.preventDefault()
  }
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)',
  })
  return (
    <nav role="navigation">
      <div>
        <div>
          <ul className={styles.navigation}>
            <li className={styles.navigationItem}>
              <Link to="/"> amperland </Link>{' '}
            </li>
          </ul>
        </div>
        {isTabletOrMobileDevice ? (
          <Menu>
            <Link to="/" className="menu-item">
              home
            </Link>
            <Link to="/press/" className="menu-item">
              press
            </Link>
            <Link to="/live/" className="menu-item">
              live
            </Link>
            <Link to="/albums/" className="menu-item">
              recorded
            </Link>
            <Link to="/search/" className="menu-item">
              search
            </Link>
            {/* <a onClick={showSettings} className="menu-item--small" href="">
              Settings
            </a> */}
          </Menu>
        ) : (
          <div>
            <ul className={styles.navigation}>
              <li className={styles.navigationItem}>
                <Link to="/press/"> press </Link>{' '}
              </li>
              <li className={styles.navigationItem}>
                <Link to="/live/"> live </Link>{' '}
              </li>
              <li className={styles.navigationItem}>
                <Link to="/albums/"> recorded </Link>{' '}
              </li>
              <li className={styles.navigationItem}>
                <Link to="/search/"> search </Link>{' '}
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}
