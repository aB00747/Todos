import React from "react";

export const TodosIteams = ({ todos }) => {
  console.log('OOOOPOPOPO',todos)
  const { title = "", desc = "" } = todos || {};
  return (
    <div>
      <h4>{title}</h4>
      <p>{desc}</p>
      {todos && <button className="btn btn-sm btn-danger">Delete</button>}
    </div>
  );
};
