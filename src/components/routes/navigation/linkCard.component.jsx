import { Link } from "react-router-dom";

const LinkCard = (props) => {
  return (
    <Link to={props.path} style={{ textDecoration: "none" }}>
      <div className={props.class} onClick={props.handleClick}>
        {props.title}
      </div>
    </Link>
  );
};

export default LinkCard;
