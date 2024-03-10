import React from "react";
import { TodosIteams } from "./TodosIteams";

export const Todos = (props) => {
    console.log('TYPE JJHFFGGHH', typeof(props));
    console.log("TTTTTTTTTTTT",props);
  return (
    <div className="container">
      <h3>Todos</h3>
      <TodosIteams  todos={props[0]} />
    </div>
  );
};
