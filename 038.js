require('./common/euler').run(function () {
    var euler = this, nums = euler.permutations([9, 8, 7, 6, 5, 4, 3, 2, 1], 1), lcv, len = nums.length;
    var is_match = (function () {
        var min = [0, 0, 9000, 0, 0, 9], max = [0, 0, 9999, 0, 0, 9], memo = [];
        return function (num) {
            for (var i = 2, j, k, range, current; i < min.length; i += 1){
                if (!min[i]) continue;
                range = memo[i] || (memo[i] = euler.range(1, i));
                if (!range.cache) range.cache = [];
                for (j = min[i]; j < max[i]; j += 1){
                    current = range.cache[j] || (range.cache[j] = range.map(function (v) {return v * j;}).join(''));
                    if (current.length > 9) break; else if (num === current) return true;
                };
            };
            return false;
        };
    })();
    for (lcv = 0; lcv < len; lcv += 1) if (is_match(nums[lcv])) return nums[lcv];
});