import React from "react";
import "./style.scss";

let Logo = "https://logodownload.org/wp-content/uploads/2019/07/mini-logo.png";

const Header = function(props) {
  return (
    <header>
      <div className="wrap">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
