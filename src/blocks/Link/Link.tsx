import * as React from "react";
import ILink from "./ILink";

import "./Link.css";


const Link = (props: ILink) => (
  // TODO - спросить у Димы как быть в этом случае.
  // Здесь не хочется передавать этот className в этот блок, но приходится
  <a className="Link" href={props.href} download={props.download}>{props.text}</a>
);

export default Link;
