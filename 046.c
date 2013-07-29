#include <stdio.h>
#include <stdlib.h>
#include "common/afll.h"
#include "common/euler.h"
AfLL *primes;
AfLL *double_squares;
int is_goldbach(unsigned long num)
{
    return 0;
}
void solution()
{
    primes = AfLL_new(5, (AfLL_vector){1, 2, 3, 5, 7});
    double_squares = AfLL_new(5, (AfLL_vector){1, 8, 18, 32, 50});
    unsigned long candidate = 9;
    while (is_goldbach(candidate)) candidate += 2;
    AfLL_destroy(primes);
    AfLL_destroy(double_squares);
    printf("Answer is: %lu\n", candidate);
}
int main(int argc, char *argv[])
{
    euler_run(argv[0], solution);
    return 0;
}