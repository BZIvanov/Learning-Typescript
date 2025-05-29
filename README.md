# Learning Typescript

Learning materials related to TypeScript.

## Installation

Run the below command to install typescript globally.

```bash
npm install -g typescript
```

After the installation you can run file by navigating to the file's folder and run the following:

```bash
tsc my-file-name.ts
```

And .js file will be generated for you, which you can use.

In case you get ES version error, run with the below command. This can happen if you are using newer ecmascript features.

```bash
tsc --target es6 my-file.ts
```

---

Or alternatively you could run the below command to execute ts file without needing to install typescript

```bash
npx tsc my-file.ts
```

## Creating configuration file

Run the below command to create configuration file for your project:

```bash
tsc --init
```

## TypeScript with React.js

Check out this [repo](https://github.com/BZIvanov/Learning-ReactJS) for TypeScript with React.js.

## Playground

Use the ts playground on the official website to preview how ts works under the hood.
