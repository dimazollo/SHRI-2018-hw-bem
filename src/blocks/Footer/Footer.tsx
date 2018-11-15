import * as React from "react";

import ILink from "../Link/ILink";
import Copyright from "./Copyright/Copyright";
import FooterMenu from "./FooterMenu/FooterMenu";

import "./Footer.css";


interface IFooterState {
  menuItems: ILink[];
}

class Footer extends React.Component<{}, IFooterState> {
  public readonly state = {
    menuItems: [
      {text: "Помощь", href: "#", download: false},
      {text: "Обратная связь", href: "#", download: false},
      {text: "Разработчикам", href: "#", download: false},
      {text: "Условия использования", href: "#", download: false},
      {text: "Авторские права", href: "assets/license.pdf", download: true}
    ]
  };

  public render() {
    return (
      <footer className="Footer">
        <FooterMenu menuItems={this.state.menuItems}/>
        <Copyright />
      </footer>
    );
  }
}

export default Footer;
