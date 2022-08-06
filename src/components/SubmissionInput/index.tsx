import { StyledSubmissionInput, ButtonWrapper, AddButton } from "./styles";
import { Input } from "../../components/Common/Input";
import { submissionService } from "../../services/submissionService";
import { useState, ChangeEvent, FormEvent } from "react";
import { Svg } from "../Common/Svg";

const SubmissionInput = () => {
  const [value, setValue] = useState("");

  const canSubmit = Boolean(value);

  const add = () => {
    if (!canSubmit) return;

    const submissionSuccessful = submissionService.getState().add(value);

    if (submissionSuccessful) {
      setValue("");
    } else {
      // alert("Error");
    }
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <StyledSubmissionInput onSubmit={onSubmit}>
      <Input
        value={""}
        placeholder="Add Website"
        onChange={(value) => setValue(value)}
      />

      <ButtonWrapper>
        <AddButton
          onClick={add}
          type="submit"
          css={{
            cursor: canSubmit ? "pointer" : "not-allowed",
          }}
        >
          <Svg icon="plus" />
        </AddButton>
      </ButtonWrapper>
    </StyledSubmissionInput>
  );
};

export { SubmissionInput };
