def quick_sort(A, p, r):
  if (p < r):
    q = partition(A, p, r)
    quick_sort(A, p, q-1)
    quick_sort(A, q+1, r)    
  return A

def partition(A, p, r):
  print(A[p:r+1], "=>")
  x = A[r]
  i = p-1
  for j in range(p, r):
    if A[j] <= x:
      i += 1
      A[i], A[j] = A[j], A[i]
  A[i+1], A[r] = A[r], A[i+1]
  return (i+1)

def test_sort(A):
  import random
  random.shuffle(A)
  print("Before:", A)
  assert(quick_sort(A, 0, len(A)-1) == sorted(A))
  print("After:", quick_sort(A, 0, len(A)-1))
  print("테스트 통과!")

if __name__ == "__main__":
  test_sort([1, 2, 3, 4, 5])