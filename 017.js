require('./common/euler').run(function () {
    var euler = this,
        words = {
            0: '', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine',
            10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen',
            17: 'seventeen', 18: 'eighteen', 19: 'nineteen', 20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty',
            60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety', 100: 'onehundred', 1000: 'onethousand'
        },
        num_to_word = function (num) {
            var temp;
            if (num in words) return words[num];
            if (num < 100) return words[num] = words[num - (num % 10)] + words[num % 10];
            if (num < 1000){
                temp = num_to_word(num % 100);
                return words[num] = words[Math.floor(num / 100)] + 'hundred' + (temp.length ? 'and' + temp : temp);
            };
        };
    return euler.range(1, 1000).reduce(function (acc, val) {return acc + num_to_word(val).length;}, 0);
});