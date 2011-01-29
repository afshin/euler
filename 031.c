#include <stdio.h>

main(){
    int counter, a, b, c, d, e, f, g, h;
    counter = 0;
    for (a = 0; a <= 200; a += 1) 
        for (b = 0; b <= 100; b += 1) 
            for (c = 0; c <= 40; c += 1) 
                for (d = 0; d <= 20; d += 1) 
                    for (e = 0; e <= 10; e += 1) 
                        for (f = 0; f <= 4; f += 1) 
                            for (g = 0; g <= 2; g += 1) 
                                for (h = 0; h <= 1; h += 1) 
                                    if (a + 2*b + 5*c + 10*d + 20*e + 50*f + 100*g + 200*h == 200) counter += 1;
    printf("combinations for 200p is: %d\n", counter);
}