import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const NavAnima = (props) => {
  const positionMapDesktop = {
    stateHome: { x: -209, y: 55, scale: 0.85 },
    stateAbout: { x: 52, y: 55, scale: 0.85 },
    stateProject: { x: -85, y: 55, scale: 0.85 },
    stateContact: { x: 196, y: 55, scale: 0.85 }
  };

  const positionMapMobile = {
    stateHome: { x: -149, y: 55, scale: 0.85 },
    stateAbout: { x: 32, y: 55, scale: 0.85 },
    stateProject: { x: -65, y: 55, scale: 0.85 },
    stateContact: { x: 136, y: 55, scale: 0.9 }
  };

  const isLaptopL = useMediaQuery({ query: "(min-width: 577px)" });
  const isMobileM = useMediaQuery({ query: "(max-width: 576px)" });

  const getPositionMap = () => {
    if (isLaptopL) {
      return positionMapDesktop;
    } else if (isMobileM) {
      return positionMapMobile;
    }
    return {};
  };

  const activeState = Object.keys(props).find((key) => props[key] === true);
  const [savedStateDesktop, setSavedStateDesktop] = useState(
    getPositionMap()[activeState]
  );

  useEffect(() => {
    setSavedStateDesktop(getPositionMap()[activeState]);
  }, [props, activeState]);

  return (
    <div>
      <div className={props.class}>
        <motion.div
          transition={{
            bounce: 0.6,
            ease: "easeOut",
            type: "spring",
            duration: 0.7
          }}
          animate={savedStateDesktop}
          className="nav-anima"
        ></motion.div>
      </div>
    </div>
  );
};

export default NavAnima;

/**import "./navbar.styles.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const NavAnima = (props) => {
  const positionMap1 = {
    stateHome: { x: -207, y: 57, scale: 0.85 },
    stateProject: { x: -74, y: 57, scale: 0.85 },
    stateAbout: { x: 59, y: 57, scale: 0.85 },
    stateContact: { x: 198, y: 57, scale: 0.9 }
  };

  const positionMap2 = {
    stateHome: { x: -147, y: 57, scale: 0.85 },
    stateProject: { x: -54, y: 57, scale: 0.85 },
    stateAbout: { x: 39, y: 57, scale: 0.85 },
    stateContact: { x: 137, y: 57, scale: 0.9 }
  };

  useEffect(() => {
    const activeState = Object.keys(props).find((key) => props[key] === true);
    setSavedStateDesktop(() => {
      if (isDesktopOrLaptop === true) {
        return positionMap1[activeState];
      } else if (isMobile === true) {
        return positionMap2[activeState];
      }
    });
  }, [props]);

  const [savedStateDesktop, setSavedStateDesktop] = useState({});

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 577px)"
  });
  const isMobile = useMediaQuery({ query: "(max-width: 576px)" });

  return (
    <div>
      <div className={props.class}>
        <motion.div
          transition={{
            bounce: 0.6,
            ease: "easeOut",
            type: "spring",
            duration: 0.7
          }}
          animate={savedStateDesktop}
          className="nav-anima"
        >
          {" "}
        </motion.div>
      </div>
    </div>
  );
};

export default NavAnima; */

/**import "./navbar.styles.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const NavAnima = (props) => {
  const [savedState, setSavedState] = useState({});

  useEffect(() => {
    if (props.stateHome === true) {
      setSavedState(() => {
        return {
          x: -231,
          y: 47,
          scale: 1
        };
      });
    } else if (props.stateProject === true) {
      setSavedState(() => {
        return {
          x: -78,
          y: 47,
          scale: 1
        };
      });
    } else if (props.stateAbout === true) {
      setSavedState(() => {
        return {
          x: 78,
          y: 47,
          scale: 1
        };
      });
    } else if (props.stateContact === true) {
      setSavedState(() => {
        return {
          x: 233,
          y: 47,
          scale: 1
        };
      });
    }
  }, [
    props.stateHome,
    props.stateProject,
    props.stateAbout,
    props.stateContact
  ]);

  return (
    <div>
      <div className="nav-anima-container">
        <motion.div
          transition={{ ease: [0.17, 0.67, 0.83, 0.67] }}
          initial={{ x: 0 }}
          animate={savedState}
          className="nav-anima"
        >
          {" "}
        </motion.div>
      </div>
    </div>
  );
};

export default NavAnima;
 */
