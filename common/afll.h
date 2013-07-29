#ifndef _afll_h
#define _afll_h
struct AfLL_Node {
    unsigned long value;
    struct AfLL_Node *next;
};
typedef struct AfLL_Node AfLL;
typedef unsigned long int AfLL_vector[];
void AfLL_destroy(AfLL *first);
AfLL *AfLL_new(int len, AfLL_vector vector);
void AfLL_print(const char *label, AfLL *list);
void AfLL_push(AfLL *first, unsigned long value);
#endif