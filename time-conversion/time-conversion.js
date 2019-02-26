function timeConversion(s) {
    /*
     * Write your code here.
     */
    const isPM = s.match(/pm/gi) != null;
    const times = s.replace(/[pm|am]/gi, '').split(':');
    let [hour] = times;
    hour = parseInt(hour);

    const isNoon = isPM && hour === 12;
    const isMidnight = !isPM && hour === 12;

    if (isNoon) {
    } else if (isMidnight) {
        hour -= 12;
    } else if (isPM) {
        hour += 12;
    }

    if (hour < 10) {
        hour = '0' + hour;
    }

    times[0] = hour;

    return times.join(':');
}
