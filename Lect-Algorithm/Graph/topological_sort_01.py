import copy

G = {"a": ["b", "d"], 
     "b": ["c", "e"], 
     "c": [],
     "d": ["e"],
     "e": ["c", "f"],
     "f": [],
     "g": []
     }

N = list(G.keys())

def noinput(G, N):
  startNode = copy.deepcopy(N)
  for key in N:
    for i in range(len(G[key])):
      if (G[key][i]) in startNode:
        startNode.remove(G[key][i])
  return startNode

def topological_sort(G, N):
  n = len(G)
  A = [None] * n
  for i in range(n):
    ulist = noinput(G, N)
    A[i] = ulist[-1]
    N.remove(ulist[-1])
    ulist.pop()
  return A

print(topological_sort(G, N))