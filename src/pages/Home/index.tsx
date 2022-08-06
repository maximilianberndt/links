import { PaginatedList } from "../../components/Common/PaginatedList";
import { SubmissionCard } from "../../components/SubmissionCard";
import { SubmissionInput } from "../../components/SubmissionInput";
import { submissionService } from "../../services/submissionService";
import { StyledHome } from "./styles";

const Home = () => {
  const submissions = submissionService((state) => state.submissions);

  return (
    <StyledHome>
      <SubmissionInput />

      <PaginatedList
        items={submissions.map((submission) => (
          <SubmissionCard key={submission.id} submission={submission} />
        ))}
        itemsPerPage={20}
      />
    </StyledHome>
  );
};

export { Home };
