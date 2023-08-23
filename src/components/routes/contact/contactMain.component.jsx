import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import MainMobil from "./mobil/contactMainMobil.component";
import "./contact.styles.css";
import MainDesktop from "./desktop/contactMainDesktop.component";

const ContactMain = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 577px)"
  });
  const isMobile = useMediaQuery({ query: "(max-width: 576px)" });

  const [input, setInput] = useState({
    name: "",
    subject: "",
    email: "",
    content: ""
  });

  const [state, setState] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value
      };
    });
  };

  const handleClick = () => {
    setState(!state);
  };

  return (
    <div>
      {isMobile && (
        <div className="inputContainerMobil">
          <label>Name</label>
          <MainMobil
            classNameItem="wordInputMobil"
            name="name"
            type="text"
            valueName={input.name}
            onChange={handleInputChange}
          />
          <label>Subject</label>
          <MainMobil
            classNameItem="wordInputMobil"
            name="subject"
            type="text"
            valueName={input.subject}
            onChange={handleInputChange}
          />
          <label>Email</label>
          <MainMobil
            classNameItem="wordInputMobil"
            name="email"
            type="email"
            valueName={input.email}
            onChange={handleInputChange}
          />
          <label>Content</label>
          <textarea
            className="textInputMobil"
            rows="5"
            name="content"
            type="text"
            valueName={input.content}
            onChange={handleInputChange}
          ></textarea>
          <button onClick={handleClick} className="messageButton">
            Send me a message
          </button>
        </div>
      )}
      {isDesktopOrLaptop && (
        <div className="inputContainerDesktop">
          <label>Name</label>
          <MainMobil
            classNameItem="wordInputDesktop"
            name="name"
            type="text"
            valueName={input.name}
            onChange={handleInputChange}
          />
          <label>Subject</label>
          <MainMobil
            classNameItem="wordInputDesktop"
            name="subject"
            type="text"
            valueName={input.subject}
            onChange={handleInputChange}
          />
          <label>Email</label>
          <MainMobil
            classNameItem="wordInputDesktop"
            name="email"
            type="email"
            valueName={input.email}
            onChange={handleInputChange}
          />
          <label>Content</label>
          <textarea
            className="textInputDesktop"
            rows="5"
            name="content"
            type="text"
            valueName={input.content}
            onChange={handleInputChange}
          ></textarea>
          <button className="messageButton"> Send me a message </button>
        </div>
      )}
    </div>
  );
};

export default ContactMain;
