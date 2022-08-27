import { IStuff } from "../../mock/type";

export interface IProps {
  todoItem: IStuff;
  onClick: () => void;
  setTodoList: React.Dispatch<React.SetStateAction<IStuff[]>>;
}
export interface NameProps {
  done: boolean;
  priority: boolean;
}
export interface ButtonControlProps {
  done: boolean;
}
