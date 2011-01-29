var answers = {};
var paths = function(x, y){
    if (x === 1 || y === 1) return x + y;
    var key = x + ',' + y, alt_key = y + ',' + x;
    if (key in answers) return answers[key];
    var answer = paths(x - 1, y) + paths(x, y - 1);
    answers[key] = answer;
    answers[alt_key] = answer;
    return answer;
};
paths(20, 20);