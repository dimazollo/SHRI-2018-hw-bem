import { cn } from "@bem-react/classname";
import * as React from "react";
import EventCard from "../EventCard/EventCard";
import { IEventsBoardProps } from "./IEventsBoardProps";

import "./EventsBoard.css";


const cnEventsBoard = cn("EventsBoard");

class EventsBoard extends React.Component<IEventsBoardProps> {
  public render() {
    return (
      <div className={cnEventsBoard()}>
        <div className={cnEventsBoard("Container")}>
          <div className={cnEventsBoard("Header")}>Лента событий</div>
          <div className={cnEventsBoard("Grid")}>
            { this.props.events.map(eventData =>
              <EventCard key={eventData.id} {...eventData}/>) }
          </div>
        </div>
      </div>
    );
  }
}

export default EventsBoard;
