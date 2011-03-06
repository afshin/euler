require('./common/euler').run(function () {
    var euler = this, nums = euler.permutations([9, 8, 7, 6, 5, 4, 3, 2, 1], 1).sort(), lcv, len = nums.length;
    var is_match = (function () {
        var min = [null, null, 9000, null, 90], max = [null, null, 9999, null, 99], memo = [];
        return function (num) {
            for (var i = 2, j, k, range, current; i < 5; i += 1){
                if (!min[i]) continue;
                range = memo[i] || (memo[i] = euler.range(1, i));
                if (!range.cache) range.cache = [];
                for (j = min[i]; j < max[i]; j += 1){
                    current = range.cache[j] || (range.cache[j] = range.map(function (v) {return v * j}).join(''));
                    if (current.length > 9) break; else if (num === current) return true;
                };
            };
            return false;
        };
    })();
    for (lcv = len - 1; lcv > 0; lcv -= 1) if (is_match(nums[lcv])) return nums[lcv];
});