import * as React from "react";
import IHeader from "./IHeader";


const Header = (props: IHeader) => {
  const myStyle: React.CSSProperties = {

  };

  return (
    <div className="Event-Header" style={myStyle}>
      <div className="Header-Title">
        <div className="Header-Icon">
          <img src={"assets/icons/" + props.icon + "-" + props.iconColor + ".svg"}/>
        </div>
        <div className="Header-Text">{props.title}</div>
      </div>
      <div className="Header-Status">
        <div className="Header-Source">{props.source}</div>
        <div className="Header-Datetime">{props.time}</div>
      </div>
    </div>
  );
};

export default Header;
