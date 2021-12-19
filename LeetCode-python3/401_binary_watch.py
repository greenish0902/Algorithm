class Solution:
  def readBinaryWatch(self, turnedOn: int):
    result = []
    for i in range(turnedOn + 1):
      hours = self.getCombination(i, "h")
      mins = self.getCombination(turnedOn - i, "m")
      for h in hours:
        for m in mins:
          if (len(m) == 1):
            m = "0" + m
          result.append(h + ":" + m)
    return result

  def getCombination(self, num: int, keyword: str):
    hourList = []
    minList = []
    if (keyword == "h"):
      if (num < 4):
        for a in range(2):
          for b in range(2):
            for c in range(2):
              for d in range(2):
                if (a + b + c + d) == num:
                  sum = a * 8 + b * 4 + c * 2 + d
                  if sum < 12:
                    hourList.append(str(sum))
      return hourList
    elif (keyword == "m"):
      if (num < 6):
        for a in range(2):
          for b in range(2):
            for c in range(2):
              for d in range(2):
                for e in range(2):
                  for f in range(2):
                    if (a + b + c + d + e + f) == num:
                      sum = a * 32 + b * 16 + c * 8 + d * 4 + e * 2 + f
                      if sum < 60:
                        minList.append(str(sum))
      return minList

if __name__ == "__main__":
  solution = Solution()
  assert(solution.readBinaryWatch(9) == [])
  assert(solution.readBinaryWatch(1) == ['0:01', '0:02', '0:04', '0:08', '0:16', '0:32', '1:00', '2:00', '4:00', '8:00'])