import * as React from "react";
import { ISmartHouseEvent } from "../../interfaces/interfaces";
import EventCard from "../EventCard/EventCard";

import "./EventsBoard.css";


interface IEventsBoard {
  events: ISmartHouseEvent[]
}

class EventsBoard extends React.Component<IEventsBoard> {
  public render() {
    return (
      <div className="EventsBoard">
        <div className="EventsBoard-Container">
          <div className="EventsBoard-Header">Лента событий</div>
          <div className="EventsBoard-Grid">
            {/* Event tiles should be inserted here */}
            { this.props.events.map(eventData => <EventCard key={eventData.id} {...eventData}/>) }
          </div>
        </div>
      </div>
    );
  }
}

export default EventsBoard;
