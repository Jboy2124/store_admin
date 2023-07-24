import React, { useEffect, useState } from "react";
import RedirectRoute from "./RedirectRoute";

const RouteProtection = ({ children }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const id = sessionStorage.getItem("id");
    if (id) setShow(true);
    else setShow(false);
  }, [children]);

  console.log("show value: ", show);
  return show ? children : <RedirectRoute />;
};

export default RouteProtection;
