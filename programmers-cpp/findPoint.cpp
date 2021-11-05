#include <iostream>
#include <vector>
#include <cassert>

using namespace std;

// my solution
vector<int> solution(vector<vector<int> > v) {
    vector<int> ans(2);
    vector<int> temp(3);
    for (int i = 0; i < 2; i++) {
        temp[0] = v[0][i];
        temp[1] = v[1][i];
        temp[2] = v[2][i];
        if (temp[0] == temp[1]) {
            ans[i] =  v[2][i];
        } else {
            if (temp[1] == temp[2]) {
                ans[i] = temp[0];
            } else {
                ans[i] = temp[1];
            }
        }
    }
    return ans;
}

// Better solution: using XOR
vector<int> solution(vector<vector<int> > v) {
    vector<int> ans = {0, 0};
    for (int j = 0; j < 3; j++) {
        for (int i = 0; i < 2; i++) {
            ans[i] ^= v[j][i];
        }
    }
    return ans;
}

int main() {
    vector<vector <int> >v = {{1, 4}, {2, 5}, {1, 5}};
    vector<int> sol = {2, 4};
    assert(solution(v) == sol);
    cout << "Great Work!" << endl;
}