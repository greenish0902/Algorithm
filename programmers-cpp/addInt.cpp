#include <vector>

using namespace std;

int getSign(bool sign) {
  if (sign) {
    return 1;
  } else {
    return -1;
  }
}

int solution(vector<int> absolutes, vector<bool> signs) {
  int answer = 0;
  for (int i = 0; i < absolutes.size(); i++) {
    answer += (absolutes[i] * getSign(signs[i]));
  }
  return answer;
}

int main() {
  assert(solution({4, 7, 12}, {true, false, true}) == 9);
  assert(solution({1, 2, 3}, {false, false, true}) == 0);
}