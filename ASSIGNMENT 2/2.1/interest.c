#include<stdio.h>
int main(){
    float p,t,r;
    printf("enter the principle,time and rate of interst:");
    scanf("%f %f %f",&p,&t,&r);
    float SI=(p*t*r)/100;
    printf("\n the interst is:%f",SI);
}