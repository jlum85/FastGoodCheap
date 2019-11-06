import React from "react";

const Switch = props => {
  //   let colorBg = "#ccc";
  let colorBg = "#8F8F8F";

  if (props.checked) {
    colorBg = props.color;
  }

  //   console.log(props.lib, props.checked);
  return (
    <div className="checkBox">
      <label className="switch">
        <input
          type="checkbox"
          checked={props.checked}
          onChange={props.onHandle}
        />
        <span className="slider round" style={{ backgroundColor: colorBg }} />
      </label>
      <p>{props.lib}</p>
    </div>
  );
};

export default Switch;
