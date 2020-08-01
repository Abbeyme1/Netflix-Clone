import React, { useEffect, useState } from "react";
import classes from "./Nav.module.css";

const Nav = () => {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  let navClasses = [classes.Nav];

  if (show) {
    navClasses.push(classes.NavShow);
  }
  return (
    <div className={navClasses.join(" ")}>
      <img
        className={classes.NavLogo}
        src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
        alt="netflix-logo"
      />

      <img
        className={classes.NavAvatar}
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png"
        alt="netflix-logo"
      />
    </div>
  );
};

export default Nav;
