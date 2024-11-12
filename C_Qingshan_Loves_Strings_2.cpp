#include <bits/stdc++.h>

using namespace std;

int main(){
    int t;
    cin>>t;
    while(t--){
        int k;
        cin>>k;
        string s;
        cin>>s;
        int count =0;
        deque<char> dq;
        int n=k;
        int m=1;
        vector<int> out;
        for(int i=0;i<n;i++){
            dq.push_back(s[i]);
        }
        if(k%2!=0){
            cout<<-1;
        }else{

            int zeroC=0;
            for(int i=0;i<n;i++){
                if(s[i]=='0'){
                    zeroC++;
                }
            }

            if(zeroC==k || zeroC!=k/2){
                cout<<-1;
            }else{
        while(!dq.empty()){
            if(dq.front()==dq.back()){
                if(dq.front()=='0'){
                    out.push_back(n++);
                    dq.push_back('0');
                    dq.push_back('1');
                    count++;
                }else{
                    out.push_back(m++);
                    dq.push_front('1');
                    dq.push_front('0');
                    count++;
                }
            }else{
                if(!dq.empty()){
                dq.pop_front();
                }
                if(!dq.empty()){
                dq.pop_back();
                }
            }
        }
         cout<<count<<endl;
            }
       
        for(auto it: out){
            cout<<it<<" ";
        }
        }
        cout<<endl;
    }
}