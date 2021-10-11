def count_sort(A, k):
  n = len(A)
  B = [0] * n
  C = [0] * k

  for i in range(0, n):
    C[A[i]-1] += 1
  
  for i in range(1, k):
    C[i] += C[i-1]
  
  for j in range(n-1, -1, -1):
    B[C[A[j]-1]-1] = A[j]
    C[A[j]-1] -= 1
  
  return B

def test_sort(A):
  import random
  random.shuffle(A)
  print("Before:", A)
  assert(count_sort(A, 7) == sorted(A))
  print("After:", count_sort(A, 7))
  print("테스트 통과!")

if __name__ == "__main__":
  test_sort([1, 2, 3, 7, 3, 4, 1, 1, 2, 3, 4, 5])