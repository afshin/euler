require('./common/euler').run(function () {
    var year, month, total = 0;
    for (year = 1901; year < 2001; year += 1)
        for (month = 0; month < 12; month += 1) if ((new Date(year, month, 1)).getDay() === 0) total += 1;
    return total
});