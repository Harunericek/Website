import "./footer.styles.css";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useMediaQuery } from "react-responsive";
let urlLinkedIn = "https://www.linkedin.com/in/harun-ericek-2bb38a273";
let urlEmail = "mailto:harunericek@hotmail.com";
let urlInstagram = "";

const FooterContact = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 577px)"
  });
  const isMobile = useMediaQuery({ query: "(max-width: 576px)" });
  const now = new Date();
  let year = now.getFullYear();
  return (
    <div>
      {isMobile && (
        <div>
          <div className="footer-container">
            <a href={urlLinkedIn} className="footer-item">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href={urlEmail} className="footer-item">
              <EmailIcon fontSize="large" />
            </a>
            <a href={urlInstagram} className="footer-item">
              <InstagramIcon fontSize="large" />
            </a>
          </div>
          <div className="copyright">
            <h3>© {year} Harun Ericek</h3>
          </div>
        </div>
      )}
      {isDesktopOrLaptop && (
        <div>
          <div className="footer-container-Desktop">
            <a href={urlLinkedIn} className="footer-item-Desktop">
              <LinkedInIcon fontSize="large" />
              <h3>LinkedIn</h3>
            </a>
            <a href={urlEmail} className="footer-item-Desktop">
              <EmailIcon fontSize="large" />
              <h3>Mail Me</h3>
            </a>
            <a href={urlInstagram} className="footer-item-Desktop">
              <InstagramIcon fontSize="large" />
              <h3>Instagram</h3>
            </a>
          </div>
          <div className="copyright">
            <h3>© {year} Harun Ericek</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default FooterContact;
