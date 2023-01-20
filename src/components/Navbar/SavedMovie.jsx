import React from "react";

function SavedMovie({ id, name, image }) {
  return (
    <div className="w-[200px] h-[300px] flex m-3">
      <img className="w-full min-h-[200px] " src={image} />
      <h1>{name}</h1>
    </div>
  );
}

export default SavedMovie;
