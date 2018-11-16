import { cn } from "@bem-react/classname";
import * as React from "react";
import FooterCopyright from "./Copyright/Footer-Copyright";
import FooterMenu from "./FooterMenu/Footer-Menu";
import { IFooterState } from "./IFooter";

import "./Footer.css";


const cnFooter = cn("Footer");

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
      <footer className={cnFooter()}>
        <FooterMenu menuItems={this.state.menuItems}/>
        <FooterCopyright />
      </footer>
    );
  }
}

export default Footer;
