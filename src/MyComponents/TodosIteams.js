import React from "react";

export const TodosIteams = ({ todos }) => {
  const { title = "Default Title", desc = "Default Description" } = todos || {};
  return (
    <div>
      <h4>{title}</h4>
      <p>{desc}</p>
      <button className="btn btn-sm btn-danger">Delete</button>
    </div>
  );
};
