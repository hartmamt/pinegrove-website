import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './album-preview.module.css'

export default ({ album }) => (
  <div className={styles.preview}>
    <Img alt="" fluid={album.albumCover.fluid} />{' '}
    <h3 className={styles.previewTitle}>
      <Link to={`/album/${album.slug}`}> {album.title} </Link>{' '}
    </h3>{' '}
    <small> {album.releasedate} </small>{' '}
  </div>
)
