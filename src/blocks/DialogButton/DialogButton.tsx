import { cn } from "@bem-react/classname";
// import { withBemMod } from "@bem-react/core";
import * as React from "react";

import "./DialogButton.css";

const cnDialogButton = cn("DialogButton");

interface IDialogButtonProp {
  name: string;
}

const DialogButton = (props: IDialogButtonProp) => (
  <button className={cnDialogButton({priority: "primary"})}>{props.name}</button>
);

export default DialogButton;
