#include <stdio.h>
#include "common/euler.h"
void solution()
{
    long idx_triangle = 285, idx_pentagon = 165, idx_hexagon = 143;
    unsigned long triangle = 40755, pentagon = 40755, hexagon = 40755;
    while (1) {
        triangle += ++idx_triangle;
        if (pentagon < triangle) pentagon += 3 * idx_pentagon++ + 1;
        if (hexagon < triangle) hexagon += 4 * idx_hexagon++ + 1;
        if (triangle == pentagon && triangle == hexagon) break;
    }
    printf("Answer is: %lu\n", hexagon);
}
int main(int argc, char *argv[])
{
    euler_run(argv[0], solution);
    return 0;
}