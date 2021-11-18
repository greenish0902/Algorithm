#include <string>
#include <vector>
#include <map>

using namespace std;

string solution(vector<string> participant, vector<string> completion) {
  map<string, int> m;
  for (string name : completion) {
    m[name]++;
  }
  for (string name : participant) {
    if (m.find(name) != m.end()) {
      m[name]--;
      if (m[name] == 0) {
        m.erase(name);
      }
    } else {
      return name;
    }
  }
  return 0;
}

int main() {
  assert(solution({"mislav", "stanko", "mislav", "ana"}, {"stanko", "ana", "mislav"}) == "mislav");
}