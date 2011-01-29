Array.prototype.reduce = function(fn, acc){
    var length = this.length;
    var result = acc;
    for (var index = 0; index < length; index += 1){
        result = fn(result, this[index])
    };
    return result;
};
Array.prototype.sum = function(){
    return this.reduce(function(acc, i){return acc + (i || 0);}, 0);
};
var fifths = {
    0: 0,
    1: 1,
    2: 32,
    3: Math.pow(3, 5),
    4: Math.pow(4, 5),
    5: Math.pow(5, 5),
    6: Math.pow(6, 5),
    7: Math.pow(7, 5),
    8: Math.pow(8, 5),
    9: Math.pow(9, 5)
};
var digits, answers = [];
for (var lcv = 10; lcv < 1000000; lcv += 1){
    digits = (lcv + '').split('').map(function(str){return str - 0;});
    if (digits.reduce(function(acc, i){return acc + fifths[i];}, 0) === lcv) answers.push(lcv);
};
java.lang.System.out.println('answers are: ' + answers.join(', ') + '\n\nsum is: ' + answers.sum());