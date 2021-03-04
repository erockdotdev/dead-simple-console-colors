# Dead Simple Console Colors

Straight forward info, success and error console colors.

# Installation and usage

Install Dead Simple Console Colors from npm

```
npm install dead-simple-console-colors

yarn add dead-simple-console-colors
```


Then use it in your app:

```js
// import Dead Simple Console Colors
const Console = require('dead-simple-console-colors')

import Console from "dead-simple-console-colors"
```
```js
/** 
 * Console.info() 
 * Log text in cyan color
 **/

Console.info("Starting app...") 

/** 
 * Console.success()
 * Log text in green
 **/

Console.success("Successfully saved entry to db") 

/** 
 * Console.error()
 * Log text in red
 **/

Console.error("Failed to saved to db") 

```

That's it!
