import * as React from "react";
import IAudioPlayer from "./IAudioPlayer";

import "./AudioPlayer.css";


const AudioPlayer = (props: IAudioPlayer) => (
  <div className="player">
    <div className="player__first-line">
      <div className="player__albumcover"><img src={props.albumcover} /></div>
      <div className="player__right-block">
        <div className="player__track">{props.artist + ' - ' + props.track.name}</div>
        <div className="player__bottom-part">
          <input type="range" className="player__time-range" />
          <div className="player__length">{props.track.length}</div>
        </div>
      </div>
    </div>
    <div className="player__second-line">
      <div className="player__buttons">
        <img src="assets/icons/Prev.svg" />
        <img src="assets/icons/Next.svg" />
      </div>
      <input type="range" className="player__volume-range" />
      <div className="player__volume">{props.volume}%</div>
    </div>
  </div>
);

export default AudioPlayer;
