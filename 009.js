require('./common/euler').run(function () {
    for (var i = 1000; i > 2; i -= 1)
        for (var j = i - 1; j > 1; j -= 1)
            for (var k = j - 1; k > 0; k -= 1)
                if (((k * k) + (j * j) === (i * i)) && ((k + j + i) === 1000))
                    return k * j * i;
    return 'failed!';
});