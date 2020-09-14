import { getLocaleFromNavigator, init, register } from "svelte-i18n";

export function setup(): void {
  // German - equivalent for Germany and Austria in our case
  register("de", () => import("./de.json"));
  register("de-DE", () => import("./de.json"));
  register("de-AU", () => import("./de.json"));
  // English - equivalent for GB and US in our case
  register("en", () => import("./en.json"));
  register("en-GB", () => import("./en.json"));
  register("en-US", () => import("./en.json"));

  init({
    fallbackLocale: "en",
    initialLocale: getLocaleFromNavigator(),
  });
}
