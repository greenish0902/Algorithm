import random

def bubble_sort(A):
  for i in range(1, len(A)):
    for j in range(len(A)-1):
      if A[j] > A[j+1]:
        A[j], A[j+1] = A[j+1], A[j]
        # temp = A[j]
        # A[j] = A[j+1]
        # A[j+1] = temp
  return A

def test_sort(A):
  original = A
  random.shuffle(A)
  assert(bubble_sort(A) == original)
  print("테스트 통과!")

if __name__ == "__main__":
  test_sort([1,2,3,4,5,6,7])