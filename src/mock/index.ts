import { guid } from "helpers/guid";
import { IStuff } from "mock/type";

export const stuff: IStuff[] = [
  {
    id: guid(),
    name: "Drink coffee",
    status: "done",
    isPriority: false,
  },
  {
    id: guid(),
    name: "Do exercise",
    status: "active",
    isPriority: true,
  },
  {
    id: guid(),
    name: "Create app",
    status: "active",
    isPriority: false,
  },
];
