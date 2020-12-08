# cra-pwa-typescript-yarn2

> Finally Create React App is working in conjunction with PWA, TypeScript, Yarn 2 in VS Code.

## What is it about?

This is just an empty project created with [Create React App](https://create-react-app.dev/). The initial intention was making the following work together:

1. Essentially, CRA,
2. TypeScript,
3. [PWA](https://developers.google.com/web/tools/workbox/),
4. [Yarn 2, so called Berry](https://yarnpkg.com/getting-started),
5. VS Code with all the fantastic support of code insights and navigation, eslint, etc.

I haven't compared the build times in the classic Yarn (with `node_modules`) and Yarn Berry (with zipped dependencies) with a stopwatch. However, the latter one is obviously faster!.

## Open Issues

1. Per CRA design, PWA service worker is disabled in the dev environment and does not work under webpack dev server.
2. In Yarn 2, there is no working *audit* command, like [npm audit](https://docs.npmjs.com/cli/v6/commands/npm-audit) or [yarn audit](https://classic.yarnpkg.com/en/docs/cli/audit/).

## Contribution

This repo can be used as a seed for further development or just a configuration reference. I'm not expecting for contribution here. But I do hope for all that hard work by those contributing to the excellent tools listed above.

Cheers!
