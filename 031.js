require('./common/euler').run(function () {
    var euler = this, count = 0, a, b, c, d, e, f, g; 
    for (a = 200 ; a >= 0 ; a -= 200) 
        for (b = a ; b >= 0 ; b -= 100) 
            for (c = b ; c >= 0 ; c -= 50) 
                for (d = c ; d >= 0 ; d -= 20) 
                    for (e = d ; e >= 0 ; e -= 10) 
                        for (f = e ; f >= 0 ; f -= 5) 
                            for (g = f ; g >= 0 ; g -= 2) count += 1;
    return count;
});