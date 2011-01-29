var euler = require('./common/euler');
var main = function(){
    var count = 0, a, b, c, d, e, f, g; 
    for (a = 200 ; a >= 0 ; a -= 200) 
        for (b = a ; b >= 0 ; b -= 100) 
            for (c = b ; c >= 0 ; c -= 50) 
                for (d = c ; d >= 0 ; d -= 20) 
                    for (e = d ; e >= 0 ; e -= 10) 
                        for (f = e ; f >= 0 ; f -= 5) 
                            for (g = f ; g >= 0 ; g -= 2) count += 1;
    return count;
};
euler.run(main);
/*
Array.prototype.less_than = (function(){
    var memo = {};
    return function(value){ // assumes sorted array, returns new array
        if (value in memo) return memo[value];
        return memo[value] = this.slice(0, Math.abs(this.search(value)));
    };
})();
Array.prototype.sum = function(){
    return this.reduce(function(acc, val){return acc + val;}, 0);
};
Number.prototype.floor = function(){return Math.floor(this);};
// array tail-recursive binary search with customizable comparator
Array.prototype.search = function(value, fn, low, high, mid){
    if (high < low) return ((low === 0) ? -0.1 : -1 * low);
    var comparator = fn || function(x){return value - x;};
    if (arguments.length < 5) return this.search(value, fn, 0, this.length - 1, ((this.length -  1) / 2).floor());
    var potential = comparator(this[mid]);
    if (potential > 0) return this.search(value, comparator, mid + 1, high, ((mid + 1 + high) / 2).floor());
    if (potential < 0) return this.search(value, comparator, low, mid - 1, ((low + mid - 1) / 2).floor())
    return mid;
};
Array.prototype.insert = function(value){ // assumes sorted array, returns new array
    var index = Math.abs(this.search(value));
    return this.slice(0, index).concat(value).concat(this.slice(index, this.length));
};
var cache = {};
var denominations = [1, 2, 5, 10, 20, 50, 100, 200];
var combinations = function(goal, denominations){
    if (goal === 0) return [];
    if (denominations.length === 0) return [];
    if (goal in cache) return cache[goal];
    var coins = denominations.less_than(goal + 1);
    var combos = [];
    var answers = {};
    var len = coins.length, coin, rest;
    for (var lcv = 0; lcv < len; lcv += 1){
        coin = coins[lcv];
        if (coin === goal){
            if (!(coin + '' in answers)){
                answers[coin + ''] = null;
                combos.push([coin]);
            };
            break;
        };
        var found = false;
        if ((goal - coin) in cache){
            rest = cache[goal - coin];
            found = true;
        }else{
            rest = combinations(goal - coin, coins);
        };
        rest.map(function(combo){
            if (combo.length){
                var sorted;
                if (found)
                    sorted = combo.insert(coin);
                else
                    sorted = combo.sort().insert(coin);
                var name = sorted.join('');
                if (name in answers) return;
                answers[name] = null;
                combos.push(sorted);
            };
        });
    };
    cache[goal] = combos;
    return combos;
};
var temp;

for (var lcv = 1; lcv < 201; lcv += 1){
    temp = combinations(lcv, denominations).length;
    java.lang.System.out.println('# of combinations(' + lcv + '): ' + temp);
};
*/