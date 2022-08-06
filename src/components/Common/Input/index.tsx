import { useState, ChangeEvent, useEffect } from "react";
import { StyledInput } from "./styles";

interface InputI  {
	value: any,
	onChange: (value: any) => void,
	[others: string]: unknown;
}

const Input = ({ value, onChange = (value) => {}, ...others }: InputI) => {
  const [_value, setValue] = useState(value);

  useEffect(() => {
    setValue(value);
  }, [value]);

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
