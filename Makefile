CFLAGS=-Wall -g -lm
CC=gcc
all:
	make 009
	make 010
	make 012
	make 045
	make 046
	make 047
	make 048
	rm -f common/*.o
009:
	make euler
	$(CC) 009.c $(CFLAGS) common/euler.o -o 009
010:
	make euler
	$(CC) 010.c $(CFLAGS) common/euler.o -o 010
012:
	make euler
	 $(CC) 012.c $(CFLAGS) common/euler.o -o 012
045:
	make euler
	$(CC) 045.c $(CFLAGS) common/euler.o -o 045
046:
	make euler
	$(CC) -c common/afll.c $(CFLAGS) -o common/afll.o
	$(CC) 046.c $(CFLAGS) common/euler.o common/afll.o -o 046
047:
	make euler
	$(CC) 047.c $(CFLAGS) common/euler.o -o 047
048:
	make euler
	$(CC) 048.c $(CFLAGS) common/euler.o -o 048
clean:
	rm -rf *.dSYM
	rm -f common/*.o;
	rm -f ./009
	rm -f ./010
	rm -f ./012
	rm -f ./045
	rm -f ./046
	rm -f ./047
	rm -f ./048
euler:
	$(CC) -c common/euler.c $(CFLAGS) -o common/euler.o
