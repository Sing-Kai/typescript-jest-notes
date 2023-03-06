# Configuring TypeScript with Jest

## Prerequistes

Basic understaind of Node.js, TypeScript and Jest

## Install TypeScript

`npm init -y`

`npm i typescript ts-node --save-dev`

`npx tsconfig.json` select node.js

`mkdir src dist test`

## Install Jest

`npm i jest ts-jest @types/jest --save-dev`

`npx ts-jest config:init`

## Update package.json

in script section add the below lines

```
"scripts": {
    "build": "tsc"
    "test": "jest"
  },
```

## Execute Jest

`npm test`