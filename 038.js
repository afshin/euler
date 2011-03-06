require('./common/euler').run(function () {
    // find largest 9 digit pandigital whose written values equal {1, 2, ... n} * x where n >= 2 and x is an integer
    var euler = this, nums = euler.permutations([9, 8, 7, 6, 5, 4, 3, 2, 1], 1), lcv, len = nums.length;
    nums = nums.sort().reverse();
    var is_match = (function () {
        var max = [null, null, 9999, 999, 999, 99, 99, 9];
        return function (num) {
            var i, j, range, current;
            for (i = 2; i < 8; i += 1){
                range = euler.range(1, i);
                for (j = 2; j < max[i]; j += 1){
                    current = range.map(function (v) {return v * j;}).join('');
                    if (current.length > 9) break; else if (num === current) return true;
                };
            };
            return false;
        };
    })();
    for (lcv = 0; lcv < len; lcv += 1) if (is_match(nums[lcv])) return nums[lcv];
});