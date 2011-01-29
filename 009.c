#include <time.h>
#include <stdio.h>

clock_t start, finish;

int main(){
    int a, b, c;
    start = clock();
    for (c = 1000; c > 2; c -= 1){
        for (b = c - 1; b > 1; b -= 1){
            for (a = b - 1; a > 0; a -= 1){
                if (((a * a) + (b * b) == (c * c)) && ((a + b + c) == 1000)){
                    printf("%d, %d, %d\n", a, b, c);
                }
            }
        }
    }
    finish = clock();
    printf("It took %.2f ms\n",((double) (finish - start)) * 1000 / CLOCKS_PER_SEC);
}