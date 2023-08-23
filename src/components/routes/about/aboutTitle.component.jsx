import "./about.styles.css";
import { useMediaQuery } from "react-responsive";

const AboutTitle = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 577px)"
  });
  const isMobile = useMediaQuery({ query: "(max-width: 576px)" });
  return (
    <div>
      {isDesktopOrLaptop && (
        <div className="titleDesktop">
          <span>I´m Harun</span>
        </div>
      )}
      {isMobile && (
        <div className="titleMobile">
          <span>I´m Harun</span>
        </div>
      )}
    </div>
  );
};

export default AboutTitle;
