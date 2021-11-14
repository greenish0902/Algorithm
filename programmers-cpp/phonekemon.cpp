#include <vector>
#include <set>

using namespace std;

set<int> makeSet(vector<int> vec) {
  set<int> s;
  for (int elem : vec) {
    s.insert(elem);
  }
  return s;
}

int solution(vector<int> nums) {
  set<int> answer;
  int len = (nums.size()/2), setLen;

  answer = makeSet(nums);
  setLen = answer.size();

  if (setLen >= len) {
    return len;
  } else {
    return answer.size();
  }
}

int main() {
  assert(solution({3, 1, 2, 3}) == 2);
  assert(solution({3, 3, 3, 2, 2, 4}) == 3);
  assert(solution({3, 3, 3, 2, 2, 2}) == 2);
}