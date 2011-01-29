var terms = {};
var lcv_1 = 2, lcv_2 = 2;
for (lcv_1 = 2; lcv_1 < 101; lcv_1 += 1){
    for (lcv_2 = 2; lcv_2 < 101; lcv_2 += 1){
        terms[Math.pow(lcv_1, lcv_2)] = null;
    };
};
var count = 0;
for (var x in terms){
    count += 1;
};
java.lang.System.out.println('total is: ' + count);