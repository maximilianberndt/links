import {
  StyledSubmissionCard,
  TextWrapper,
  ButtonWrapper,
  DeleteButton,
  Form,
} from "./styles";
import { Headline } from "../Common/Headline";
import {
  submissionService,
  SubmissionT,
} from "../../services/submissionService";
import { Svg } from "../Common/Svg";
import { useState, FormEvent } from "react";
import { ButtonRound } from "../Common/ButtonRound";
import { Input } from "../Common/Input";

interface SubmissionCardI {
  submission: SubmissionT;
}

const SubmissionCard = ({ submission }: SubmissionCardI) => {
  const [value, setValue] = useState(submission.url);
  const [isEdit, setIsEdit] = useState(false);

  const remove = () => {
    submissionService.getState().remove(submission.id);
  };

  const toggleEdit = () => setIsEdit((state) => !state);

  const edit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const editSuccessful = submissionService
      .getState()
      .edit(submission.id, { url: value });

    if (editSuccessful) {
      setIsEdit(false);
    } else {
      // alert("Error");
    }
  };

  return (
    <StyledSubmissionCard>
      <TextWrapper
        css={{
          flexGrow: isEdit ? 1 : 0,
        }}
      >
        {isEdit ? (
          <Form onSubmit={edit}>
            <Input onChange={(value) => setValue(value)} value={value} />
          </Form>
        ) : (
          <Headline as="a" href={submission.url} target="_blank" rel="noopener">
            {submission.title}
          </Headline>
        )}
      </TextWrapper>

      <ButtonWrapper>
        <ButtonRound
          as="a"
          href="/"
          css={{
            "--transition-delay": "0.04s",
          }}
        >
          View
        </ButtonRound>

        <ButtonRound
          onClick={toggleEdit}
          css={{
            "--transition-delay": "0.08s",
          }}
        >
          Edit
        </ButtonRound>

        <DeleteButton
          size="m"
          onClick={remove}
          css={{
            "--transition-delay": "0.12s",
          }}
        >
          <Svg icon="plus" />
        </DeleteButton>
      </ButtonWrapper>
    </StyledSubmissionCard>
  );
};

export { SubmissionCard };
