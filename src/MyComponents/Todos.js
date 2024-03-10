import React from "react";
import { TodosIteams } from "./TodosIteams";

export const Todos = (props) => {
  console.log("TYPE JJHFFGGHH", typeof props);
  console.log("TTTTTTTTTTTT", props);
  return (
    <div className="container">
      <h3 className="text-center">Todos</h3>
      {props.map((item) => {
        <TodosIteams key={item.sr} todos={item} />;
      })}
    </div>
  );
};
