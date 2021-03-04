# Dead Simple Console Colors

Straight forward info, success, warning, and error console color.

## Installation and usage

Install Dead Simple Console Colors from npm

```md
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
 * Console.warn()
 * Log text in yellow
 **/
Console.warn("This method will be deprecated in the next release") 

/** 
 * Console.error()
 * Log text in red
 **/
Console.error("Failed to save to db") 

```

## Example

![Alt text](https://github.com/unit57/dead-simple-console-colors/blob/master/dead-simple-console-colors-screen-shot.png?raw=true "Example console.logs with colors")

__That's it!__
