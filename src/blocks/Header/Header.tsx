import * as React from 'react';

import "./Header.css";


class Header extends React.Component {
  public render() {
    return (
      <div className="Header">
        <header className="Header-Content">
          <div className="Header-Logo">
            <img src="assets/yandex_house.svg" alt="Яндекс Дом"/>
          </div>
          <div className="Header-MenuToggle">
            <img src="assets/icons/icon_list_m.svg" alt="Menu"/>
          </div>
          <nav>
            <ul className="Header-HeaderMenu">
              <li className="HeaderMenu-MenuItem HeaderMenu-MenuItem_active">События</li>
              <li className="HeaderMenu-MenuItem">Сводка</li>
              <li className="HeaderMenu-MenuItem">Устройства</li>
              <li className="HeaderMenu-MenuItem">Сценарии</li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
