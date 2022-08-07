import { useState, FormEvent } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Plus } from "../../../public/icons/plus.svg";
import { ReactComponent as Eye } from "../../../public/icons/eye.svg";
import { ReactComponent as Pen } from "../../../public/icons/pen.svg";

import {
  StyledSubmissionCard,
  TextWrapper,
  ButtonWrapper,
  DeleteButton,
  ViewButton,
  EditButton,
  Form,
} from "./styles";
import { Headline } from "../Common/Headline";
import {
  submissionService,
  SubmissionT,
} from "../../services/submissionService";
import { ButtonRound } from "../Common/ButtonRound";
import { Input } from "../Common/Input";
import { SubmissionIcon } from "../SubmissionIcon";

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
      // Reset to original url when new url is not valid
      setValue(submission.url);
    }
  };

  return (
    <StyledSubmissionCard onMouseLeave={() => setIsEdit(false)}>
      <TextWrapper
        css={{
          flexGrow: isEdit ? 1 : 0,
        }}
      >
        {isEdit ? (
          <Form onSubmit={edit}>
            <Input onChange={(e) => setValue(e.target.value)} value={value} />
          </Form>
        ) : (
          <>
            <SubmissionIcon url={submission.url} />

            <Headline
              as="a"
              href={submission.url}
              target="_blank"
              rel="noopener"
            >
              {submission.title}
            </Headline>
          </>
        )}
      </TextWrapper>

      <ButtonWrapper>
        <ViewButton
          as={Link}
          to={`/submission/${submission.id}`}
          css={{
            "--transition-delay": "0.04s",
          }}
        >
          <Eye />
        </ViewButton>

        <EditButton
          onClick={toggleEdit}
          css={{
            "--transition-delay": "0.08s",
          }}
        >
          <Pen />
        </EditButton>

        <DeleteButton
          size="m"
          onClick={remove}
          css={{
            "--transition-delay": "0.12s",
          }}
        >
          <Plus />
        </DeleteButton>
      </ButtonWrapper>
    </StyledSubmissionCard>
  );
};

export { SubmissionCard };
