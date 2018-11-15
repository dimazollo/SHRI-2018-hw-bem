import { compose } from "@bem-react/core";
import * as React from "react";

import { DialogButtonPriorityPrimary, DialogButtonPrioritySecondary } from "./_priority";
import IDialogButtonProps from "./IDialogButtonProps";

import "./DialogButton.css";


const DialogButton = ({text, className}:IDialogButtonProps) => {
  return (
    <button type="button" className={className}>{text}</button>
  );
};

export default compose(
  DialogButtonPriorityPrimary,
  DialogButtonPrioritySecondary
)(DialogButton);
