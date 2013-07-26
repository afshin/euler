#include <stdio.h>

int is_triangle(unsigned long candidate)
{
    int i = 284;
    unsigned long base = 40470;
    while (base < candidate) base += ++i;
    return base == candidate;
}

int is_pentagon(unsigned long candidate)
{
    int i = 164;
    unsigned long base = 40262;
    while (base < candidate) base += (3 * ++i) - 2;
    return base == candidate;
}

int main(int argc, char *argv[])
{
    int i = 143, match = 0;
    unsigned long hexagon;
    while (match < 2) {
        i++;
        match = 0;
        hexagon = (unsigned long)((2 * i * i) - i);
        match += is_triangle(hexagon);
        if (!match) continue;
        match += is_pentagon(hexagon);
    }
    printf("hexagon(%d): %lu\n", i, hexagon);
    return 0;
}