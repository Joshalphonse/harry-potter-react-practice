import React from "react";
import Card from "./CharacterCard";

const StudentContainer = props => {
  const studentList = props.students.map(students => (
    <Card
      key={students._id}
      student={students}
      clickHandler={props.clickHandler}
    />
  ));

  return (
    <div>
      <h1>Characters</h1>
      <div id="character-list">{studentList}</div>
    </div>
  );
};

export default StudentContainer;
