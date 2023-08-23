import "./card.styles.css";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { motion } from "framer-motion";

const Card1 = (props) => {
  const [state, setState] = useState(false);

  const changeImgPos = (state) => {
    setState((prevValue) => {
      return !prevValue;
    });
  };

  const isLaptop = useMediaQuery({ query: "(min-width: 577px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 576px)" });

  return (
    <div>
      <section
        className={` ${!state ? "materialUIStyle" : "materialUIStyleHover"}`}
      >
        {isLaptop && (
          <div>
            <PhoneIphoneIcon
              style={{
                scale: "6",
                rotate: "20deg",
                position: "absolute",
                left: "50",
              }}
            />
            <ArrowRightAltIcon
              style={{
                scale: "8",
                position: "absolute",
                rotate: "180deg",
                left: "-70",
                top: "200",
              }}
            />
          </div>
        )}
      </section>
      <div
        onMouseOver={changeImgPos}
        onMouseOut={changeImgPos}
        className={props.className}
      >
        {isLaptop && (
          <div>
            <img
              className={` ${
                state
                  ? "imgPositionAndStyleStatic1"
                  : "imgPositionAndStyleOnHover1"
              }`}
              src={props.ImgSrc1}
              alt="img1"
            />
          </div>
        )}

        {isMobile && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2
              style={{
                fontFamily: "Chewy",
                color: "white",
              }}
            >
              Responsive across devices
            </h2>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
              <img
                style={{ scale: "0.6" }}
                className={` ${
                  state
                    ? "imgPositionAndStyleStaticMobile1"
                    : "imgPositionAndStyleOnHoverMobile1"
                }`}
                src={props.ImgSrc1}
                alt="img1"
              />
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card1;
