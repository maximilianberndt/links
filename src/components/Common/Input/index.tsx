import { useState, ChangeEvent, useEffect } from "react";
import { StyledInput } from "./styles";

interface InputI {
  value: any;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  [others: string]: unknown;
}

const Input = ({ value, onChange, ...others }: InputI) => (
  <StyledInput {...others} onChange={onChange} value={value} />
);

export { Input };
