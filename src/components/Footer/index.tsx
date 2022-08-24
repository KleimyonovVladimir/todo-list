import { useState } from "react";

import Button from "@mui/material/Button";

import Input from "components/Input";

import { guid } from "helpers/guid";

import { IProps } from "components/Footer/type";
import { IStuff } from "mock/type";

import { Form } from "components/Footer/styles";

const Footer = ({ setTodoList }: IProps) => {
  const initialValue: IStuff = {
    id: guid(),
    name: "",
    isPriority: false,
    status: "active",
  };

  const [name, setName] = useState("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleAdd = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newItem = {
      ...initialValue,
      name,
    };

    setTodoList((prevState) => [...prevState, newItem]);

    setName("");
  };

  return (
    <Form onSubmit={handleAdd}>
      <Input
        variant="standard"
        label="Add a new item"
        required
        autoComplete="off"
        value={name}
        onChange={handleNameChange}
        maxWidth={280}
        name="add item"
      />
      <Button variant="outlined" type="submit">
        Add
      </Button>
    </Form>
  );
};

export default Footer;
