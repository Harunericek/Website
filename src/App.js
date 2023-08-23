import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/routes/home/home.component";
import Project from "./components/routes/project/project.component";
import About from "./components/routes/about/about.component";
import Contact from "./components/routes/contact/contact.component";
import Navigation from "./components/routes/navigation/navbar.component";
import { useMediaQuery } from "react-responsive";

export default function App() {
  const isLaptopLNavi = useMediaQuery({ query: "(min-width: 577px)" });
  const isMobileMNavi = useMediaQuery({ query: "(max-width: 576px)" });

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Navigation
              isDesktopOrLaptop={isLaptopLNavi}
              isMobile={isMobileMNavi}
            />
          }
        >
          <Route index element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="project" element={<Project />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}
