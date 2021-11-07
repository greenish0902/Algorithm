#include <string>
#include <vector>

using namespace std;

int calDist(int num, int now) {
  int dist = num - now;
  while (dist != 0) {
    if ((dist == 3) || (dist == -3) || (dist == 1) || (dist == -1)) {
      now = num;
      
    } else if () {
    }
  }
  return dist;
}

void getHand(int& num, int& lNow, int& rNow, int& dist, string hand, string &use) {
  int lDist, rDist;

  lDist = calDist(num, lNow);
  rDist = calDist(num, rNow);

  if (lDist < rDist) {
    use = "L";
  } else if (lDist > rDist) {
    use = "R";
  } else {
    if (hand == "right") {
      use = "R";
    } else {
      use = "L";
    }
  }
}

string touch(int num, int& lNow, int& rNow, string& use, string hand) {
  if ((num == 1) || (num == 4) || (num == 7)) {
    use = "R";
    rNow = num;
  } else if ((num == 3) || (num == 6) || (num == 9)) {
    use = "L";
    lNow = num;
  } else {
    int dist = 0;
    getHand(num, lNow, rNow, dist, hand, use);
  }
}

string solution(vector<int> numbers, string hand) {
  string use, answer = "";
  int lNow = 10, rNow = 12;
  for (int& num : numbers) {
    if (num = 0) {
      num = 11;
    } 
    answer += touch(num, lNow, rNow, use, hand);
  }
  return answer;
}

int main() {
  vector<int> numbers = {1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5};
  string hand = "right";
  solution(numbers, hand);
}