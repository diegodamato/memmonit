# MemoryMonitoring
A library to help monitor operating system memory.

# Installation

```npm install memmonit --save```

# Parameter information (conversion units)

Each method takes as a parameter the unit that wants to receive the memory information.
The available units are Kilobyte (kB), Megabyte (MB) and Gigabytes (GB).

# Usage examples

* ## Get memory usage

```js
let memmonit = require("memmonit");

let memoryUsage = memmonit.getMemoryUsage("GB");
console.log(memoryUsage);    //2.015354681

let memoryUsageTrunc = memmonit.memoryUsageTrunc("GB");
console.log(memoryUsageTrunc);   //2

let memoryUsageFixed = memmonit.getMemoryUsageFixed("GB", 2);
console.log(memoryUsageFixed);   //2.02
 ```


* ## Get memory total

```js
let memmonit = require("memmonit");

let memoryTotal = memmonit.getMemoryTotal("GB");
console.log(memoryTotal);    //15.364312

let memoryTotalTrunc = memmonit.getMemoryTotalTrunc("GB");
console.log(memoryTotalTrunc);   //15

let memoryTotalFixed = memmonit.getMemoryTotalFixed("GB", 2);
console.log(memoryTotalFixed);   //15.36
```
