//#include <stdio.h>
//#include <math.h>
var printf = function(str){java.lang.System.out.print(str);};
var divisors_found = function(num){
    var found;
    found = 2;
    var lcv;
    for (lcv = 2; lcv < (Math.floor(Math.sqrt(num))) + 1; lcv += 1){
        if (num % lcv == 0) found += 2;
    };
    if (found > 350) printf('[n: ' + num + ', d: ' + found + '] ');
    return found;
};
var main = function(){
    var time_start = Date.now();
    var current_triangle;
    var lcv;
    current_triangle = 10;
    lcv = 5;
    while (divisors_found(current_triangle) < 500){
        current_triangle += lcv;
        lcv += 1;
    };
    var time_end = Date.now();
    printf('\n\ncurrent_triangle is: ' + current_triangle + '\nThis took: ' + (time_end - time_start) + ' ms\nDone.\n');
}

main();