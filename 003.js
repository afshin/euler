var find_smallest_divisor = function(num){ // greater than or equal to 3
        for (var lcv = 3; Math.floor(num / lcv) + 1 > lcv; lcv += 2){
                if (num % lcv === 0) {print('divisor is: ' + lcv + '\n'); return lcv;}
        };
};
var num = 600851475143;
num = num / find_smallest_divisor(num);