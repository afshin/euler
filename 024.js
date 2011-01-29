/*
0 1 2
0 2 1
1 0 2
1 2 0
2 0 1
2 1 0

0 1 2 3
0 1 3 2
0 2 1 3
0 2 3 1
0 3 1 2
0 3 2 1
1 0 2 3
1 0 3 2
1 2 0 3
1 2 3 0
1 3 0 2
1 3 2 0
2 0 1 3
2 0 3 1
2 1 0 3
2 1 3 0
2 3 0 1
2 3 1 0
3 0 1 2
3 0 2 1
3 1 0 2
3 1 2 0
3 2 0 1
3 2 1 0
*/
var starting_array = [0, 1, 3, 4, 5, 6, 7, 8, 9];
/* use with a SORTED array */
var permutations = function(arr){
    var len = arr.length;
    if (len === 0) return [];
    if (len === 1) return [arr.join('')];
    var first, rest;
    var answers = [];
    for (var lcv = 0; lcv < len; lcv += 1){
        first = arr[lcv];
        rest = arr.slice(0, lcv).concat(arr.slice(lcv + 1, len));
        rest = rest.sort(function(a, b){return a - b;});
        permutations(rest).map(function(permutation){
            answers.push([first, permutation].join(''));
        });
    };
    return answers;
};
java.lang.System.out.println('millionth permutation is: 2' + permutations(starting_array)[274239]);