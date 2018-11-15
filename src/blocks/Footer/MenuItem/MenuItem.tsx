import * as React from "react";
import ILink from "../../Link/ILink";
import Link from "../../Link/Link";

import "./MenuItem.css";


const MenuItem = (props: ILink) => (
  <li className="Footer-MenuItem">
    <Link
      href={props.href}
      download={props.download}
      text={props.text}
    />
  </li>
);

export default MenuItem;
