#include <math.h>
#include <stdio.h>
#include "common/euler.h"
void solution()
{
    unsigned long long answer = 0, current = 0, magic = 10000000000ULL;
    int i = 0, j = 0;
    for (i = 1; i <= 1000; ++i) {
        current = i;
        for (j = 1; j < i; ++j) {
            current *= i;
            current %= magic; // only care about last digits, drop the rest
        }
        answer += current;
    }
    printf("Answer is: %llu\n", answer % magic);
}
int main(int argc, char *argv[])
{
    euler_run(argv[0], solution);
    return 0;
}