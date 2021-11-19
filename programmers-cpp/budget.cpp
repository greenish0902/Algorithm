#include <vector>
#include <algorithm>

using namespace std;

int solution(vector<int> d, int budget) {
  int answer = 0, count = 0;
  sort(d.begin(), d.end());
  for (int n : d) {
    if ((answer + n) <= budget) {
      answer += n;
      count++;
    } else {
      break;
    }
  }
  return count;
}

int main() {
  assert(solution({1, 3, 2, 5, 4}, 9) == 3);
  assert(solution({2, 2, 3, 3}, 10) == 4);
}