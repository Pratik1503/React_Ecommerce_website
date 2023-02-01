#include<iostream>
using namespace std;


bool prime(int i){
    for(int j=2;j<i;j++){
            if(i%j==0){
                return false;
            }
        }
        return true;
}

int main(){
    

    for(int i=2;i<=50;i++){

        if(prime(i))
        cout<<i<<" ";
    }

}