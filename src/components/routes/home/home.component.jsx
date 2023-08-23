import "./styles/lightLampsLaptop.styles.css";

import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import HomeTitle from "./homeTitle.component";
import HomeCard from "./homeCard.component";
import FooterContact from "../footer/footerContact.component.jsx";

const Home = (props) => {
  const isLaptopL = useMediaQuery({ query: "(min-width: 1440px)" });
  return (
    <div>
      <main className="titleContainer">
        <HomeTitle />
        <HomeCard />
      </main>
      <footer>
        <FooterContact />
      </footer>
    </div>
  );
};

export default Home;

/**
 * import LightOutlinedIcon from "@mui/icons-material/LightOutlined";
import WbIncandescentIcon from "@mui/icons-material/WbIncandescent";
 {isLaptopL && (
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 1.3
              }}
            >
              <div className="coneLeftDesktop" />
              <div className="coneRightDesktop" />
            </motion.div>
            <div className="leftLampDesktop" />
            <div className="rightLampDesktop" />
            <WbIncandescentIcon className="lightBulbLeftOffDesktop" />
            <WbIncandescentIcon className="lightBulbRightOffDesktop" />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 1
              }}
            >
              <WbIncandescentIcon className="lightBulbLeftOnDesktop" />
              <WbIncandescentIcon className="lightBulbRightOnDesktop" />
            </motion.div>
            <LightOutlinedIcon className="lightBulbLeftDesktop" />
            <LightOutlinedIcon className="lightBulbRightDesktop" />
          </div>
        )}
 */
