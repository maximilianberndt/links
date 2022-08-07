import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { SubmissionIcon } from "../../components/SubmissionIcon";
import { submissionService } from "../../services/submissionService";
import {
  StyledDetail,
  Subheadline,
  Back,
  StyledLink,
  TextWrapper,
} from "./styles";

const Detail = () => {
  const params = useParams();
  const navigate = useNavigate();

  const submission = submissionService((state) =>
    state.submissions.find((submission) => submission.id === params.id)
  );

  useEffect(() => {
    if (!submission) navigate("/");
  }, [submission]);

  if (!submission) return null;

  return (
    <StyledDetail>
      <Back as={Link} to="/">
        Back
      </Back>

      <Subheadline>Thank you for submitting:</Subheadline>

      <TextWrapper>
        <SubmissionIcon url={submission.url} />

        <StyledLink as="a" href={submission.url} rel="noopener" target="_blank">
          {submission.url}
        </StyledLink>
      </TextWrapper>
    </StyledDetail>
  );
};

export { Detail };
