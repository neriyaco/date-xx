export declare class FDate extends Date {
    /**
     * Time steps from milliseconds to year, the value is the amount of milliseconds
     */
    static readonly TIME: {
        MILLISECOND: number;
        SECOND: number;
        MINUTE: number;
        HOUR: number;
        DAY: number;
        WEEK: number;
        MONTH: number;
        YEAR: number;
    };
    /**
     * Days of the week names
     */
    static readonly DAYS: string[];
    /**
     * Months names
     */
    static readonly MONTHS: string[];
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
     * `M` - month, `unlike Date.getMonth()`, it will return the actual month (e.g. April - 4)
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
    format(formatStr: string): string;
    /**
     * Returns a string which tells how much time passed since this date (e.g. 5 minutes ago).
     * @param skip An array of keys from `FDate.TIME` to skip, defaults to `['MILLISECONDS']`.
     *
     * If the time passed is lower than the milliseconds value of the first time step that was not skipped,
     * the function will return the string `'Now'`
     */
    represent(skip?: Array<keyof typeof FDate.TIME>): string;
    private _twoDigitPad;
}
