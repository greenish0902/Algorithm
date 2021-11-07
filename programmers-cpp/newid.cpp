#include <iostream>
#include <string>
#include <vector>
#include <cctype>

using namespace std;

string solution(string new_id) {
  string letter;
  for (int i = 0; i < new_id.size(); i++) {
    letter = tolower(new_id[i])
    if letter
  }
  if (new_id[i] == new_id[i+1] == '.') {
    
  }
  string answer = "";
  return answer;
}

int main() {
  string new_id, result;
  new_id = "...!@BaT#*..y.abcdefghijklm";
  result = "bat.y.abcdefghi";
  assert(solution(new_id) == result);
}