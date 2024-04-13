#!/bin/env node

import chokidar from "chokidar";
import { build } from "./build.js";

await build();

console.log("Watching for changes...");

const watcher = chokidar.watch(".", {
  ignored: /node_modules|dist/,
  ignoreInitial: false,
  awaitWriteFinish: {
    stabilityThreshold: 500,
    pollInterval: 100,
  },
});

watcher.on("change", (path) => {
  console.log(`File ${path} has changed, rebuilding...`);
  build(false);
});
