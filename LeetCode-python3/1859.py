class Solution:
  def sortSentence(self, s: str) -> str:
    arr = s.split()
    new_arr = [0] * len(arr)
    for i in arr:
      key = int(i[-1])
      new_arr[key-1] = i[:-1]
    return ' '.join(new_arr)

# class Solution:
#     def sortSentence(self, s: str) -> str: 
#         return " ".join(i[:-1] for i in sorted(s.split(), key=lambda x: x[-1]))

test = Solution()
print(test.sortSentence("is2 sentence4 This1 a3"))