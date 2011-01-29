var ratio_to_decimal = function(top, bottom){
    var remainder, answer = '', numerator = top * 10, denominator = bottom;
    var numerators = {};
    while (!(numerator in numerators)){
        numerators[numerator] = null;
        answer += Math.floor(numerator / denominator);
        numerator = (numerator % denominator) * 10;
    };
    return answer;
};
var longest_repeating_cycle = '';
var longest_value, temp;
for (var lcv = 2; lcv < 1000; lcv += 1){
    temp = ratio_to_decimal(1, lcv);
    if (temp.length > longest_repeating_cycle.length){
        longest_repeating_cycle = temp;
        longest_value = lcv;
    };
};
java.lang.System.out.println('longest repeating cycle for 1/d where d < 1000 is 1/' + longest_value + ': ' + longest_repeating_cycle);