var euler = require('./common/euler');
var main = function(){
    var a, b, c, result = [];
    for (c = 1000; c > 2; c -= 1){
        for (b = c - 1; b > 1; b -= 1){
            for (a = b - 1; a > 0; a -= 1){
                if (((a * a) + (b * b) == (c * c)) && ((a + b + c) == 1000)) result.push([a, b, c].join(', '));
            };
        };
    };
    return result.join('\n');
};
euler.run(main);