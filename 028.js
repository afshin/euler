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
var a = [1], b = [1], c = [1], d = [1];
var lcv;
for (lcv = 3; lcv < 1002; lcv += 2){
    a.push(lcv * lcv);
};
var len = a.length;
for (lcv = 1; lcv < len; lcv += 1){
    b[lcv] = a[lcv] - (4 * lcv);
    c[lcv] = b[lcv] - (2 * lcv);
    d[lcv] = c[lcv] + (4 * lcv);
};
java.lang.System.out.println('sum is: ' + (a.sum() + b.sum() + c.sum() + d.sum() - 3));