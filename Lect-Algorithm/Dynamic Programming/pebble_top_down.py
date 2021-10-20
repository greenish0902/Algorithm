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

# fill garbage values
peb = [
  [-1000, -1000, -1000, -1000],
  [-1000, -1000, -1000, -1000],
  [-1000, -1000, -1000, -1000],
  [-1000, -1000, -1000, -1000],
  [-1000, -1000, -1000, -1000],
  [-1000, -1000, -1000, -1000],
  [-1000, -1000, -1000, -1000],
  [-1000, -1000, -1000, -1000],
]

# pebble algorithm: Recursive sol with top-down by Memoization
def pebble(i, p):
  if (i == 0):
    peb[0][p] = w[0][p]
    return w[0][p]
  else:
    max = -100
    for q in range(4):
      if coexist(q, p):
        if (peb[i-1][q] != -1000):  # check memoization
          temp = peb[i-1][q]
        else:
          temp = pebble(i-1, q)
        if (temp > max):
          max = temp
    peb[i][p] = w[i][p] + max
    return w[i][p] + max

def coexist(q, p):  ## p, q = 0, 1, 2, 3
  if (p == 0):
    if (q == 1) or (q == 2):
      return True
    else:
      return False
  elif (p == 1):
    if (q == 0) or (q == 2) or (q == 3):
      return True
    else:
      return False
  elif (p == 2):
    if (q == 0) or (q == 1):
      return True
    else:
      return False
  elif (p == 3):
    if (q == 1):
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
  for i in range(8):
    print(pebble_sum(i), end = ", ")
  # assert(pebble_sum(1) == 18)
  # assert(pebble_sum(7) == 95)
  # print("final sum: ", pebble_sum((len(w)-1)))
  # print("테스트 통과!")

if __name__ == "__main__":
  test_sort()