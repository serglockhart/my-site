import React from "react"

import "./Browser.css"

const Browser = props => {
  if (props.image === "") {
    return (
      <div class="browser-screenshot">
        <div class="top">
          <span class="circle"></span>
          <span class="circle"></span>
          <span class="circle"></span>
        </div>
        <div className="screen">
          <video autoplay="true" loop="true" muted="true" playsinline="true">
            <source
              src={props.vid}
              alt={props.vidAlt}
              type='video/webm; codecs="vp8, vorbis"'
            />
            <source
              src={props.vidBackup}
              alt={props.vidBackupAlt}
              type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
            />
          </video>
        </div>
      </div>
    )
  } else {
    return (
      <div class="browser-screenshot">
        <div class="top">
          <span class="circle"></span>
          <span class="circle"></span>
          <span class="circle"></span>
        </div>
        <picture className="img-fluid">
          <source srcset={props.image} type="image/webp" />
          <img
            src={props.imageBackup}
            alt={props.imageAlt}
            aria-label={props.imageAlt}
            className="img-fluid"
          />
        </picture>
      </div>
    )
  }
}

export default Browser
