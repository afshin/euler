#include <stdio.h>
int paths(long int x, long int y){
    if (x == 1 || y == 1) return x + y;
    return paths(x - 1, y) + paths(x, y - 1);
};
int main(){
    printf("paths(20, 20): %d\n", paths(20, 20));
    return 0;
};