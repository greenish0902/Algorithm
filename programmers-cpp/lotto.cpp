#include <iostream>
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

vector<int> solution(vector<int> lottos, vector<int> win_nums) {
    vector<int> answer;
    int unknown = 0, right = 0;

    sort(win_nums.begin(), win_nums.end());
    sort(lottos.begin(), lottos.end());

    for (int i = 0; i < lottos.size(); i++) {
        if (lottos[i] == 0) {
            unknown++;
        }
    }
    for (int sol : win_nums) {
        for (int num : lottos) {
            if (sol == num) {
                right++;
            }
        }
    }
    if (right > 1) {
      answer.push_back(7 - right);
      if (unknown > 0) {
        right += unknown;
        answer.push_back(7 - right);
      } else {
        answer.push_back(7 - right);
      }
    } else {
      answer.push_back(6);
      if (unknown > 0) {
        right += unknown;
        answer.push_back(7 - right);
      } else {
        answer.push_back(6);
      }
    }
    sort(answer.begin(), answer.end());
    return answer;
}

int main() {
    vector<int> lottos = {44, 1, 0, 0, 31, 25};
    vector<int> win_nums = {31, 10, 45, 1, 6, 19};
    vector<int> sol = {3, 5};
    assert(solution(lottos, win_nums) == sol);
    cout << "Great Work!" << endl;
}