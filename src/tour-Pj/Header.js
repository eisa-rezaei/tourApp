import { FaTelegram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

const Header = () => {
  return (
    <header className="header">
      <h2 className="header-text">learning react</h2>
      <div className="header-icons">
        <h1>
          <FaTelegram />
        </h1>
        <h1>
          <IoLogoWhatsapp />
        </h1>
        <h1>
          <AiFillInstagram />
        </h1>
        <h1>
          <SiGmail />
        </h1>
      </div>
    </header>
  );
};

export default Header;
