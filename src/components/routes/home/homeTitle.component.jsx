import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import "./styles/home.styles.css";

const HomeTitle = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 577px)"
  });
  const isMobile = useMediaQuery({ query: "(max-width: 576px)" });
  return (
    <div>
      {isDesktopOrLaptop && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <h1 className="titleDesktop">
            <span>Hi. I´m Harun</span>
            <br />
            <span>A Developer.</span>
          </h1>
        </motion.div>
      )}
      {isMobile && (
        <div className="titleMobile">
          <span>Hi. I´m Harun</span>
          <br />
          <span>A Developer.</span>
        </div>
      )}
      {isDesktopOrLaptop && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="subtitle-desktop">
            <span>
              I have a strong passion for crafting engaging
              <br /> inclusive, and user-focused experiences.
            </span>
          </div>
        </motion.div>
      )}
      {isMobile && (
        <div>
          <br />
          <br />
          <div className="subtitle-mobile">
            <span>
              I have a strong passion for crafting
              <br />
              engaging, inclusive, and user-focused experiences.
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeTitle;
