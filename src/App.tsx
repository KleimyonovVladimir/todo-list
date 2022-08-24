import { useState } from "react";

import { Button, ButtonGroup } from "@mui/material";

import TodoItem from "components/TodoItem";
import Header from "components/Header";
import Footer from "components/Footer";
import Input from "components/Input";

import { StatusView } from "type";

import { stuff } from "mock";

import { Main, Search, TodoList } from "styles";

import GlobalStyles from "styles/global";

const App = () => {
  const [todoList, setTodoList] = useState(stuff);
  const [inputText, setInputText] = useState("");
  const [buttonState, setButtonState] = useState<StatusView>(StatusView.all);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const lowerCase = event.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const searchedTodoList = todoList
    .filter((item) => (buttonState === StatusView.all ? item : buttonState === item.status))
    .filter((item) => (inputText === "" ? item : item.name.toLowerCase().includes(inputText)));

  const completedTasksCount = todoList.reduce((acc, cur) => (acc += cur.status === StatusView.done ? 1 : 0), 0);

  const handleDelete = (id: string) => setTodoList((prevState) => prevState.filter((item) => item.id !== id));

  return (
    <>
      <Main>
        <Header leftQuantity={todoList.length - completedTasksCount} done={completedTasksCount} />
        <Search>
          <Input
            variant="standard"
            label="Search"
            autoComplete="off"
            onChange={handleInputChange}
            maxWidth={280}
            name="search"
          />
          <ButtonGroup variant="outlined">
            <Button onClick={() => setButtonState(StatusView.all)}>All</Button>
            <Button onClick={() => setButtonState(StatusView.active)}>Active</Button>
            <Button onClick={() => setButtonState(StatusView.done)}>Done</Button>
          </ButtonGroup>
        </Search>
        <TodoList>
          {searchedTodoList.map((todoItem) => (
            <TodoItem
              todoItem={todoItem}
              key={todoItem.id}
              onClick={() => handleDelete(todoItem.id)}
              setTodoList={setTodoList}
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
