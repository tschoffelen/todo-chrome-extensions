#!/bin/env node

import { build } from "./build.js";

await build(true, process.argv[2]);
