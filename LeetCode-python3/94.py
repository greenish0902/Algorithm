# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
  def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
    answer = []
    self.traversal(root, answer)
    return answer
    
  def traversal(self, node, result):
    if node:
      self.traversal(node.left, result)
      result.append(node.val)
      self.traversal(node.right, result)