import "./contact.styles.css";
import { useMediaQuery } from "react-responsive";

const ContactTitle = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 577px)"
  });
  const isMobile = useMediaQuery({ query: "(max-width: 576px)" });
  return (
    <div>
      {isDesktopOrLaptop && (
        <div className="titleDesktop">
          <span>Contact Me!</span>
        </div>
      )}
      {isMobile && (
        <div className="titleMobile">
          <span>Contact Me!</span>
        </div>
      )}
    </div>
  );
};

export default ContactTitle;
