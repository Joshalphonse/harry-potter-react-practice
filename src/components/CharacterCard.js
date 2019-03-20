import React from "react";

const CharacterCard = props => {
  let { student, clickHandler, handleRemove } = props;

  return (
    <div id="character-card">
      <p>{student.name} </p>
      <button onClick={() => clickHandler(student)}>Yeeeer </button>
      <button onClick={() => clickHandler(student)}> edit</button>
    </div>
  );
};

export default CharacterCard;
