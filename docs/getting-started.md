## Getting Started

### Requirements
  * Mac OS X, Windows, or Linux
  * [Node.js](https://nodejs.org/) v5.7+ [download link](https://nodejs.org/en/download/stable/)
  * `npm` v3.6 or newer (new to [npm](https://docs.npmjs.com/)?)
  * Text editor or IDE pre-configured with React/JSX/Flow/ESlint ([learn more](./how-to-configure-text-editors.md))

### Quick Start

#### 1. Get the latest version

You can start by cloning the latest version of common-fe-template on your
local machine by running:

```shell
$ git clone -b master --single-branch https://github.com/euler-ui/boilerplate.git FooApp
$ cd FooApp
$ rm -rf .git
```

#### 2. Run `npm install`
This will install both run-time project dependencies and developer tools listed
in [package.json](./package.json) file.

#### 3. Run `npm start`
This command will build the app from the source files (/src) into the output /build folder. As soon as the initial build completes, it will start the Node.js server (node src/server.js).
> [http://localhost:3334/](http://localhost:3334/) — Node.js server (`src/server.js`)<br>