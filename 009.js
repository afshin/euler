(function(){
    var time_start = Date.now();
    var a, b, c;
    for (c = 1000; c > 2; c -= 1){
        for (b = c - 1; b > 1; b -= 1){
            for (a = b - 1; a > 0; a -= 1){
                if (((a * a) + (b * b) == (c * c)) && ((a + b + c) == 1000)){
                    java.lang.System.out.println([a, b, c].join(', '));
                };
            };
        };
    };
    var time_end = Date.now();
    java.lang.System.out.println('\ndone in ' + (time_end - time_start) + ' ms.');
})();