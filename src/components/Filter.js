import React from "react";

const Filter = props => {
  let { value, changeHandler } = props;
  return (
    <div id="nav">
      <form>
        Search:{" "}
        <input
          type="text"
          placeholder="Search"
          onChange={changeHandler}
          value={value}
        />
      </form>
    </div>
  );
};

export default Filter;
