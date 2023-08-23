import "./navbar.styles.css";
import { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";
import NavAnima from "./navbar.animation";
import LinkCard from "./linkCard.component";

function Navigation(props) {
  const [activeLink, setActiveLink] = useState("Home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  const isDesktopOrLaptop = props.isDesktopOrLaptop;
  const isMobile = props.isMobile;
  const isTablet = props.isTablet;

  const NavData = [
    {
      title: "Home",
      class1: `navbar-item1 ${activeLink === "Home" ? "active" : ""}`,
      class2: `navbar-item2 ${activeLink === "Home" ? "active" : ""}`,
      path: "Home",
      handleClick: () => handleLinkClick("Home")
    },
    {
      title: "About",
      class1: `navbar-item1 ${activeLink === "Project" ? "active" : ""}`,
      class2: `navbar-item2 ${activeLink === "Project" ? "active" : ""}`,
      path: "About",
      handleClick: () => handleLinkClick("Project")
    },
    {
      title: "Projects",
      class1: `navbar-item1 ${activeLink === "About" ? "active" : ""}`,
      class2: `navbar-item2 ${activeLink === "Project" ? "active" : ""}`,
      path: "Project",
      handleClick: () => handleLinkClick("About")
    },
    {
      title: "Contact",
      class1: `navbar-item1 ${activeLink === "Contact" ? "active" : ""}`,
      class2: `navbar-item2 ${activeLink === "Contact" ? "active" : ""}`,
      path: "Contact",
      handleClick: () => handleLinkClick("Contact")
    }
  ];

  return (
    <Fragment>
      <NavAnima
        class="nav-anima-container"
        stateHome={activeLink === "Home"}
        stateProject={activeLink === "Project"}
        stateAbout={activeLink === "About"}
        stateContact={activeLink === "Contact"}
      />
      <div className="navbar-container">
        {NavData.map((navItem, index) => {
          return (
            <LinkCard
              key={index + 1}
              title={navItem.title}
              class={
                isDesktopOrLaptop
                  ? `${navItem.class1}`
                  : isMobile
                  ? `${navItem.class2}`
                  : isTablet
                  ? `${navItem.class1}`
                  : {}
              }
              path={navItem.path}
              handleClick={navItem.handleClick}
            />
          );
        })}
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;

/**import "./navbar.styles.css";

import { Fragment, useState } from "react";
import { Link, Outlet } from "react-router-dom";

import NavAnima from "./navbar.animation";

function Navigation(props) {
  const [stateHome, setStateHome] = useState(true);
  const [stateProject, setStateProject] = useState(false);
  const [stateAbout, setStateAbout] = useState(false);
  const [stateContact, setStateContact] = useState(false);

  const checkClickHome = () => {
    setStateHome(() => {
      setStateProject(false);
      setStateAbout(false);
      setStateContact(false);
      return true;
    });
  };

  const checkClickProject = () => {
    setStateProject(() => {
      setStateHome(false);
      setStateAbout(false);
      setStateContact(false);
      return true;
    });
  };

  const checkClickAbout = () => {
    setStateAbout(() => {
      setStateHome(false);
      setStateProject(false);
      setStateContact(false);
      return true;
    });
  };

  const checkClickContact = () => {
    setStateContact(() => {
      setStateHome(false);
      setStateAbout(false);
      setStateProject(false);
      return true;
    });
  };

  console.log("home: " + stateHome);
  console.log("project: " + stateProject);
  console.log("about: " + stateAbout);
  console.log("contact: " + stateContact);

  return (
    <Fragment>
      <div className="wrapper">
        <NavAnima
          stateHome={stateHome}
          stateProject={stateProject}
          stateAbout={stateAbout}
          stateContact={stateContact}
        />
        <div className="navbar-container">
          <Link to="Home" style={{ textDecoration: "none" }}>
            <div className="navbar-item" onClick={checkClickHome}>
              Home
            </div>
          </Link>
          <Link to="Project" style={{ textDecoration: "none" }}>
            <div className="navbar-item" onClick={checkClickProject}>
              Project
            </div>
          </Link>
          <Link to="About" style={{ textDecoration: "none" }}>
            <div className="navbar-item" onClick={checkClickAbout}>
              About
            </div>
          </Link>
          <Link to="Contact" style={{ textDecoration: "none" }}>
            <div className="navbar-item" onClick={checkClickContact}>
              Contact
            </div>
          </Link>
        </div>
        <Outlet />
      </div>
    </Fragment>
  );
}
export default Navigation;
 */

/**import "./navbar.styles.css";
import { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";
import NavAnima from "./navbar.animation";
import LinkCard from "./linkCard.component";
import { useMediaQuery } from "react-responsive";

function Navigation(props) {
  const [activeLink, setActiveLink] = useState("Home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const isLaptop = useMediaQuery({ query: "(min-width: 1024px)" });
  const isMobilM = useMediaQuery({ query: "(max-width: 576px)" });

  const NavData = [
    {
      title: "Home",
      path: "Home",
      handleClick: () => handleLinkClick("Home")
    },
    {
      title: "Project",
      path: "Project",
      handleClick: () => handleLinkClick("Project")
    },
    {
      title: "About",
      path: "About",
      handleClick: () => handleLinkClick("About")
    },
    {
      title: "Contact",
      path: "Contact",
      handleClick: () => handleLinkClick("Contact")
    }
  ];

  return (
    <Fragment>
      {isLaptop && (
        <NavAnima
          class="nav-anima-container"
          {...{ [`state${activeLink}`]: true }}
        />
      )}
      {isLaptop && (
        <div className="navbar-container">
          {NavData.map((navItem, index) => (
            <LinkCard
              key={index + 1}
              title={navItem.title}
              class={`navbar-item1 ${
                activeLink === navItem.title ? "active" : ""
              }`}
              path={navItem.path}
              handleClick={navItem.handleClick}
            />
          ))}
        </div>
      )}
      {isMobilM && (
        <NavAnima
          class="nav-anima-container"
          {...{ [`state${activeLink}`]: true }}
        />
      )}
      {isMobilM && (
        <div className="navbar-container">
          {NavData.map((navItem, index) => (
            <LinkCard
              key={index + 1}
              title={navItem.title}
              class={`navbar-item2 ${
                activeLink === navItem.title ? "active" : ""
              }`}
              path={navItem.path}
              handleClick={navItem.handleClick}
            />
          ))}
        </div>
      )}
      <Outlet />
    </Fragment>
  );
}

export default Navigation; */
