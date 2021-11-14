#include <string>

bool oddDivisor(int num) {
  int count = 0;
  for (int j = 1; j <= num; j++) {
    if ((num % j) == 0) {
      count++;
    }
  }
  if (count % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

int solution(int left, int right) {
    int answer = 0;
    for (int i = left; i <= right; i++) {
      if (oddDivisor(i)) {
        answer += i;
      } else {
        answer -= i;
      }
    }
    return answer;
}

int main() {
  assert(solution(13, 17) == 43);
  assert(solution(24, 27) == 52);
}