# custom-type-api

API library to interface with the Custom Types and Slices API for Prismic

## Important

I have intentionally only implemented mainly support for node as I don't see the need to have this ability to interact with the API available client side.

### WIP, please add issues or comments if there is anything that you see :)

The readme is a WIP and the code could probably have some error handling added.

## Usage

you can install the package using:

> **Note**
> you can use yarn, npm, pnpm or the github package registry.

```bash
npm i -D @reecem/custom-type-api
```

Below is an example of how to use this to interact with the API for the custom types, it gets a type and writes the result to ta json file.

### If using commonJS:

```js
const Api = require('@reecem/custom-type-api');
const credentials = require('./env.json');
const fs = require('fs');
const path = require('path')

const api = new Api('slicemachine-startup', credentials.token)

async function test() {
  await api.init()

  try {
    const type = await api.types().getOne('page');

    console.log(type)

    fs.writeFileSync(path.join(__dirname, 'page.json'), JSON.stringify(type, null, 2))
  } catch (ex) {
    console.error(ex)
  }
}

test()
```


### If using modules:

```js
import Api from '@reecem/custom-type-api'

import { createRequire } from "module"; // Bring in the ability to create the 'require' method
const require = createRequire(import.meta.url); // construct the require method
const credentials = require('../env.json');

async function test() {
  const api = new Api('slicemachine-startup', credentials.token)

  await api.init()

  try {
    let slice = await api.slices().getOne('form_slice');
    console.log(slice)
    fs.writeFileSync(path.join(__dirname, 'form_slice.json'), JSON.stringify(slice, null, 2))
  } catch (ex) {
    console.error(ex)
  }
}

test()
```
