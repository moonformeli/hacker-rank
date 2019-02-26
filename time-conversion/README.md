Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.

### Function Description

Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):
* s: a string representing time in  hour format

### Input Format

A single string _s_ containing a time in 12-hour clock format(i.e.:_hh:mm:ss_ AM or _hh:mm:ss_ PM), where 01 <= _hh_ <= 12 and 00 <= _mm, ss_ <= 59.

### Constraints

* All input times are valid

### Output Format

Convert and print the given time in 24-hour format, where 00 <= _hh_ <= 23.

### Sample Input 0

> 07:05:45AM

### Sample Output 0

> 19:05:45


