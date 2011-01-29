Number.prototype.proper_divisors = function(){
    var divisors = [1];
    var temp;
    for (var lcv = 2; lcv < Math.floor(Math.sqrt(this)) + 1; lcv += 1){
        if (this % lcv === 0){
            divisors.push(lcv);
            temp = this / lcv;
            if (temp !== lcv) divisors.push(temp);
        };
    };
    return divisors;
};
Array.prototype.reduce = function(fn, acc){
    var length = this.length;
    var result = acc;
    for (var index = 0; index < length; index += 1){
        result = fn(result, this[index])
    };
    return result;
};
Array.prototype.sum = function(){
    return this.reduce(function(acc, i){return acc + i;}, 0);
};
var upper_bound = 28123 + 1;
var abundant_numbers = [];
var lcv;
for (var lcv = 2; lcv < upper_bound; lcv += 1){
    if (lcv.proper_divisors().sum() > lcv) abundant_numbers.push(lcv);
};
var abundant_numbers_hash = abundant_numbers.reduce(function(acc, num){
    acc[num] = null;
    return acc;
}, {});

var sum_of_abundants = function(num){
    var upper_bound = Math.ceil(num / 2) + 1;
    var lcv = 0;
    while (abundant_numbers[lcv] < upper_bound){
        if ((num - abundant_numbers[lcv]) in abundant_numbers_hash) return true;
        lcv += 1;
    };
    return false;
};
var answers = [];
for (lcv = 1; lcv < upper_bound; lcv += 1){
    if (!sum_of_abundants(lcv)) answers.push(lcv);
};

java.lang.System.out.println('sum is: ' + answers.sum());