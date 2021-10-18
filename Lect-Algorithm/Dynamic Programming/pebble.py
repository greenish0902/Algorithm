# input pattern
w = [
  [6, -8, -11, -5],
  [7, 10, 12, 19],
  [12, 14, 7, 19],
  [-5, 9, 4, -1],
  [5, 7, 8, 13],
  [3, 13, -2, 1],
  [11, 8, 9, 20],
  [3, 5, 4, 7]
  ]

# pebble algorithm
def pebble(i, p):  # p, q = 0, 1, 2, 3
  if (i == 0):
    return w[0][p]
  else:
    max = -100  # 아주 작은 초기값
    for q in range(0, 4):  # q = 0, 1, 2, 3
      if coexist(q, p):  # p 다음에 q가 올 수 있다면
        temp = pebble(i-1, q)
        if (temp > max):
          max = temp
    return w[i][p] + max

def coexist(p, q):  ## p, q = 0, 1, 2, 3
  if (p == 0):
    if (q == 1) or (q == 2):
      return True
    else:
      return False
  elif (p == 1):
    if (q == 1) or (q == 3) or (q == 4):
      return True
    else:
      return False
  elif (p == 3):
    if (q == 0) or (q == 1):
      return True
    else:
      return False
  elif (p == 4):
    if (q == 2):
      return True
    else:
      return False

def pebble_sum(n):
  max = -100  # 충분히 작은 값
  for i in range(4):
    if (pebble(n, i) > max):
      max = pebble(n, i)
  return max

# test code
def test_sort():
  assert(pebble_sum(1) == 18)
  assert(pebble_sum(7) == 95)
  print("테스트 통과!")

if __name__ == "__main__":
  test_sort()