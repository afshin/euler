#include <stdio.h>
unsigned long long int big_power(int base, int power){
    int lcv;
    unsigned long long int result;
    result = base;
    for (lcv = 1; lcv < power; lcv += 1){
        result = result * base;
    };
    return result;
};
int main(){
    printf("%llu\n",big_power(2, 5));
    return 0;
};