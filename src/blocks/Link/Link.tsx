import { cn } from "@bem-react/classname";
import * as React from "react";
import ILink from "./ILink";

import "./Link.css";


const cnLink = cn("Link");

const Link = (props: ILink) => (
  <a className={cnLink()} href={props.href} download={props.download}>{props.text}</a>
);

export default Link;
