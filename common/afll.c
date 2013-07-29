#include <stdio.h>
#include <stdlib.h>
#include "afll.h"
void AfLL_destroy(AfLL *first)
{
    AfLL *current = first, *next = first->next;
    free(current);
    while (next) {
        current = next;
        next = current->next;
        free(current);
    }
}
AfLL *AfLL_new(int len, AfLL_vector vector)
{
    AfLL *list = malloc(sizeof(AfLL));
    int lcv;
    list->value = len ? vector[0] : 0;
    list->next = NULL;
    for (lcv = 1; lcv < len; lcv++) AfLL_push(list, vector[lcv]);
    return list;
}
void AfLL_print(AfLL *list)
{
    AfLL *current = list;
    while (current) {
        printf("%lu ", current->value);
        current = current->next;
    }
    printf("\n");
}
void AfLL_push(AfLL *first, unsigned long value)
{
    AfLL *last = first;
    while (last->next) last = last->next;
    AfLL *new_node = malloc(sizeof(AfLL));
    new_node->value = value;
    new_node->next = NULL;
    last->next = new_node;
}