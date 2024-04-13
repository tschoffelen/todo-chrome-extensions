# Task management extensions for Google Chrome

Several Chrome extensions to help improve your productivity.

## Install the extensions

- [🔖 Add to OmniFocus for Gmail](https://chrome.google.com/webstore/detail/add-to-omnifocus-for-gmail/ihgdbplidfgbloomplhlgncccbnpfdpm)
- [🔖 Add to Things for Gmail](https://chromewebstore.google.com/detail/add-to-things-for-gmail/mkpapmkjeddhenbmhdihdiiijgckifln)

## Local development

Use `yarn` to get started.

You can build ZIP files by running `yarn build` in the root directory, or in each of the individual packages.

There is a `yarn dev` to auto rebuild as you develop.

## Deployment

New versions are automatically released to the Chrome Web Store via GitHub Actions.

Create a new version by running:

```shell
npm version minor
git push --tags
```