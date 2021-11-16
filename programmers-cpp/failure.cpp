#include <vector>

using namespace std;

int countPassed (vector<int> vec, int findNum) {
  int count = 0;
  for (int elem : vec) {
    if (elem == findNum) {
      count++;
    }
  }
  return count;
}

void swap (float* a, float* b) {
  float temp = *a;
  *a = *b;
  *b = temp;
}

void bubbleSort(int N, vector<float>& valueVec, vector<float>& result) {
  for (int i = 0; i < N; i++) {
    for (int j = 0; j < N - 1; j++) {
      if (valueVec[j] < valueVec[j+1]) {
        swap(&result[j], &result[j+1]);
        swap(&valueVec[j], &valueVec[j+1]);
      }
    }
  }
}

vector<int> makeInt(vector<float>& floatVec) {
  vector<int> intVec(floatVec.begin(), floatVec.end());
  return intVec;
}

vector<int> solution(int N, vector<int> stages) {
  vector<float> failure, answer;
  int i = 1, passed = 0, total = stages.size();
  while (i <= N) {
    answer.push_back(i);
    passed = countPassed(stages, i);
    failure.push_back((float)passed/total);
    total -= passed;
    i++;
  }
  bubbleSort(N, failure, answer);
  return makeInt(answer);
}

int main() {
  int N = 5;
  vector<int> stages = {2, 1, 2, 6, 2, 4, 3, 3};
  vector<int> sol = {3, 4, 2, 1, 5};
  assert(solution(N, stages) == sol);
  return 0;
}