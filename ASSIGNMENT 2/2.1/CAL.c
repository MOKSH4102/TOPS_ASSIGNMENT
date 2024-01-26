#include <stdio.h>
int show(int a, char ch, int b, int res)
{
    printf("the res of %d %c %d = %d" ,a,ch,b,res);
}
int add(int a, int b)
{
    int res = a + b;
    show(a, '+', b, res);
}
int sub(int a, int b)
{
    int res = a - b;
    show(a, '-', b, res);
}
int mul(int a, int b)
{
    int res = a * b;
    show(a, '*', b, res);
}
int div(int a, int b)
{
    int res = a / b;
    show(a, '/', b, res);
}
int main()
{
    int a, b, ch, res, choice;
    printf("\ncase 1: add ");
    printf("\ncase 2: sub ");
    printf("\ncase 3: mul ");
    printf("\ncase 4: div ");
    printf("\nenter your choice: ");
    scanf("%d", &choice);
    printf("enter the value of a and b :");
    scanf("%d %d", &a, &b);
    switch (choice)
    {
    case 1:/* constant-expression */
        add(a,b);
        break;
    case 2:
        sub(a, b); break;
    case 3:
        mul(a, b); break;
    case 4:
        div(a, b); break;

    default:
        printf("invalid choice");
        break;
    }
}
