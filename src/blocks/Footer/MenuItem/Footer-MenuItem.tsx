import { cn } from "@bem-react/classname";
import * as React from "react";
import ILink from "../../Link/ILink";
import Link from "../../Link/Link";

import "./Footer-MenuItem.css";


const cnFooterMenuItem = cn("Footer", "MenuItem");

const FooterMenuItem = (props: ILink) => (
  <li className={cnFooterMenuItem()}>
    <Link
      href={props.href}
      download={props.download}
      text={props.text}
    />
  </li>
);

export default FooterMenuItem;
