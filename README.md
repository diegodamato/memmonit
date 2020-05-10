# Memmonit
[![Build Status](https://travis-ci.org/diegodamato/memmonit.svg?branch=master)](https://travis-ci.org/diegodamato/memmonit)

[![NPM Version](https://camo.githubusercontent.com/c7fc88a41d2dd973595c1762edca42c7ccc2a547/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f7361666972612e737667)](https://www.npmjs.com/package/memmonit)

[![NPM Downloads](https://camo.githubusercontent.com/a2f229b65e01e97843365c61ba3023a4b01b16e3/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f646d2f7361666972612e737667)](https://npmcharts.com/compare/memmonit?minimal=true)

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
