import { cn } from "@bem-react/classname";
import * as React from 'react';
import { IHeaderState } from "./IHeader";

import "./Header.css";


const cnHeader = cn("Header");

class Header extends React.Component<{}, IHeaderState> {
  public readonly state = {
    menuItems: ["События", "Сводка", "Устройства", "Сценарии"]
  };

  public render() {
    return (
      <div className={cnHeader()}>
        <header className={cnHeader("Content")}>
          <div className={cnHeader("Logo")}>
            <img src="assets/yandex_house.svg" alt="Яндекс Дом"/>
          </div>
          <div className={cnHeader("MenuToggle")}>
            <img src="assets/icons/icon_list_m.svg" alt="Menu"/>
          </div>
          <nav>
            <ul className={cnHeader("Menu")}>
              {this.state.menuItems.map((item, i) => (
                <li key={item} className={cnHeader("MenuItem", {active: i === 0})}>{item}</li>
              ))}
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
