#include<stdio.h>
int main(){
    int add,sub,mul,div,choice,a,b;
    printf("enter 1 for addition:");
    printf("\nenter 2for subtraction:");
    printf("\nenter 3 for multiplication:");
    printf("\nenter 4 for division:");
    printf("\nenter the choice:");
    scanf("%d",&choice);
    printf("enter the number a and b:");
    scanf("%d %d",&a,&b);

    switch (choice)
    {
    case 1:
        add = a + b;
        printf("the addition of %d + %d is:%d",a,b,add);
        break;
     case 2:
        sub = a - b;
        printf("the subtraction of %d - %d is:%d",a,b,sub);
        break;
     case 3:
        mul = a * b;
        printf("the multiplication of %d * %d is:%d",a,b,mul);
        break;
     case 4:
        div = a / b;
        printf("the division of %d and %d is:%d",a,b,div);
        break;
    
    default:
        printf("invalid choice:");
        break;
    }
}