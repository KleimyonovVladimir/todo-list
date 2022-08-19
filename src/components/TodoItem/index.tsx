import { IProps } from "./type";

import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import DeleteIcon from "@mui/icons-material/Delete";
import Checkbox from "@mui/material/Checkbox";

import { ButtonControl, Item, Name } from "./styles";

const TodoItem = ({ nameOfTodo, onClick, setTodoList, status, isDone, isPriority, id }: IProps) => {
  const handlePriority = () => {
    setTodoList((prevState) => {
      return prevState.map((item) => {
        return item.id === id
          ? {
              ...item,
              isPriority: !isPriority,
            }
          : item;
      });
    });
  };

  const handleCheckbox = () => {
    setTodoList((prevState) => {
      return prevState.map((item) => {
        return item.id === id
          ? {
              ...item,
              status: status === "done" ? "active" : "done",
            }
          : item;
      });
    });
  };

  return (
    <Item>
      <Checkbox onChange={handleCheckbox} checked={status === "done"} />
      <Name done={status === "done"} priority={isPriority}>
        {nameOfTodo}
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
