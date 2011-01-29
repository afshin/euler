var words = {
    0: '',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    100: 'onehundred',
    1000: 'onethousand'
};
var num_to_word = function(num){
    var answer, temp;
    if (num in words) return words[num];
    if (num < 100){
        answer = words[num - (num % 10)] + words[num % 10];
        words[num] = answer;
        return answer;
    };
    if (num < 1000){
        temp = num_to_word(num % 100);
        answer = words[Math.floor(num / 100)] + 'hundred' + (temp.length ? 'and' + temp : temp);
        words[num] = answer;
        return answer;
    };
};

var total = 0;
var temp;
for (var lcv = 1; lcv < 1001; lcv += 1){
    temp = num_to_word(lcv);
    total += temp.length;
    print(lcv + ' ' + temp + ' ' + total);
    
};