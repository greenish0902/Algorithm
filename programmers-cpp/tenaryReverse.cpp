#include <string>
#include <vector>
#include <cmath>

using namespace std;

int solution(int n) {
  int answer = 0;
  vector<int> vec;

  while(true) {
    vec.push_back(n % 3);
    if (n < 3) {
      break;
    }
    n /= 3;
  }

  for (int i = 0; i < vec.size(); i++) {
    answer += vec[i] * pow(3, vec.size() - i - 1);
  }
  
  return answer;
}

int main() {
  assert(solution(45) == 7);
}