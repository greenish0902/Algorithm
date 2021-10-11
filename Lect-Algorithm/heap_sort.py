def heap_sort(A):
  n = len(A)
  build_heap(A)
  for i in range(n-1, 0, -1):
    A[0], A[i] = A[i], A[0]
    heapify(A, 0, i)
  return A

def build_heap(A):
  n = len(A)
  for i in range(int(n/2)-1, -1, -1):
    heapify(A, i, n)

def heapify(A, k, n):
  left = 2*k; right = 2*k + 1
  if right <= n-1:
    if A[left] < A[right]:
      smaller = left
    else:
      smaller = right
  elif left <= n-1:
    smaller = left
  else:
    return
  if A[smaller] < A[k]:
    A[k], A[smaller] = A[smaller], A[k]
    heapify(A, smaller, n)

def test_sort(A):
  import random
  random.shuffle(A)
  print("Before:", A)
  assert(heap_sort(A) == sorted(A, reverse=True))
  print("After:", heap_sort(A))
  print("테스트 통과!")

if __name__ == "__main__":
  test_sort([1, 2, 3, 4, 5, 6])