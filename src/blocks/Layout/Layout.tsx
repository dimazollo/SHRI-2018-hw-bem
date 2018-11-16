import { cn } from "@bem-react/classname";
import * as React from "react";
import {ISmartHouseEvent} from "../../interfaces/interfaces";
import EventsBoard from "../EventsBoard/EventsBoard";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

import * as eventsObject from "../../data/events.json";
import "./Layout.css";


const cnLayout = cn("Layout");

const App = () => {
  const events: ISmartHouseEvent[] = eventsObject.events;
  return (
    <div className={cnLayout()}>
      <Header />
      <EventsBoard events={events}/>
      <Footer/>
    </div>
  );
};

export default App;
