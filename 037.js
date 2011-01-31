require('./common/euler').run(function(){
    var euler = this, is_prime = euler.is_prime;
    var is_truncatable_prime = (function(){
        var memo = {}, bad_nums = {0: null, 4: null, 6: null, 8: null};
        var check_iter = function(acc, val){return acc && is_prime(val);},
            forward_split_iter = function(acc, val){
                return (acc === null || val in bad_nums) ? null : acc.concat(+((acc[acc.length - 1] || '') + val));
            },
            backward_split_iter = function(acc, val){
                return (acc === null || val in bad_nums) ? null : acc.concat(+(val + (acc[acc.length - 1] || '')));
            };
        return function(num){
            if (num in memo) return memo[num];
            var str = num.toString().split(''),
                forward = str.reduce(forward_split_iter, []),
                backward = forward && str.reverse().reduce(backward_split_iter, []);
            if (!forward || !backward) return memo[num] = false;
            return memo[num] = forward.reduce(check_iter, true) && backward.reduce(check_iter, true);
        };
    })();
    var found = 0, candidate = 11, result = [];
    while (found < 11)
        if (is_prime(candidate += 2) && is_truncatable_prime(candidate)) found = result.push(candidate);
    return 'answer is: ' + result.reduce(function(acc, val){return acc + val;});
});