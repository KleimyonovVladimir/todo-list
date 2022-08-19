import { InputField } from "./styles";
import { IProps } from "./type";

const Input = ({ label, required, autoComplete, onChange, name }: IProps) => {
  return (
    <InputField
      id="standard-basic"
      label={label}
      variant="standard"
      className="input"
      required={required}
      autoComplete={autoComplete}
      onChange={onChange}
      value={name}
    />
  );
};

export default Input;
