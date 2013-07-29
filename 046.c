#include <stdio.h>
#include <stdlib.h>
#include "common/afll.h"
#include "common/euler.h"
AfLL *primes;
AfLL *double_squares;
int is_goldbach(unsigned long num)
{
    unsigned long sum = 0, prime_ticker = 0, dubsq_ticker = 1, dubsq = 0;
    AfLL *current_prime = primes, *current_dubsq;
    while (current_prime) {
        prime_ticker = current_prime->value;
        if (prime_ticker >= num) break;
        current_dubsq = double_squares;
        while (current_dubsq) {
            if (current_dubsq->value >= num) break;
            sum = prime_ticker + current_dubsq->value;
            if (sum == num) return 1;
            if (sum > num) break;
            if (NULL == current_dubsq->next) {
                do {
                    dubsq_ticker++;
                    dubsq = 2 * dubsq_ticker * dubsq_ticker;
                    AfLL_push(double_squares, dubsq);
                } while (dubsq < num);
            }
            current_dubsq = current_dubsq->next;
        }
        if (NULL == current_prime->next && prime_ticker < num)
            while (prime_ticker < num) {
                prime_ticker += 2;
                if (euler_is_prime(prime_ticker))
                    AfLL_push(primes, (unsigned long)prime_ticker);
            }
        current_prime = current_prime->next;
    }
    return 0;
}
void solution()
{
    primes = AfLL_new(5, (AfLL_vector){1, 2, 3, 5, 7});
    double_squares = AfLL_new(5, (AfLL_vector){1, 8, 18, 32, 50});
    unsigned long candidate = 9;
    while (1) {
        if (!euler_is_prime(candidate) && !is_goldbach(candidate)) break;
        candidate += 2;
    }
    AfLL_destroy(primes);
    AfLL_destroy(double_squares);
    printf("Answer is: %lu\n", candidate);
}
int main(int argc, char *argv[])
{
    euler_run(argv[0], solution);
    return 0;
}