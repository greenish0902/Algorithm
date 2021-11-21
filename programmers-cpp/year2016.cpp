#include <string>
#include <vector>

using namespace std;

string solution(int a, int b) {
  vector<string> days = {"THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"};
  vector<int> lens = {31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
  int dayLen = b;

  for (int i = 0; i < (a-1); i++) {
    dayLen += lens[i];
  }
  return days[dayLen % 7];
}

int main() {
  assert(solution(5, 24) == "TUE");
}