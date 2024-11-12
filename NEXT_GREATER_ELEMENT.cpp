#include <bits/stdc++.h>

using namespace std;

int main()
{
    int n;
    cin >> n;
    vector<int> vec(n, 0);
    for (int i = 0; i < n; i++)
    {
        cin >> vec[i];
    }

    stack<int> s;
    vector<int> out;
    for (int i = n - 1; i >= 0; i--)
    {

        if (s.empty())
        {
            s.push(vec[i]);
            out.push_back(-1);
        }
        else
        {
            if (vec[i] < s.top())
            {
                out.push_back(s.top());
                s.push(vec[i]);
            }
            else
            {
                while (!s.empty() && s.top() <= vec[i])
                {
                    s.pop();
                }

                if (!s.empty())
                {
                    out.push_back(s.top());
                }
                else
                {
                    out.push_back(-1);
                }

                s.push(vec[i]);
            }
        }
    }
    reverse(out.begin(), out.end());
    for (auto it : out)
    {
        cout << it << " ";
    }
}
