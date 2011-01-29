var digits = '93326215443944152681699238856266700490715968264381621468592963895217599993229915608941463976156518286253697920827223758251185210916864000000000000000000000000';
    digits = digits.split('').map(function(d){return d - 0;});
var sum = function(arr){
    var temp = 0;
    arr.map(function(i){temp += i;});
    return temp;
};
print(sum(digits));