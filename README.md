# Turbopack Missing `loadModule` API Reproduction

This repo demonstrates that the Turbopack loader interface doesn't have the `loadModule` method that is available in webpack loaders.

## Issue Description

In webpack loaders, `this.loadModule` is available to run another module through webpack. However, when using the same loader with Turbopack, the `loadModule` method is undefined.

## Reproduction Steps

1. Clone this repo
2. Build with Turbopack:

```bash
npm run build:turbo
# or
yarn build:turbo
# or
pnpm build:turbo
# or
bun build:turbo
```

3. The loader will throw an error when processing CSS modules because `loadModule` is undefined in the Turbopack loader context. If you run the same command with `build` instead of `build:turbo`, the loader will work as expected.

## Implementation Details

- The custom loader is located in `loaders/index.js`
- The loader is configured for both webpack and Turbopack in `next.config.ts`
- The loader attempts to use `this.loadModule` and throws an error if it's undefined

## Expected Behavior

The `loadModule` method should be available in the Turbopack loader interface, just as it is in webpack loaders.

## Actual Behavior

When running under Turbopack, `this.loadModule` is undefined, causing the loader to throw an error.
