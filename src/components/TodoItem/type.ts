import { IStuff } from "../../mock/type";

export interface IProps {
  nameOfTodo: string;
  onClick: () => void;
  setTodoList: React.Dispatch<React.SetStateAction<IStuff[]>>;
  isPriority: boolean;
  isDone: boolean;
  status: "active" | "done";
  id: string;
}
export interface NameProps {
  done: boolean;
  priority: boolean;
}
export interface ButtonControlProps {
  done: boolean;
}
