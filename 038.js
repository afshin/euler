require('./common/euler').run(function () {
    // find largest 9 digit pandigital whose written values equal {1, 2, ... n} * x where n >= 2 and x is an integer
    var euler = this, nums = euler.permutations([9, 8, 7, 6, 5, 4, 3, 2, 1], 1).sort(), lcv, len = nums.length;
    var is_match = (function () {
        var max = [null, null, 9999, 500, 99, 99], min = [null, null, 4000, 100, 10, 10];
        return function (num) {
            for (var i = 2, j, range, current; i < 7; i += 1){
                range = euler.range(1, i);
                for (j = min[i]; j < max[i]; j += 1){
                    current = range.map(function (v) {return v * j;}).join('');
                    if (current.length > 9) break; else if (num === current) return true;
                };
            };
            return false;
        };
    })();
    for (lcv = len - 1; lcv > 0; lcv -= 1) if (is_match(nums[lcv])) return nums[lcv];
});