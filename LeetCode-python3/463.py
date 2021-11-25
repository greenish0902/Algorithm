class Solution:
  def islandPerimeter(self, grid: List[List[int]]) -> int:
    cnt = 0; dup = 0
    for i in range(len(grid)):
      for j in range(len(grid[0])):
        if (grid[i][j] == 1):
          cnt += 1
          if (i < len(grid)-1):
            if (grid[i+1][j] == 1):
              dup += 1
          if (j < len(grid[0])-1):
            if (grid[i][j+1] == 1):
              dup += 1
    return (cnt * 4 - dup * 2)