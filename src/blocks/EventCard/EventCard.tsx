import { cn } from "@bem-react/classname";
import * as React from "react";
import { ISmartHouseEvent } from "../../interfaces/interfaces";
import EventCardContent from "./Content/EventCard-Content";
import EventCardHeader from "./Header/EventCard-Header";

import "./EventCard.css";

const cnEventCard = cn('EventCard');


class EventCard extends React.Component<ISmartHouseEvent> {
  public render() {
    const isCritical = this.props.type === 'critical';
    const iconColor = isCritical ? 'white' : 'black';
    const hasContent = Boolean(this.props.data || this.props.description);

    const tileSizeStyleMap: { [key: string]: string } = {
      l: 'large',
      m: 'medium',
      s: 'small',
    };
    const sizeMod: string = tileSizeStyleMap[this.props.size];


    return (
      <div className={cn("EventsGrid", "EventCard")({size: sizeMod, critical: isCritical})}>
        <div className={cnEventCard("ControlBtn", {position: "top"})}>
          <img src="assets/icons/cross-black.svg" alt="Закрыть событие"/>
        </div>
        <div className={cnEventCard("ControlBtn", {position: "bottom"})}>
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
