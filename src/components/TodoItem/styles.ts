import styled from "styled-components";

import Button from "@mui/material/Button";

import { ButtonControlProps, NameProps } from "components/TodoItem/type";

export const Item = styled.li`
  background-color: #fff;
  padding: 20px 15px;
  display: grid;
  align-items: center;
  grid-template-columns: 0.2fr 1fr 0.5fr;
`;

export const Name = styled.span<NameProps>`
  font-size: 1.25rem;
  font-weight: 600;

  color: ${({ priority }) => priority && "#66a9ff"};
  text-decoration: ${({ done, priority }) =>
    done && priority ? `line-through rgba(0, 0, 0, 0.9)` : "none" && done ? "line-through" : "none"};
  opacity: ${({ done }) => done && `0.5`};
`;

export const ButtonControl = styled(Button)<ButtonControlProps>`
  opacity: ${({ done }) => done && `0.5`};
`;
