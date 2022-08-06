import { useState, ChangeEvent } from "react";
import { StyledInput } from "./styles";

const Input = ({ value, onChange = (value) => {}, ...others }) => {
  const [_value, setValue] = useState(value);

  return (
    <StyledInput
      {...others}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        if (!e?.target) return;
        const { value } = e.target;
        setValue(value);
        onChange(value);
      }}
      value={_value}
    />
  );
};

export { Input };
