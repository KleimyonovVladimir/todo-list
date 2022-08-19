import { useState } from "react";

import { Button, ButtonGroup } from "@mui/material";

import TodoItem from "./components/TodoItem";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Input from "./components/Input";

import { stuff } from "./mock";

import { Main, Search, TodoList } from "./styles";

import GlobalStyles from "./styles/global";

const App = () => {
  const [todoList, setTodoList] = useState(stuff);
  const [inputText, setInputText] = useState("");

  const [buttonState, setButtonState] = useState<"all" | "active" | "done">("all");

  const inputHandler = (e: { target: { value: string } }) => {
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const handleTab = () => todoList.filter((item) => (buttonState === "all" ? item : buttonState === item.status));

  const searchedTodoList = handleTab().filter((el) => (inputText === "" ? el : el.name.toLowerCase().includes(inputText)));

  const findCompleted = todoList.reduce((acc, cur) => (acc += cur.status === "done" ? 1 : 0), 0);

  const handleDelete = (id: string) => {
    const copyStuff = [...todoList];

    setTodoList(copyStuff.filter((item) => item.id !== id));
  };

  return (
    <>
      <Main>
        <Header leftQuantity={todoList.length - findCompleted} done={findCompleted} />
        <Search>
          <Input label="Search" autoComplete="off" onChange={inputHandler} />
          <ButtonGroup variant="outlined">
            <Button onClick={() => setButtonState("all")}>All</Button>
            <Button onClick={() => setButtonState("active")}>Active</Button>
            <Button onClick={() => setButtonState("done")}>Done</Button>
          </ButtonGroup>
        </Search>
        <TodoList>
          {searchedTodoList.map(({ name, id, isPriority, isDone, status }) => (
            <TodoItem
              nameOfTodo={name}
              key={id}
              onClick={() => handleDelete(id)}
              setTodoList={setTodoList}
              isDone={isDone}
              status={status}
              isPriority={isPriority}
              id={id}
            />
          ))}
        </TodoList>
        <Footer setTodoList={setTodoList} />
      </Main>
      <GlobalStyles />
    </>
  );
};

export default App;
