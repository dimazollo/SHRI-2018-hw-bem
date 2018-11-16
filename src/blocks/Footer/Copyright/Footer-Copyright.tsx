import { cn } from "@bem-react/classname";
import * as React from "react";

import "./Footer-Copyright.css";


const cnCopyright = cn("Footer", "Copyright");

const FooterCopyright = () => (
  <span className={cnCopyright()}>&copy;&thinsp;2001-2018 ООО &laquo;Яндекс&raquo;</span>
);

export default FooterCopyright;
