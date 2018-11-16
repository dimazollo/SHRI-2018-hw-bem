import { cn } from "@bem-react/classname";
import * as React from "react";
import IAudioPlayer from "./IAudioPlayer";

import "./AudioPlayer.css";

const cnAudioPlayer = cn("AudioPlayer");


const AudioPlayer = (props: IAudioPlayer) => (
  <div className={cnAudioPlayer()}>
    <div className={cnAudioPlayer("FirstLine")}>
      <div className={cnAudioPlayer("AlbumCover")}><img src={props.albumcover} /></div>
      <div className={cnAudioPlayer("RightPart")}>
        <div className={cnAudioPlayer("Track")}>{props.artist + ' - ' + props.track.name}</div>
        <div className={cnAudioPlayer("BottomPart")}>
          <input type="range" className={cnAudioPlayer("TimeRange")} />
          <div className={cnAudioPlayer("Length")}>{props.track.length}</div>
        </div>
      </div>
    </div>
    <div className={cnAudioPlayer("SecondLine")}>
      <div className={cnAudioPlayer("Buttons")}>
        <img src="assets/icons/Prev.svg" />
        <img src="assets/icons/Next.svg" />
      </div>
      <input type="range" className={cnAudioPlayer("VolumeRange")} />
      <div className={cnAudioPlayer("Volume")}>{props.volume}%</div>
    </div>
  </div>
);

export default AudioPlayer;
