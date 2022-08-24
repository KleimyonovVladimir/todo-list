import { IProps } from "components/Input/type";

import { InputField } from "components/Input/styles";

const Input = (props: IProps) => {
  return <InputField style={{ maxWidth: props.maxWidth }} {...props} />;
};

export default Input;
