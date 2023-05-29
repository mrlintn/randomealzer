import React from "react";
import ViewCurrent from "../../buttons/ViewCurrent";
const Results = ({ mealz }) => {
  return (
    <>
      <ViewCurrent isMeal="yes" current={mealz}></ViewCurrent>
    </>
  );
};

export { Results };
