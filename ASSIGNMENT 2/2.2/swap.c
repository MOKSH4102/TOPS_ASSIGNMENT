#include<stdio.h>
int main(){
    int x,y;
    printf("enter the value of x and y:");
    scanf("%d %d",&x,&y);
    x=x+y;
    y=x-y;
    x=x-y;
    printf("after the swaping the values x=%d and y=%d",x,y);
}