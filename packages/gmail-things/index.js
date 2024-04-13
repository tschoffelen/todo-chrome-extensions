import { addToolbarButton } from "@includable-chrome/shared";

addToolbarButton("Add to Things", ({ title, url }) => {
  location.href =
    `things:///add` +
    `?title=${encodeURIComponent(title)}` +
    `&notes=${encodeURIComponent(url)}` +
    `&show-quick-entry=true`;
});
