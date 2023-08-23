import "./project.styles.css";
import { motion } from "framer-motion";
import ProjectTitle from "./projectTitle.component";
import ProjectMain from "./projectMain.component";
import FooterContact from "../footer/footerContact.component.jsx";

const Project = () => {
  return (
    <div>
      <main className="titleContainer">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.2
          }}
        >
          <ProjectTitle />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.4,
            delay: 0.6
          }}
        >
          <ProjectMain />
        </motion.div>
      </main>
      <footer>
        <FooterContact />
      </footer>
    </div>
  );
};

export default Project;
