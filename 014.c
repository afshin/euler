#include <stdio.h>
int main(){
    unsigned long int lcv;
    unsigned long int current;
    unsigned long int num_in_sequence;
    unsigned long int best_candidate;
    unsigned long int longest_sequence;
    longest_sequence = 0;
    best_candidate = 0;
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
    printf("best candidate: %d, sequence length: %d", best_candidate, longest_sequence);
    printf("\nDone.\n");
}