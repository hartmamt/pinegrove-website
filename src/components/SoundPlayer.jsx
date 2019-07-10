import React from 'react'
import ReactAudioPlayer from 'react-audio-player'
// audio source
const streamUrl = 'https://example.org/path/to/file.mp3'

// some track meta information
const trackTitle = 'Great song by random artist'

const SoundPlayer = props => {
  const { trackTitle } = props

  return <ReactAudioPlayer autoPlay={false} src={props.streamUrl} controls />
}

export default SoundPlayer
