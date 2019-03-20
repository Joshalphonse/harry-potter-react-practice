import React from "react";
import Card from "./CharacterCard";
const TeamList = props => {
  const cardArray = props.students.map(student => (
    <Card
      key={student.id}
      student={student}
      clickHandler={props.clickHandler}
    />
  ));

  return (
    <div id="team-list">
      <h2>My Wizarding Team</h2>
      {cardArray}
    </div>
  );
};

export default TeamList;
