// run this script in rhino because node.js's Math.pow implementation gets imprecise faster than rhino's
(function () {
    var terms = {}, name, count = 0;
    for (var i = 2; i < 101; i += 1){
        for (var j = 2; j < 101; j += 1){
            name = Math.pow(i, j);
            if (name in terms) continue;
            terms[Math.pow(i, j)] = null;
            count += 1;
        };
    };
    java.lang.System.out.println('total is: ' + count);
})();