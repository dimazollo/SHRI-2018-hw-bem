import { cn } from "@bem-react/classname";
import * as React from "react";
import IEventCardHeader from "./IEventCardHeaderProps";

import "./EventCard-Header.css";


const cnHeader = cn("Header");

const EventCardHeader = (props: IEventCardHeader) => {
  return (
    <div className={cn("EventCard", "Header")()}>
      <div className={cnHeader("Title")}>
        <div className={cnHeader("Icon")}>
          <img src={"assets/icons/" + props.icon + "-" + props.iconColor + ".svg"}/>
        </div>
        <div className={cnHeader("Text")}>{props.title}</div>
      </div>
      <div className={cnHeader("Status")}>
        <div className={cnHeader("Source")}>{props.source}</div>
        <div className={cnHeader("Datetime")}>{props.time}</div>
      </div>
    </div>
  );
};

export default EventCardHeader;
