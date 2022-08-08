import create from "zustand";
import { generateId } from "../utils/generateId";
import { localStorage } from "../utils/localStorage";

export type SubmissionT = {
  id: string;
  title: string;
  url: string;
};

interface SubmissionServiceI {
  submissions: SubmissionT[];
  add: (url: SubmissionT["url"]) => boolean;
  edit: (id: SubmissionT["id"], options: Partial<SubmissionT>) => boolean;
  remove: (id: SubmissionT["id"]) => void;
}

const fallbackData = [
  {
    id: "1",
    title: "phantom.land",
    url: "https://phantom.land/",
  },
];

/**
 * Saves all the links that are submitted by the user
 */
const submissionService = create<SubmissionServiceI>((set, get) => {
  const submissions = localStorage.get("submissions");

  const saveSubmissions = () => {
    localStorage.set("submissions", get().submissions);
  };

  const sanitizeUrl = (url: string): string => {
    if (!url) return "";
		// Remove blanks and make lowercase
    url = url.trim().toLowerCase().replace(" ", "");

    // Add "http://" to the start of the url if there is none
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      url = `http://${url}`;
    }

    return url;
  };

  const validateUrl = (
    url: string
  ): {
    isValid: boolean;
    url: SubmissionT["url"];
    title: string;
  } => {
    const sanitizedUrl = sanitizeUrl(url);
    const returnData = { url: sanitizedUrl, isValid: false, title: "" };

    try {
      const { host } = new URL(sanitizedUrl);

      // Url is invalid because there is no top level domain in url
      if (!host.includes(".")) return returnData;

      // Remove "www." from start of the host
      const title = host.startsWith("www.") ? host.slice(4) : host;

      returnData.isValid = true;
      returnData.title = title;
    } catch (e) {
      console.log("submissionService::validateUrl", e);
    }

    return returnData;
  };

  return {
    submissions: submissions?.length ? submissions : fallbackData,

    add: (newUrl) => {
      const { isValid, url, title } = validateUrl(newUrl);

      if (!isValid) return false;

      const id = generateId();

      set((state) => ({
        submissions: [{ id, url, title }, ...state.submissions],
      }));

      saveSubmissions();
      return true;
    },

    edit: (id, options = {}) => {
      if (options.url) {
        const { isValid, url, title } = validateUrl(options.url);

        if (!isValid) return false;
        options.url = url;
        options.title = title;
      }

      set((state) => ({
        submissions: state.submissions.map((submission) => {
          if (submission.id === id) return { ...submission, ...options };
          return submission;
        }),
      }));

      saveSubmissions();
      return true;
    },

    remove: (id) => {
      set((state) => ({
        submissions: state.submissions.filter(
          (submission) => submission.id !== id
        ),
      }));

      saveSubmissions();
    },
  };
});

export { submissionService };
