lcv = 1
current = 0
result = 0
magic = 10000000000
while (lcv <= 1000):
    current = lcv**lcv % magic
    result += current;
    lcv += 1;
print result % magic;