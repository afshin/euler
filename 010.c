#include <stdio.h>

int is_prime(unsigned long long int num){
        if (num < 2) return 0;
        if (num % 2 == 0) return (num == 2);
        unsigned long long int lcv;
        for (lcv = 3; (num / lcv) + 2 > lcv; lcv += 2){
                if (num % lcv == 0){
                    return 0;
                };
        };
        return 1;
};

int main(){
    unsigned long long int sum;
    unsigned long long int lcv;
    sum = 0;
    for (lcv = 2; lcv < 2000001; lcv += 1){
        if (is_prime(lcv)) sum += lcv;
    };
    printf("sum of the primes below 2,000,000: %llu\n", sum);
};