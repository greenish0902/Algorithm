# by function only
def fib(n):
  if (n == 1) or (n == 2):
    return 1
  else:
    return fib (n - 1) + fib(n - 2)

# Memoization using list: bottom-up
def fibo(n):
  f = [0] * (n + 1)
  f[1] = 1
  f[2] = 1
  for i in range(3, n+1):
    f[i] = f[i - 1] + f[i - 2]
  return f[n]

# Memoization using list: top-down
n = 100  # 재귀적 호출 가능하도록 임의로 설정
f = [0] * (n + 1)
def fibon(n):
  if (f[n] != 0):  # 이미 리스트에 구해뒀다면 반환
    return f[n]
  else:
    if (n == 1) or (n == 2):
      f[n] = 1
    else:  # 재귀적 호출로 계산
      f[n] = fibon(n-1) + fibon(n-2)
    return f[n]

# test code
def test_sort():
  # 1 1 2 3 5 8 13
  assert(fib(5) == 5)
  assert(fib(6) == 8)
  assert(fib(7) == 13)
  assert(fibo(5) == 5)
  assert(fibo(6) == 8)
  assert(fibo(7) == 13)
  assert(fibon(5) == 5)
  assert(fibon(6) == 8)
  assert(fibon(7) == 13)
  print("테스트 통과!")

if __name__ == "__main__":
  test_sort()