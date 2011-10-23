require('./common/euler').run(function (input) {
    var euler = this;
    return euler.permutations(euler.range(0, 9)).filter(function (val) {
        if (+val.substr(1, 3) % 2) return false; // d2d3d4 is divisible by 2
        if (+val.substr(2, 3) % 3) return false; // d3d4d5 is divisible by 3
        if (+val.substr(3, 3) % 5) return false; // d4d5d6 is divisible by 5
        if (+val.substr(4, 3) % 7) return false; // d5d6d7 is divisible by 7
        if (+val.substr(5, 3) % 11) return false; // d6d7d8 is divisible by 11
        if (+val.substr(6, 3) % 13) return false; // d7d8d9 is divisible by 13
        if (+val.substr(7, 3) % 17) return false; // d8d9d10 is divisible by 17
        return true;
    }).reduce(function (acc, val) {return +val + acc;}, 0);
});