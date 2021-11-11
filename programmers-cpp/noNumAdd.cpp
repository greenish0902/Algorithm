#include <iostream>
#include <string>
#include <vector>

using namespace std;

int solution(vector<int> numbers) {
  int answer = (1+2+3+4+5+6+7+8+9);
  for (int elem : numbers) {
    answer -= elem;
  }
  return answer;
}

int main() {
  vector<int> numbers = {5,8,4,0,6,7,9};
  int sol = 6;
  assert(solution(numbers) == sol);
  cout << "Test passed!" << endl;
}