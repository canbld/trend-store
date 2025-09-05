import "./Footer.css";
import FooterLogo from "./FooterLogo";
import FooterMenu from "./FooterMenu";
import FooterContacts from "./FooterContacts";
const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <FooterLogo />
        <FooterMenu />
        <FooterContacts />
      </div>
    </footer>
  );
};

export default Footer;
