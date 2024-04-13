import { Gmail } from "gmail-js";
import $ from "jquery";

const gmail = new Gmail($);
const resourcesUrl = chrome.runtime.getURL("resources");
const extensionId = chrome.runtime.id;

export const getTaskContent = async (gmail) => {
  return {
    title: gmail.get.email_subject() || "Reply to email",
    url: `https://mail.google.com/mail/u/0/#inbox/${gmail.new.get.thread_id()}`,
  };
};

export const getButtonHtml = (title) => {
  const darkMode = false; // TODO: find a way to detect dark mode
  const iconUrl = `${resourcesUrl}/icon-${darkMode ? "dark" : "light"}.svg`;
  const style = `width: 20px; height: 20px; background: url(${iconUrl}) no-repeat center; background-size: contain;`;

  return (
    `<div class="T-I J-J5-Ji T-I-ax7" role="button" tabindex="0" data-tooltip="${title}" aria-label="${title}" style="user-select: none;">` +
    `<div class="asa"><div class="T-I-J3 J-J5-Ji" style="${style}"></div></div>`
  );
};

export const addToolbarButton = (buttonTitle, onButtonClick) => {
  const log = (...message) => {
    console.log(`[${extensionId}]`, ...message);
  };

  const addButton = () => {
    if ($(`.${extensionId}`).length) {
      log("Button already exists, aborting.");
      return;
    }

    gmail.tools.add_toolbar_button(
      getButtonHtml(buttonTitle),
      async () => onButtonClick(await getTaskContent(gmail)),
      extensionId
    );
  };

  gmail.observe.on("view_thread", function () {
    log("Thread view opened");
    setTimeout(() => {
      addButton();
    }, 5);
  });

  gmail.observe.on("load", () => {
    log("Gmail loaded");
    setTimeout(() => {
      if (gmail.get.current_page() === "email") {
        addButton();
      }
    }, 5);
  });
};
