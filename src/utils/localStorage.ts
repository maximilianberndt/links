/**
 * Helper to save and load things into localstorage
 */
const localStorage = {
  set: (key: string, data: any) => {
    if (!key) return;
    window.localStorage.setItem(key, JSON.stringify(data));
  },

  get: (key: string): any => {
    if (!key) return;
    const item = window.localStorage.getItem(key);

    if (typeof item === "string") return JSON.parse(item);
  },

  remove: (key: string) => {
    if (!key) return;
    window.localStorage.removeItem(key);
  },
};

export { localStorage };
