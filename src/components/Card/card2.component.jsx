import "./card.styles.css";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Card1 = (props) => {
  const [state, setState] = useState(false);

  const changeImgPos = (state) => {
    setState((prevValue) => {
      return !prevValue;
    });
  };

  console.log(state);

  const isLaptop = useMediaQuery({ query: "(min-width: 577px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 576px)" });

  return (
    <div>
      <section
        className={` ${!state ? "materialUIStyle" : "materialUIStyleHover"}`}
      >
        {isLaptop && (
          <div>
            <LaptopMacIcon
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
                left: "810",
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
          <div style={{ marginTop: "80px" }}>
            <h1
              style={{
                fontSize: "40px",
                fontFamily: "Chewy",
                color: "white",
                marginTop: "-50px",
              }}
            >
              Responsive across devices
            </h1>
            <img
              className={` ${
                state
                  ? "imgPositionAndStyleStatic1"
                  : "imgPositionAndStyleOnHover1"
              }`}
              src={props.ImgSrc2}
              alt="img1"
            />
          </div>
        )}

        {isMobile && (
          <div
            style={{
              marginTop: "140px",
              marginLeft: "-20px",
            }}
          >
            <img
              style={{ scale: "0.6" }}
              className={` ${
                state
                  ? "imgPositionAndStyleStaticMobile1"
                  : "imgPositionAndStyleOnHoverMobile1"
              }`}
              src={props.ImgSrc2}
              alt="img1"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Card1;
