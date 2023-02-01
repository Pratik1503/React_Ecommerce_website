#include <iostream>
using namespace std;

bool prime(int i)
{

    for (int j = 2; j < i; j++)
    {
        if (i % j == 0)
        {
            return false;
        }
    }

    return true;
}

int main()
{

    int primeCount = 0;
    for (int i = 2; i <= 1000; i++)
    {

        if (prime(i) && primeCount < 50)
        {
            primeCount++;
            cout << i << " " ;
        }
    }
}