import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ButtonRound } from "../../components/Common/ButtonRound";
import { Headline } from "../../components/Common/Headline";
import { submissionService } from "../../services/submissionService";
import { StyledDetail, Subheadline, Back } from "./styles";

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
      <Headline as="a" href={submission.url} rel="noopener" target="_blank">
        {submission.url}
      </Headline>
    </StyledDetail>
  );
};

export { Detail };
