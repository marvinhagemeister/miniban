# miniban

`miniban` is a tiny IBAN validator that is optimized for size and performance.
It weights only merly **550 bytes**!

## Installation

```bash
# npm
npm install miniban

# yanr
yarn add miniban
```

## Usage

This is super easy: `miniban` only has 1 function.

```js
import { isValidIBAN } from "miniban";

console.log(isValidIBAN("AL47212110090000000235698741"));
// logs: true
```

## License

`MIT`, see [License file](./License.md).
