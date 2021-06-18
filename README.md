# custom-type-api

API library to interface with the Custom Types and Slices API for Prismic

## Important

I have intentionally only implemented mainly support for node as I don't see the need to have this ability to interact with the API available client side.

### WIP, please add issues or comments if there is anything that you see :)

The readme is a WIP and the code could probably have some error handling added.

## Example

Below is an example of how to use this to interact with the API for the custom types, it gets a type and writes the result to ta json file.

```js
const Api = require('./dist/index').default;
const credentials = require('./env.json');
const fs = require('fs');
const path = require('path')


const api = new Api('slicemachine-startup', credentials.token)

async function test() {
  await api.login()

  try {
    const response = await api.types().getOne('page');
    const res = await response.json();
    console.log(res)
    fs.writeFileSync(path.join(__dirname, 'page.json'), JSON.stringify(res, null, 2))
  } catch (ex) {
    console.error(ex)
  }
}

test()
```
