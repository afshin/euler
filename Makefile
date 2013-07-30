CFLAGS=-Wall -g -lm
all:
	make 009
	make 010
	make 012
	make 045
	make 046
	make 047
009: common/euler.o
010: common/euler.o
012: common/euler.o
045: common/euler.o
046: common/afll.o common/euler.o
047: common/euler.o
clean:
	rm -rf *.dSYM
	rm -f common/*.o;
	rm -f ./009
	rm -f ./010
	rm -f ./012
	rm -f ./045
	rm -r ./046
	rm -r ./047