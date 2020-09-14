// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";

// Mock the Tailwind setup - causes buffer overflows.
// See: https://github.com/mihar-22/svelte-jester/issues/20
jest.mock("./src/TailwindSetup.svelte", () => ({}));

// Configure "en" as fixed locale for svelte-i18n. Requires for
// both snapshot tests and text searches.
import { addMessages, locale } from "svelte-i18n";
import en from "./src/i18n/en.json";

addMessages("en", en);
locale.set("en");
