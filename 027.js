var primes = {2: null};
var not_primes = {};
var is_prime = function(num){
    if (num < 2) return false;
    if (num in primes) return true;
    if (num in not_primes) return false;
    var lcv;
    for (lcv = 3; Math.floor(num / lcv) + 2 > lcv; lcv += 2){
        if (num % lcv === 0){
            not_primes[num] =  null;
            return false;
        };
    };
    primes[num] = null;
    return true;
};
var formula = function(a, b){
    return function(n){
        return (n * n) + (a * n) + b;
    };
};
var lcv_1, lcv_2, quadratic, n, max = 0, max_values = {};
for (lcv_1 = -999; lcv_1 < 1000; lcv_1 +=1){
    for (lcv_2 = -999; lcv_2 < 1000; lcv_2 += 1){
        quadratic = formula(lcv_1, lcv_2);
        n = 0;
        while (is_prime(quadratic(n))){
            n += 1;
        };
        if (n > max){
            max = n;
            max_values = {
                a: lcv_1,
                b: lcv_2
            };
        };
    };
};
java.lang.System.out.println('max_values are: ' + max_values.a + ', ' + max_values.b);
java.lang.System.out.println('product is: ' + max_values.a * max_values.b);