Number.prototype.divisors = function(){
    var divisors = [1];
    var limit = Math.sqrt(this) + 1;
    for (var lcv = 2; lcv < limit; lcv += 1){
        if (this % lcv === 0){
            divisors.push(lcv);
            divisors.push(this / lcv);
        };
    };
    return divisors;
};
var sum = function(arr){
    var temp = 0;
    arr.map(function(i){temp += i;});
    return temp;
};
var d = function(x){
    return sum(x.divisors());
};
var is_amicable = function(a, b){
    return (d(a) === b) && (d(b) === a);
};
var lcv = 2;
var temp = d(lcv);
var amicable_sum = 0;
var time_start = Date.now();
var memo = {};
while (lcv < 10000){
    if (lcv !== temp && !(temp in memo) && !(lcv in memo) && is_amicable(lcv, temp)){
        java.lang.System.out.print('[' + lcv + ', ' + temp + '] ');
        amicable_sum += lcv + temp;
        memo[lcv] = true;
        memo[temp] = true;
    };
    lcv += 1;
    temp = d(lcv);
};
var time_end = Date.now();
java.lang.System.out.println('\n' + amicable_sum);
java.lang.System.out.println('\ndone in ' + (time_end - time_start) + ' ms.');