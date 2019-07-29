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
          <ul
            className={styles.navigation}
            style={{ height: '5vh', fontSize: '40px', paddingTop: '8px' }}
          >
            <li className={styles.navigationItem}>
              <Link to="/" style={{ textDecoration: 'none' }}>
                amperland
              </Link>
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
            <a href={'https://amperland.gokinjo.space/'} className="menu-item">
              community
            </a>
            <Link to="/search/" className="menu-item">
              search
            </Link>
            {/* <a onClick={showSettings} className="menu-item--small" href="">
              Settings
            </a> */}
          </Menu>
        ) : (
          <div>
            <ul className={styles.navigation} style={{ height: '20px' }}>
              <li className={styles.navigationItem}>
                <Link to="/press/" style={{ textDecoration: 'none' }}>
                  {' '}
                  press{' '}
                </Link>{' '}
              </li>
              <li className={styles.navigationItem}>
                <Link to="/live/" style={{ textDecoration: 'none' }}>
                  {' '}
                  live{' '}
                </Link>{' '}
              </li>
              <li className={styles.navigationItem}>
                <Link to="/albums/" style={{ textDecoration: 'none' }}>
                  {' '}
                  recorded{' '}
                </Link>{' '}
              </li>
              <li className={styles.navigationItem}>
                <a
                  href={'https://amperland.gokinjo.space/'}
                  style={{ textDecoration: 'none' }}
                >
                  community
                </a>
              </li>
              <li className={styles.navigationItem}>
                <Link to="/search/" style={{ textDecoration: 'none' }}>
                  {' '}
                  search{' '}
                </Link>{' '}
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}
