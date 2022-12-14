import { PaginatedList } from "../../components/Common/PaginatedList";
import { SubmissionCard } from "../../components/SubmissionCard";
import { SubmissionInput } from "../../components/SubmissionInput";
import { submissionService } from "../../services/submissionService";
import { StyledHome } from "./styles";

let lastIndex = 0;

const Home = () => {
  const submissions = submissionService((state) => state.submissions);

  return (
    <StyledHome>
      <SubmissionInput />

      <PaginatedList
        itemsPerPage={20}
        startIndex={lastIndex}
        onIndexChange={(index) => {
          window.scrollTo(0, 0);
          lastIndex = index;
        }}
        items={submissions.map((submission) => (
          <SubmissionCard key={submission.id} submission={submission} />
        ))}
      />
    </StyledHome>
  );
};

export { Home };
