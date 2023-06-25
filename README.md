# Stayrealist using Turborepo react-native starter

This is the mono repo for stayrealist project.

## What's inside?

This repo includes the following packages/apps:

### Apps and Packages

- `native`: a [react-native](https://reactnative.dev/) app built with [expo](https://docs.expo.dev/)
- `web`: a [Next.js](https://nextjs.org/) app built with [react-native-web](https://necolas.github.io/react-native-web/)
- `ui`: a stub [react-native](https://reactnative.dev/) component library shared by both `web` and `native` applications
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [Expo](https://docs.expo.dev/) for native development
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [Prettier](https://prettier.io) for code formatting


## How to start?
1. For Mapbox to render properly, `/app/web/.env.local` is needed, like

    ```
    NEXT_PUBLIC_MAPBOX_DEFAULT_PUBLIC_ACCESS_TOKEN=pk.eyJ.. 
    ```

1. Run command to start: 
    ```sh
    yarn install
    yarn dev
    ```