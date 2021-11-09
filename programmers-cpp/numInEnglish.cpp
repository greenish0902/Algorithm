#include <iostream>
#include <string>
#include <sstream>
#include <cctype>
#include <map>

using namespace std;

map<string, string> numMap = {
    { "zero", "0" },
    { "one", "1" },
    { "two", "2" },
    { "three", "3" },
    { "four", "4" },
    { "five", "5" },
    { "six", "6" },
    { "seven", "7" },
    { "eight", "8" },
    { "nine", "9" },
  };
  
int solution(string s) {
  int startIdx = 0, endIdx = 1, lastIdx = s.length();
  bool appended;
  string answer = "";

  while (endIdx <= lastIdx) {
    string input = s.substr(startIdx, endIdx - startIdx);
    cout << "input: " << input << endl;

    if (isalpha(input[0])) {
      if (numMap.find(input) != numMap.end()) {
        answer += numMap[input];
        startIdx = endIdx; endIdx++;
        cout << "+= " << answer << endl;
      } else {
        endIdx++;
      }
    } else if (!isalpha(input[0])) {
      startIdx++; endIdx++;
      answer += input[0];
      cout << "+= " << answer << endl;
    }
  }
  return stoi(answer);
}

int main() {
  string q01 = "one4seveneight";
  int sol01 = 1478;
  string q02 = "23four5six7";
  int sol02 = 234567;
  assert(solution(q01) == sol01);
  assert(solution(q02) == sol02);
}