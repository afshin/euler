require('./common/euler').run(function () {
    var max = 1000000;
    var is_palindrome = function (str) {
        var a = 0, b = str.length - 1;
        while (a < b) if (str[a++] !== str[b--]) return false;
        return true;
    };
    var result = [], lcv;
    for (lcv = 1; lcv < max; lcv += 1)
        if (is_palindrome(lcv.toString(10)) && is_palindrome(lcv.toString(2))) result.push(+lcv);
    return result.reduce(function (a, b) {return a + b;}, 0);
});