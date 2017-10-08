var j = document.createElement("script");
j.src = chrome.extension.getURL("vendor.js");
(document.head || document.documentElement).appendChild(j);

var m = document.createElement("script");
m.src = chrome.extension.getURL("main.js");
(document.head || document.documentElement).appendChild(m);

