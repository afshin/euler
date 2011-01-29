var year, month, date, total = 0;
for (year = 1901; year < 2001; year += 1){
    for (month = 0; month < 12; month += 1){
        date = new Date(year, month, 1);
        if (date.getDay() === 0) total += 1;
    };
};
print(total);