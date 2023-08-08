import React from "react";
import Tododisplay1 from "./Tododisplay1";

export default function Todolist1({ todoItems, setTodoItems }) {
  return (
    <div>
      {todoItems.map((item) => {
        return (
          <Tododisplay1
            item={item}
            todoItems={todoItems}
            setTodoItems={setTodoItems}
          />
        );
      })}
    </div>
  );
}