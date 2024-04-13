import { addToolbarButton } from "@includable-chrome/shared";

addToolbarButton("Add to OmniFocus", ({ title, url }) => {
  location.href =
    `omnifocus:///add` +
    `?name=${encodeURIComponent(title)}` +
    `&note=${encodeURIComponent(url)}`;
});
