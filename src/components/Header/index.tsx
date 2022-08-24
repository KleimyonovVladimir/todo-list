import { IProps } from "components/Header/type";

import { Counter, Intro, Title } from "components/Header/styles";

const Header = ({ leftQuantity, done }: IProps) => {
  return (
    <Intro>
      <Title>My Todo List</Title>
      <Counter>
        {leftQuantity} more to do, {done} done
      </Counter>
    </Intro>
  );
};

export default Header;
