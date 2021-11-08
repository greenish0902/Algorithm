#include <iostream>
#include <string>
#include <vector>
#include <cctype>

using namespace std;

void addIdx(vector<int>& vec, int i) {
  vec.push_back(i);
}

void eraseByIdx(vector<int> eraseIdx, string& string) {
  int loop = 0;
  for (int idx : eraseIdx) {
    idx -= loop;
    string.erase(idx, 1);
    loop += 1;
  }
}

string solution(string new_id) {
  string answer = "", letter = "";

  // step 1
  for (int i = 0; i < new_id.size(); i++) {
    answer += tolower(new_id[i]);
  }
  cout << "step " << 1 << ": " << answer << endl;

  // step 2
  vector<int> step2 = {};
  for (int i = 0; i < new_id.size(); i++) {
    if (!isalpha(answer[i]) && !isdigit(answer[i])) {
      if ((answer[i] != '-') && (answer[i] != '_') && (answer[i] != '.')) {
        addIdx(step2, i);
      }
    }
  }
  eraseByIdx(step2, answer);
  cout << "step " << 2 << ": " << answer << endl;

  // step 3
  vector<int> step3 = {};
  int len = answer.length();
  while(len > 0) {
    for (int i = 0; i < new_id.size(); i++) {
      if ((answer[i] == answer[i+1]) && (answer[i] == '.')) {
        addIdx(step3, i);
      }
      len--;
    }
  }
  eraseByIdx(step3, answer);
  cout << "step " << 3 << ": " << answer << endl;

  // step 4
  if (answer.front() == '.') {
    answer.erase(0, 1);
  }
  if (answer.back() == '.') {
    answer.erase(answer.end()-1);
  }
  cout << "step " << 4 << ": " << answer << endl;

  // step 5
  if (answer.empty()) {
    answer = "a";
  }
  cout << "step " << 5 << ": " << answer << endl;

  // step 6
  if (answer.length() >= 16) {
    answer = answer.substr(0, 15);
    if (answer.back() == '.') {
      answer.erase(answer.end()-1);
    }
  }
  cout << "step " << 6 << ": " << answer << endl;

  // step 7
  if (answer.length() <= 2) {
    while (true) {
      answer += answer.back();
      if (answer.length() == 3) {
        break;
      }
    }
  }
  cout << "step " << 7 << ": " << answer << endl;

  return answer;
}

int main() {
  string new_id, result;
  new_id = "...!@BaT#*..y.abcdefghijklm";
  result = "bat.y.abcdefghi";
  assert(solution(new_id) == result);
  cout << "***** Test has passed! :) *****" << endl << endl;

  new_id = "123_.def";
  result = "123_.def";
  assert(solution(new_id) == result);
  cout << "***** Test has passed! :) *****" << endl << endl;

  new_id = "abcdefghijklmn.p";
  result = "abcdefghijklmn";
  assert(solution(new_id) == result);
  cout << "***** Test has passed! :) *****" << endl << endl;

  new_id = "z-+.^.";
  result = "z--";
  assert(solution(new_id) == result);
  cout << "***** Test has passed! :) *****" << endl << endl;
  cout << "-------- ALL PASS! Thank you --------" << endl << endl;
}