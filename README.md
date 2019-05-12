# c quote types
A Node.js module that contains common types
## Installation 
```sh
npm install c-quote-types --save
yarn add c-quote-types
bower install c-quote-types --save
```
## Usage
### Javascript
```javascript
var pluralise = require('c-quote-types');
var boys = pluralise.getPlural('Boy');
```
```sh
Output should be 'Boys'
```
### TypeScript
```typescript
import { getPlural } from 'c-quote-types';
console.log(getPlural('Goose'))
```
```sh
Output should be 'Geese'
```
### AMD
```javascript
define(function(require,exports,module){
  var pluralise = require('c-quote-types');
});
```
## Test 
```sh
npm run test