import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import DeleteIcon from "@mui/icons-material/Delete";
import Checkbox from "@mui/material/Checkbox";

import { ButtonControl, Item, Name } from "components/TodoItem/styles";

import { IProps } from "components/TodoItem/type";
import { IStuff } from "mock/type";

const TodoItem = ({ todoItem, onClick, setTodoList }: IProps) => {
  const { id, isPriority, status, name } = todoItem;

  const handlePriority = () => {
    setTodoList((prevState) => {
      const newTodoList = [...prevState];

      const foundTodoItem = newTodoList.find((todo) => todo.id === id);
      const todoItemIndex = newTodoList.findIndex((todo) => todo.id === id);

      if (foundTodoItem) {
        const newTodoItem: IStuff = {
          ...foundTodoItem,
          isPriority: !isPriority,
        };

        newTodoList.splice(todoItemIndex, 1, newTodoItem);
      }

      return newTodoList;
    });
  };

  const handleCheckbox = () => {
    setTodoList((prevState) => {
      const newTodoList = [...prevState];

      const foundTodoItem = newTodoList.find((todo) => todo.id === id);
      const todoItemIndex = newTodoList.findIndex((todo) => todo.id === id);

      if (foundTodoItem) {
        const newTodoItem: IStuff = {
          ...foundTodoItem,
          status: status === "done" ? "active" : "done",
        };

        newTodoList.splice(todoItemIndex, 1, newTodoItem);
      }

      return newTodoList;
    });
  };

  return (
    <Item>
      <Checkbox onChange={handleCheckbox} checked={status === "done"} />
      <Name done={status === "done"} priority={isPriority}>
        {name}
      </Name>
      <div className="todo-control">
        <ButtonControl variant="outlined" color="success" done={status === "done"} onClick={handlePriority}>
          <PriorityHighIcon />
        </ButtonControl>
        <ButtonControl variant="outlined" color="error" done={status === "done"} onClick={onClick}>
          <DeleteIcon />
        </ButtonControl>
      </div>
    </Item>
  );
};

export default TodoItem;
