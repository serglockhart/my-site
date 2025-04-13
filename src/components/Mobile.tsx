import React from "react"
import Img from "gatsby-image"
import { Atropos } from "atropos/react/atropos-react.esm"

const Mobile = (props: {
  isVideo: boolean
  image: string
  imageBackup: string
  imageAlt: string
  vid: string
  vidAlt: string
  vidBackup: string
  vidBackupAlt: string
}) => {
  if (props.isVideo) {
    return (
      <Atropos rotateTouch="scroll-y" rotateXMax={24} rotateYMax={24}>
        <div className="mobile mobile-screenshot" data-atropos-offset="8">
          <div className="side">
            <div className="screen">
              <video autoPlay loop muted playsInline>
                <source
                  autoPlay
                  loop
                  muted
                  playsInline
                  src={props.vid}
                  alt={props.vidAlt}
                  type='video/webm; codecs="vp8, vorbis"'
                />
                <source
                  autoPlay
                  loop
                  muted
                  playsInline
                  src={props.vidBackup}
                  alt={props.vidBackupAlt}
                  type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
                />
              </video>
            </div>
          </div>
          <div className="line" />
          <div className="header" />
          <div className="volume-button" />
          <div className="power-button" />
        </div>
      </Atropos>
    )
  } else {
    return (
      <Atropos rotateTouch="scroll-y" rotateXMax={24} rotateYMax={24}>
        <div className="mobile mobile-screenshot" data-atropos-offset="8">
          <picture className="img-fluid">
            <source srcSet={props.image} type="image/webp" />
            <Img
              fluid={props.imageBackup}
              alt={props.imageAlt}
              aria-label={props.imageAlt}
              className="img-fluid"
            />
          </picture>
        </div>
      </Atropos>
    )
  }
}

export default Mobile
