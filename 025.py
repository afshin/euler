import sys

def fib(n):
	fib_1 = 0
	fib_2 = 1
	if (n == 0): temp = 0
	elif (n == 1): temp = 1
	else: temp = 0
	for x in range(1, n):
		temp = fib_1 + fib_2
		fib_1 = fib_2
		fib_2 = temp
	return temp
lcv = 1
while len(str(fib(lcv))) < 1000:
    lcv += 1

print lcv