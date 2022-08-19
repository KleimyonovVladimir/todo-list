import { IStuff } from "../../mock/type";

export interface IProps {
  setTodoList: React.Dispatch<React.SetStateAction<IStuff[]>>;
}
