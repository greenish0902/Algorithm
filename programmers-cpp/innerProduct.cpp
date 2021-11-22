#include <vector>

using namespace std;

int solution(vector<int> a, vector<int> b) {
  int sum = 0;
  for (int i = 0; i < a.size(); i++) {
      sum += a[i] * b[i];
  }
  return sum;
}

int main() {
  assert(solution({1,2,3,4}, {-3, -1, 0, 2}) == 3);
}