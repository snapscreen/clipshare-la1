import React from "react";
import { Button } from "../button";

import logo from "../../images/Logo_TVE-1.png"

import "./logo.styles.css";

type LogoProps = {
  className?: string;
};

export const Logo: React.FC<LogoProps> = ({
  className,
}) => {
  return (
    <>
    <Button as="link" to="/" styleType="icon">
      <span className={className}>
        <img src={logo} alt="Logo" />
      </span>
      <span className="sr-only">ClipShare</span>
    </Button>
    </>
  );
};
