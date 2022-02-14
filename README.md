# Parcel transformer Nearley

A Parcel plugin which adds support for importing compiled Nearly grammars. This plugin is for **Parcel v2**. For the first version of parcel, see [parcel-plugin-nearley](https://github.com/adam1658/parcel-plugin-nearley).

## Usage

1. Install `nearley` and `parcel-transformer-nearley` with yarn or with npm:

```
yarn add nearley
yarn add -D parcel-transformer-nearley
```

```
npm install --save nearley
npm install --save-dev parcel-transformer-nearley
```

2. Create `.parcelrc` next to your `package.json`, with the following json content in it:

```json
{
  "extends": "@parcel/config-default",
  "transformers": {
    "*.ne": ["parcel-transformer-nearley"]
  }
}
```

3. Now you can import `*.ne` files from javascript:

```js
import { default as nearley } from "nearley"

import grammar from "./grammar.ne"

var parser = new nearley.Parser(grammar)

parse.feed("text")
// ...
```
