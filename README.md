# my-portfolio

- [my-portfolio](#my-portfolio)
  - [Requirements](#requirements)
  - [How to](#how-to)
    - [Setup](#setup)
    - [Develop (HMR)](#develop-hmr)
    - [Lint](#lint)
      - [HTML](#html)
      - [JavaScript, TypeScript](#javascript-typescript)
    - [Build](#build)
  - [Misc](#misc)
    - [Committer](#committer)

## Requirements

- Node
  - htmllint
  - parcel-bundler

## How to

### Setup

After clone this repository,

```sh
npm install
```

### Develop (HMR)

```sh
npm run dev
```

then, you can see the realtime preview at `http://localhost:1234` .

cf. [Hot Module Replacement - Parcel](https://parceljs.org/hmr.html)

### Lint

#### HTML

```sh
npm run lint:html
```

then, `*.html` will be checked and show errors by [htmllint](http://htmllint.github.io) .

#### JavaScript, TypeScript

```sh
npm run lint:script
```

then, `script/*.{js,ts}` will be fixed some error by [eslint](https://eslint.org) .

### Build

```sh
npm run build
```

then, you can get `dist` to deployable assets.

## Misc

### Committer

- [Shingo Eto](mailto:shingoetohh@gmail.com)
