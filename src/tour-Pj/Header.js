import { FaTelegram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

const Header = () => {
  return (
    <header className="header">
      <h3 className="header-text">learning react</h3>
      <div className="header-icons">
        <h3>
          <FaTelegram />
        </h3>
        <h3>
          <IoLogoWhatsapp />
        </h3>
        <h3>
          <AiFillInstagram />
        </h3>
        <h3>
          <SiGmail />
        </h3>
      </div>
    </header>
  );
};

export default Header;
