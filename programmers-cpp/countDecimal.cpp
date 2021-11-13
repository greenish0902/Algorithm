#include <vector>
#include <iostream>

using namespace std;

bool decimal(int num) {
  for (int i = 2; i < (num - 1); i++) {
    if ((num % i) == 0) {
      return false;
    }
  }
  return true;
}

int solution(vector<int> nums) {
  int answer = 0;
  for (int i = 0; i < nums.size(); i++) {
    for (int j = 1 + i; j < nums.size(); j++) {
      for (int k = 1 + j; k < nums.size(); k++) {
        cout << nums[i] << " + " << nums[j] << " + " << nums[k] << " = " << (nums[i] + nums[j] + nums[k]) << endl;
        if (decimal(nums[i] + nums[j] + nums[k])) {
          answer++;
        }
      }
    }
  }
  return answer;
}

int main() {
  assert(solution({1, 2, 3, 4}) == 1);
  assert(solution({1, 2, 7, 6, 4}) == 4);
}