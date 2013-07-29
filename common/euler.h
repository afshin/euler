#ifndef _euler_h
#define _euler_h
typedef void (*euler_solution)();
typedef char *euler_problem;
int euler_is_prime(unsigned long long num);
void euler_run(euler_problem problem, euler_solution solution);
#endif