import { guid } from "../helpers/guid";
import { IStuff } from "./type";

export const stuff: IStuff[] = [
  {
    id: guid(),
    name: "Drink coffee",
    status: "done",
    isPriority: false,
    isDone: true,
  },
  {
    id: guid(),
    name: "Do exercise",
    status: "active",
    isPriority: true,
    isDone: false,
  },
  {
    id: guid(),
    name: "Create app",
    status: "active",
    isPriority: false,
    isDone: false,
  },
];
