var counter = 0;
for (var a = 0; a <= 200; a += 1) 
    for (var b = 0; b <= 100; b += 1) 
        for (var c = 0; c <= 40; c += 1) 
            for (var d = 0; d <= 20; d += 1) 
                for (var e = 0; e <= 10; e += 1) 
                    for (var f = 0; f <= 4; f += 1) 
                        for (var g = 0; g <= 1; g += 1) 
                            if (a + 2*b + 5*c + 10*d + 20*e + 50*f + 100*g === 200) counter += 1;

java.lang.System.out.println('# of combinations(' + 200 + '): ' + counter);
