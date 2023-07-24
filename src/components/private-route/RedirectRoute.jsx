import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RedirectRoute = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/login");
    }, 200);
  }, []);

  return <></>;
};

export default RedirectRoute;
