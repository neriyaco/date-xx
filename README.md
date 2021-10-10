# better-date

Date library with formatting and representation.

## Installing
```
npm i better-date
```

## Formatting
Format example:
```js
var { DatePlus } = require("better-date");
var date = new DatePlus();
console.log(date.format("DD/MM/YY HH:mm:ss")); // Will pint something like 17/08/21 15:40:05
```
### Format letters table
| Letters | Meaning                                                     |
|---------|-------------------------------------------------------------|
| S       | milliseconds                                                |
| s       | seconds                                                     |
| ss      | 2 digits seconds                                            |
| m       | minutes                                                     |
| mm      | 2 digits minutes                                            |
| h       | hours                                                       |
| hh      | 2 digits hours                                              |
| D       | day of the month                                            |
| DD      | 2 digits day of the month                                   |
| EEE     | 3 first letters day of the week (e.g. Sun)                  |
| EEEE    | full name day of the week (e.g. Sunday)                     |
| M       | month, it will convert to the actual month (e.g. April - 4) |
| MM      | 2 digits month                                              |
| MMM     | 3 first letter month (e.g. Apr)                             |
| MMMM    | full name month (e.g. April)                                |
| YY      | 2 digits year (e.g. 21)                                     |
| YYY     | full year (e.g. 2021)                                       |

## Time constants
DatePlus comes with some useful objects.

`DatePlus.TIME` is an object holds all the time steps as their milliseconds values.

`DatePlus.DAYS` is an array that holds the days of the week names (Sunday is on index 0).

`DatePlus.MONTHS` is an array that holds the months names.


## Representing
Using the `represent` function will return a string that represents when the date object time is compared to now.
Usage example:
```js
var { DatePlus } = require("better-date");
var fiveHoursFromNow = new DatePlus(Date.now() + DatePlus.TIME.HOUR * 5);
var fiveHoursAgo = new DatePlus(Date.now() - DatePlus.TIME.HOUR * 5);

console.log(fiveHoursFromNow.represent()); // "5 hours ago"
console.log(fiveHoursAgo.represent()); // "in 5 hours"
```

## More functions
You can add specific amount of time to the date object using the functions `addSeconds`, `addMinutes` etc.
```js
var { DatePlus } = require("better-date");
var date = new DatePlus().addMinutes(5);
console.log(date.represent()); // "in 5 minutes"
```
