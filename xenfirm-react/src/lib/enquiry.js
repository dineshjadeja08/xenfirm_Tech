import { company } from "../data/company.js";
export async function sendEnquiry(formData, fetcher = fetch) {
  if (formData.get("_gotcha"))
    throw new Error("Please leave the website field empty.");
  const response = await fetcher(company.enquiryEndpoint, {
    method: "POST",
    headers: { Accept: "application/json" },
    body: formData,
    signal: AbortSignal.timeout(15000),
  });
  if (!response.ok)
    throw new Error(
      "Your message could not be sent. Please retry or email us.",
    );
}
