#include <stdio.h>
#include <math.h>
int divisors_found(unsigned long long int num) {
    int found = 2, lcv;
    for (lcv = 2; lcv < (floor(sqrt(num))) + 1; lcv += 1) if (num % lcv == 0) found += 2;
    return found;
};
int main() {
    unsigned long long int current = 10ULL;
    int lcv = 5;
    while (divisors_found(current) < 500) current += lcv++;
    printf("answer: %llu\n", current);
}