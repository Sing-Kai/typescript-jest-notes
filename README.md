# Configuring TypeScript with Jest

## Prerequistes

Basic understaind of Node.js, TypeScript and Jest

## Install TypeScript

Set up and configure TypeScript in node using the below commands:

`npm init -y`

`npm i typescript ts-node --save-dev`

`npx tsconfig.json` select node.js

`mkdir src dist test`


Update package.json using below 

```
"scripts": {
    ...
    "build": "tsc"
  },
```

in tsconfig.json add:

```
  "exclude": ["node_modules"],
  "include": ["./src/**/*.ts"]
```  

Build ts files using the command 

`npm run build`

This compiles ts files into js files and will be located in the out folder. In this case it is folder called `dist`. At the moment there are no files to compile. 

Lets add some. 

in `src` folder add file named `foo.ts`

```
const sum
= (...a: number[]) =>
  a.reduce((acc, val) => acc + val, 0);

export default sum

```

in `test` folder add file named `foo.test.ts``

```
import sum  from '../src/foo';

test('basic', () => {
  expect(sum()).toBe(0);
});

test('basic again', () => {
  expect(sum(1, 2)).toBe(3);
});

```

## Install and Execute Jest

Set up and configure Jest using below commands:

`npm i jest ts-jest @types/jest --save-dev`

`npx ts-jest config:init`

Update package.json using below 

```
"scripts": {
    ...
    "test": "jest"
  },
```

Execute Jest using below command

`npm test`

## Folder Structure

```
├── dist
├── package.json
├── package-lock.json
├── src
│   └── foo.ts
├── test
│   └── foo.test.ts
└── tsconfig.json
└── jest.config.json
```
