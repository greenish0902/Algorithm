class Solution:
  def findJudge(self, n: int, trust: List[List[int]]) -> int:
    inout = [0] * (n+1)
    for i, j in trust:
        inout[i] -= 1
        inout[j] += 1
    for i in range(1, n+1):
        if inout[i] == n-1:
            return i
    return -1