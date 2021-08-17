"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.FDate = void 0;
var FDate = /** @class */ (function (_super) {
    __extends(FDate, _super);
    function FDate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a string representation of the date.
     *
     * The letter are being replaced as the following:
     *
     * `S` - milliseconds
     *
     * `s` - seconds
     *
     * `ss` - 2 digits seconds
     *
     * `m` - minutes
     *
     * `mm` - 2 digits minutes
     *
     * `h` - hours
     *
     * `hh` - 2 digits hours
     *
     * `D` - day of the month
     *
     * `DD` - 2 digits day of the month
     *
     * `EEE` - 3 first letter of day of the week (e.g. Sun)
     *
     * `EEEE` - full name of the week (e.g. Sunday)
     *
     * `M` - month, unlike `Date.getMonth()`, it will return the actual month (e.g. April - 4)
     *
     * `MM` - 2 digits month
     *
     * `MMM` - 3 first letter of the month (e.g. Apr)
     *
     * `MMMM` - full name of the month
     *
     * `YY` - 2 digits year (e.g. 98)
     *
     * `YYYY` - full year (e.g. 1998)
     * @param formatStr Format string
     */
    FDate.prototype.format = function (formatStr) {
        var day = this.getDate(), month = this.getMonth(), year = this.getFullYear(), hour = this.getHours(), minute = this.getMinutes(), second = this.getSeconds(), milliseconds = this.getMilliseconds(), hh = this._twoDigitPad(hour), mm = this._twoDigitPad(minute), ss = this._twoDigitPad(second), EEEE = FDate.DAYS[this.getDay()], EEE = EEEE.substr(0, 3), DD = this._twoDigitPad(day), M = month + 1, MM = this._twoDigitPad(M), MMMM = FDate.MONTHS[month], MMM = MMMM.substr(0, 3), YYYY = year + "", YY = YYYY.substr(-2);
        return formatStr
            .replace('hh', hh.toString()).replace('h', hour.toString())
            .replace('mm', mm.toString()).replace('m', minute.toString())
            .replace('ss', ss.toString()).replace('s', second.toString())
            .replace('S', milliseconds.toString())
            .replace('DD', DD.toString()).replace('D', day.toString())
            .replace('MMMM', MMMM).replace('MMM', MMM).replace('MM', MM.toString()).replace('M', M.toString())
            .replace('EEEE', EEEE).replace('EEE', EEE)
            .replace('YYYY', YYYY)
            .replace('YY', YY);
    };
    /**
     * Returns a string which tells how much time passed since this date (e.g. 5 minutes ago).
     * @param skip An array of keys from `FDate.TIME` to skip, defaults to `['MILLISECONDS']`.
     *
     * If the time passed is lower than the milliseconds value of the first time step that was not skipped,
     * the function will return the string `'Now'`
     */
    FDate.prototype.represent = function (skip) {
        if (skip === void 0) { skip = ['MILLISECOND']; }
        var timeDiff = Date.now() - +this;
        var timeAgo = 0;
        var timeStr = "Now";
        for (var step in FDate.TIME) {
            if (skip.includes(step)) {
                continue;
            }
            if (timeDiff > 0) {
                if (timeDiff >= FDate.TIME[step]) {
                    timeAgo = Math.floor(timeDiff / FDate.TIME[step]);
                    timeStr = timeAgo + " " + step.toLowerCase() + (timeAgo > 1 ? 's' : '') + " ago";
                }
                else {
                    break;
                }
            }
            else if (timeDiff < 0) {
                if (-timeDiff >= FDate.TIME[step]) {
                    timeAgo = Math.floor(-timeDiff / FDate.TIME[step]);
                    timeStr = "in " + timeAgo + " " + step.toLowerCase() + (timeAgo > 1 ? 's' : '');
                }
                else {
                    break;
                }
            }
        }
        return timeStr;
    };
    FDate.prototype._twoDigitPad = function (num) {
        return num < 10 ? "0" + num : num;
    };
    /**
     * Time steps from milliseconds to year, the value is in milliseconds
     */
    FDate.TIME = {
        MILLISECOND: 1,
        SECOND: 1e3,
        MINUTE: 6e4,
        HOUR: 3.6e6,
        DAY: 8.64e7,
        WEEK: 6.048e8,
        MONTH: 2.592e9,
        YEAR: 3.1104e10
    };
    /**
     * Days of the week names
     */
    FDate.DAYS = [
        "Sunday", "Monday", "Tuesday",
        "Wednesday", "Thursday", "Friday", "Saturday"
    ];
    /**
     * Months names
     */
    FDate.MONTHS = [
        "January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"
    ];
    return FDate;
}(Date));
exports.FDate = FDate;
