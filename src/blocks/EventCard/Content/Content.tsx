import * as React from "react";
import AudioPlayer from "../../AudioPlayer/AudioPlayer";
import DialogButton from "../../DialogButton/DialogButton";

import "./Content.css";


interface IContent {
  description: string | null;
  icon: string;
  data: any;
}

const Content = (props: IContent) => (
  <div className="Event-Content">
    {props.description && <div className="Event-Description">{props.description}</div>}
    {
      props.icon === "thermal" &&
      <div className="Event-Status">
        <div className="Event-Param">
          <span className="Event-ParamName">Температура:</span>
          <span className="Event-ParamValue">{props.data.temperature} C</span>
        </div>
        <div className="Event-Param">
          <span className="Event-ParamName">Влажность:</span>
          <span className="Event-ParamValue">{props.data.humidity}%</span>
        </div>
      </div>
    }
    {
      props.icon === "stats" &&
      <div className="Event-Image">
        <img src="assets/Richdata.svg" />
      </div>
    }
    {
      (props.data && props.data.image) &&
      <div className="Event-Image">
        <img src="assets/robot-cleaner.png"
             srcSet="assets/robot-cleaner@3x.png 3x,
                        assets/robot-cleaner@2x.png 2x,
                        assets/robot-cleaner.png 1x" />
      </div>
    }
    {
      props.icon === "music" &&
      <AudioPlayer albumcover={props.data.albumcover}
                   artist={props.data.artist}
                   track={props.data.track}
                   volume={props.data.volume} />
    }
    {
      (props.data && props.data.buttons) &&
      <div className="Event-DialogBtns">
        {props.data.buttons.map((button:string, i:number) =>
          <DialogButton key={i}  name={button}>
            {props.data.buttons[i]}
          </DialogButton>)}
        {/*<button className="dialog-btn secondary">{props.data.buttons[i]}</button>*/}
      </div>
    }
  </div>
);

export default Content;
