import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { AiFillQuestionCircle } from "react-icons/ai";
import { IoMdAddCircle } from "react-icons/io";
import { BiSun } from "react-icons/bi";

const Header = ({ color }) => {
  return (
    <header className="header">
      <h3 className="header-text">Eisa rezaei</h3>
      <div className="header-icons">
        <h3>
          <BiSun onClick={color} />
        </h3>
        <h3>
          <Link to="/bio">
            <AiFillQuestionCircle />
          </Link>
        </h3>
        <h3>
          <Link to="/addtour">
            <IoMdAddCircle />
          </Link>
        </h3>
        <h3>
          <Link to="/tours">
            <FaHome />
          </Link>
        </h3>
      </div>
    </header>
  );
};

export default Header;
