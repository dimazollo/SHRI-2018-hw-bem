// import { cn, classnames } from "@bem-react/classname";
import * as React from "react";
import { ISmartHouseEvent } from "../../interfaces/interfaces";
import EventCardContent from "./Content/EventCard-Content";
import EventCardHeader from "./Header/EventCard-Header";

import "./EventCard.css";

// const cnEventCard = cn('EventCard');


class EventCard extends React.Component<ISmartHouseEvent> {
  public render() {
    const isCritical = this.props.type === 'critical';
    const iconColor = isCritical ? 'white' : 'black';
    const hasContent = Boolean(this.props.data || this.props.description);

    const tileSizeStyleMap: { [key: string]: string } = {
      l: 'EventsGrid-Event_size_large',
      m: 'EventsGrid-Event_size_medium',
      s: 'EventsGrid-Event_size_small',
    };
    const sizeStyle: string = tileSizeStyleMap[this.props.size];


    return (
      <div className={"EventsGrid-Event " + (sizeStyle) + (isCritical ? " critical" : "")}>
        <div className="Event-ControlBtn Event-ControlBtn_position_top">
          <img src="assets/icons/cross-black.svg" alt="Закрыть событие"/>
        </div>
        <div className="Event-ControlBtn Event-ControlBtn_position_bottom">
          <img src="assets/icons/goto-black.svg" alt="Перейти к событию"/>
        </div>

        <EventCardHeader icon={this.props.icon}
                         title={this.props.title}
                         source={this.props.source}
                         time={this.props.time}
                         iconColor={iconColor}/>
        {
          hasContent &&
          <EventCardContent
            description={this.props.description}
            icon={this.props.icon}
            data={this.props.data}/>
        }
      </div>
    );
  }
}

export default EventCard;
