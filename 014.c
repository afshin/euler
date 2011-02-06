#include <stdio.h>
int main(){
    unsigned long int lcv, current, num_in_sequence, best_candidate = 0, longest_sequence = 0;
    for (lcv = 13; lcv < 1000000; lcv += 1){
        current = lcv;
        num_in_sequence = 1;
        while (current > 1){
            num_in_sequence += 1;
            current = current % 2 ? (3 * current) + 1 : current / 2;
        };
        if (num_in_sequence > longest_sequence){
            longest_sequence = num_in_sequence;
            best_candidate = lcv;
        };
    };
    printf("best candidate: %lu, sequence length: %lu\n", best_candidate, longest_sequence);
}