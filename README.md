# Parcel transformer Nearley

A Parcel plugin which adds support for importing compiled Nearly grammars. This plugin is for **Parcel v2**. For the first version of parcel, see [parcel-plugin-nearley](https://github.com/adam1658/parcel-plugin-nearley).

## Usage

1. Install the package with yarn or with npm:

```
yarn add -D parcel-transformer-nearley
```

```
npm install --save-dev parcel-transformer-nearley
```

2. Create `.parcelrc` and copy the following json content to it:

```json
{
  "extends": "@parcel/config-default",
  "transformers": {
    "*.ne": ["parcel-transformer-nearley"]
  }
}
```

3. Now you can import *.ne files from javascript:

```js
import { default as nearley } from "nearley"

import grammar from "./grammar.ne"

var parser = new nearley.Parser(grammar)

parse.feed("text")
// ...
```
