import * as React from "react";
import FooterMenuItem from "../MenuItem/Footer-MenuItem";
import IFooterMenuProps from "./IFooterMenuProps";

import "./Footer-Menu.css";


export default class FooterMenu extends React.Component<IFooterMenuProps> {
  public render() {
    return (
      <ul className="Footer-Menu">
        {
          this.props.menuItems.map(item => (
            <FooterMenuItem
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
