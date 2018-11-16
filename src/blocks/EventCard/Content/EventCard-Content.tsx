import { cn } from "@bem-react/classname";
import * as React from "react";
import AudioPlayer from "../../AudioPlayer/AudioPlayer";
import DialogButton from "../../DialogButton/DialogButton";
import IEventCardContentProps from "./IEventCardContentProps";

import "./EventCard-Content.css";


const cnEvent = cn("EventCard");

const EventCardContent = (props: IEventCardContentProps) => (
  <div className={cnEvent("Content")}>
    {props.description && <div className={cnEvent("Description")}>{props.description}</div>}
    {
      props.icon === "thermal" &&
      <div className={cnEvent("Status")}>
        <div className={cnEvent("Param")}>
          <span className={cnEvent("ParamName")}>Температура:</span>
          <span className={cnEvent("ParamValue")}>{props.data.temperature} C</span>
        </div>
        <div className={cnEvent("Param")}>
          <span className={cnEvent("ParamName")}>Влажность:</span>
          <span className={cnEvent("ParamValue")}>{props.data.humidity}%</span>
        </div>
      </div>
    }
    {
      props.icon === "stats" &&
      <div className={cnEvent("Image")}>
        <img src="assets/Richdata.svg"/>
      </div>
    }
    {
      (props.data && props.data.image) &&
      <div className={cnEvent("Image")}>
        <img src="assets/robot-cleaner.png"
             srcSet="assets/robot-cleaner@3x.png 3x,
                        assets/robot-cleaner@2x.png 2x,
                        assets/robot-cleaner.png 1x"/>
      </div>
    }
    {
      props.icon === "music" &&
      <AudioPlayer albumcover={props.data.albumcover}
                   artist={props.data.artist}
                   track={props.data.track}
                   volume={props.data.volume}/>
    }
    {
      (props.data && props.data.buttons) &&
      <div className={cnEvent("DialogBtns")}>
        {
          props.data.buttons.map((button: string, i: number) => {
            const className = cn("DialogButton")({priority: i===0 ? "primary": "secondary"});
            return <DialogButton key={i} className={className} text={button}/>
          })
        }
      </div>
    }
  </div>
);

export default EventCardContent;
