import * as esbuild from "esbuild";
import * as fs from "fs/promises";

export const build = async (updateManifest = true) => {
  await esbuild.build({
    entryPoints: ["index.js"],
    outfile: "dist/index.js",
    target: "chrome100",
    bundle: true,
    minify: true,
  });

  console.log("Created bundle");

  if (updateManifest) {
    const pkg = JSON.parse(await fs.readFile("package.json", "utf8"));
    const manifest = JSON.parse(await fs.readFile("manifest.json", "utf8"));

    manifest.version = pkg.version;
    await fs.writeFile("manifest.json", JSON.stringify(manifest, null, 2));

    console.log("Updated manifest version");
  }
};
