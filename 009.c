#include <stdio.h>
#include "common/euler.h"
void solution()
{
    int a, b, c;
    for (c = 1000; c > 2; c--)
        for (b = c - 1; b > 1; b--)
            for (a = b - 1; a > 0; a--)
                if (((a * a) + (b * b) == (c * c)) && ((a + b + c) == 1000))
                    printf("%d, %d, %d\n", a, b, c);
}

int main(int argc, char *argv[])
{
    euler_run(argv[0], solution);
    return 0;
}