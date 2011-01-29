var sum = function(arr){
    var temp = 0;
    arr.map(function(i){temp += i;});
    return temp;
};
var name_score = function(name, index){
    return sum(name.split('').map(function(c){return c.charCodeAt(0) - 64;})) * index;
};
var time_start = Date.now();
var data = readFile('./022.txt').replace(/\"/g, '').split(',').sort();
var answer = sum(data.map(function(name, index){return name_score(name, index + 1);}));
var time_end = Date.now();
java.lang.System.out.println('\nanswer is ' + answer);
java.lang.System.out.println('\ndone in ' + (time_end - time_start) + ' ms.');