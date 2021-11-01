def matrix_chain(i, j):  # Recursive solution
  x = [10, 100, 5, 50]
  if (i == j):
    return 0
  min = 100000000000
  for k in range(i, j):
    q = matrix_chain(i, k) + matrix_chain(k+1, j) + (x[i-1] * x[k] * x[j])
    if (q < min):
      min = q
  return min

# test code
def test_def():
  print(matrix_chain(1, 2))
  # assert(matrix_chain(1, 3) == 7500)
  # print("테스트 통과!")

if __name__ == "__main__":
  test_def()