import { createServerFn } from "@tanstack/react-start";

// Web3Forms' free plan only accepts browser submissions, and its access key is
// designed to be public, so the browser fetches it here and posts directly.
export const getWeb3FormsKey = createServerFn({ method: "GET" }).handler(
  async (): Promise<string | null> => process.env["WEB3FORMS_ACCESS_KEY"] ?? null,
);
