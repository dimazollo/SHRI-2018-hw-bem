import * as React from "react";
import MenuItem from "../MenuItem/MenuItem";
import IFooterMenu from "./IFooterMenu";

import "./FooterMenu.css";


export default class FooterMenu extends React.Component<IFooterMenu> {

  public render() {
    return (
      <ul className="Footer-FooterMenu">
        {
          this.props.menuItems.map(item => (
            <MenuItem
              key={item.text}
              href={item.href}
              download={item.download}
              text={item.text}
            />
          ))
        }
      </ul>
    );
  }
}
