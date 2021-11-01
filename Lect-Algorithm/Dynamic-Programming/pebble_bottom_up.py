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
  for p in range(4):
    peb[0][p] = w[0][p]
  for i in range(1, n+1):
    for p in range(4):
      max = -100
      for q in range(4):
        if coexist(q, p):
          temp = peb[i-1][q]
          if (temp > max):
            max = temp
      peb[i][p] = w[i][p] + max
  max = -100
  for p in range(4):
    if (peb[n][p] > max):
      max = peb[n][p]
  return max

# test code
def test_sort():
  assert(pebble_sum(1) == 18)
  assert(pebble_sum(7) == 95)
  print("\nfinal sum: ", pebble_sum((len(w)-1)))
  print("테스트 통과!\n")

if __name__ == "__main__":
  test_sort()