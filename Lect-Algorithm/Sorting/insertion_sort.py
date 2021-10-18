def insertion_sort(A):
  n = len(A)
  for i in range(1, n):
    new_item = A[i]
    while (i >= 1 and new_item < A[i-1]):
      A[i] = A[i-1]
      i -= 1
    A[i] = new_item
  return A

def test_sort(A):
  import random
  random.shuffle(A)
  print("Before:", A)
  assert(insertion_sort(A) == sorted(A))
  print("After:", insertion_sort(A))
  print("테스트 통과!")

if __name__ == "__main__":
  test_sort([1, 2, 3, 4, 5])