#include <vector>

using namespace std;

vector<int> solution(vector<int> answers) {
  vector<int> stu1, stu2, stu3, scores = {0, 0, 0}, answer;
  stu1 = {1, 2, 3, 4, 5};
  stu2 = {2, 1, 2, 3, 2, 4, 2, 5};
  stu3 = {3, 3, 1, 1, 2, 2, 4, 4, 5, 5};
  vector<vector<int> > students = {stu1, stu2, stu3};
  int maxScore = -1000;
  
  for (vector<int>& elem : students) {
    int len = elem.size();
    if (answers.size() - len > 0) {
      int loop = answers.size() / len;
      for (int i = 0; i <= loop; i++) {
        elem.insert(elem.end(), elem.begin(), elem.begin() + len);
      }
    }
  }
  for(int i = 0; i < answers.size(); i++) {
    for (int j = 0; j < students.size(); j++) {
      if (answers[i] == students[j][i]) {    
        scores[j]++;
      }
    }
  }
  for (int i = 0; i < scores.size(); i++) {
    if (scores[i] >= maxScore) {
      maxScore = scores[i];
    }
  }
  for (int i = 0; i < scores.size(); i++) {
    if (scores[i] == maxScore) {
      answer.push_back((i+1));
    }
  }
  return answer;
}

int main() {
  vector<int> answers = {1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5};
  vector<int> sol = {1};
  assert(solution(answers) == sol);
  solution(answers);
}