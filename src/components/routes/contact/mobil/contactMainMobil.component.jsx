const MainMobil = (props) => {
  return (
    <div>
      <label>{props.label}</label>
      <input
        className={props.classNameItem}
        name={props.name}
        type={props.type}
        value={props.valueName}
        onChange={props.onChange}
      />
    </div>
  );
};

export default MainMobil;
