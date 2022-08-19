import { useState } from "react";

import Button from "@mui/material/Button";
import Input from "../Input";

import { guid } from "../../helpers/guid";

import { IStuff } from "../../mock/type";
import { IProps } from "./type";

import { Form } from "./styles";

const Footer = ({ setTodoList }: IProps) => {
  const initialValue: IStuff = {
    id: guid(),
    name: "",
    isPriority: false,
    isDone: false,
    status: "active",
  };

  const [name, setName] = useState("");

  const handleChange = (event: { target: any }) => {
    setName(event.target.value);
  };

  const handleAdd = (event: { target: any; preventDefault: () => void }) => {
    event.preventDefault();

    const newItem = {
      ...initialValue,
      name,
    };

    setTodoList((prevState) => [newItem, ...prevState]);

    setName("");
  };

  return (
    <Form onSubmit={handleAdd}>
      <Input label="Add a new item" required={true} autoComplete="off" name={name} onChange={handleChange} />
      <Button variant="outlined" type="submit">
        Add
      </Button>
    </Form>
  );
};

export default Footer;
