import random

def quick_sort(A, lo, hi):

  def partition(lo, hi):
    pivot = A[hi]
    left = lo
    for right in (lo, hi):
      if A[right] < pivot:
        A[left], A[right] = A[right], A[left]
        left += 1
    A[left], A[hi] = A[hi], A[left]
    return left

  if (lo < hi):
    pivot = partition(lo, hi)
    quick_sort(A, lo, pivot -1)
    quick_sort(A, pivot + 1, hi)
  return A


def test_sort(A):
  original = A
  random.shuffle(A)
  assert(quick_sort(A, 0, len(A)-1) == original)
  print("테스트 통과!")

if __name__ == "__main__":
  test_sort([1,2,3,4,5,6,7])