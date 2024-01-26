#include<stdio.h>
int main(){
    int year;
    printf("enter the leap year:");
    scanf("%d",&year);
    if(year%4==0){
        printf("given year is leap year");
    }
    else{
        printf("given year is not leap year");
    }


}