def matrix_chain(n):
  x = [10, 100, 5, 50]
  m = [[0 for x in range(4)] for y in range(4)]

  for i in range(0, n):
    m[i][i] = 0
  for r in range(1, n+1):
    for i in range(1, n+1-r):
      j = i + r
      m[i][j] = 10000000000
      for k in range(i, j):
        m[i][j] = min(m[i][j], m[i][k] + m[k+1][j] + (x[i-1] * x[k] * x[j]))
  return m[1][n]

# test code
def test_def():
  assert(matrix_chain(3) == 7500)
  print(matrix_chain(3))
  print("테스트 통과!")

if __name__ == "__main__":
  test_def()

  # def matrix_chain(n):  # DP solution
#   x = [10, 100, 5, 50]
#   m = [[0] * n ] * n

#   for i in range(0, n):
#     m[i][i] = 0
#   for r in range(0, n-1):
#     for i in range(0, n-r):
#       j = i + r
#       min = 10000000000
#       for k in range(i, j):
#         val = m[i][k] + m[k+1][j] + (x[i-1] * x[k] * x[j])
#         if (val < min):
#           min = val
#         else:
#           min = m[i][j]
#         m[i][j] = min
#   return m
#   # return m[0][n-1]