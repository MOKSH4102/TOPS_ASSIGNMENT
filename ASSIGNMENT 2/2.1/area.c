#include<stdio.h>
int main(){
    float radius,area,height,width,base;
    printf("enter the radius:");
    scanf("%f",&radius);
    float pi=3.14;
    area=pi*radius*radius;
    printf("enter the area of circle %f",area);
    printf("\nenter the value of height and width for rectangle:");
    
    scanf("%f %f",&height,&width);
    float r=height*width;
    printf("\nthe area of rectangle is:%f",r);
    printf("\n the value of height and base for triangle:");
    scanf("%f %f",&height,&base);
    float t=(base*height)/2;
    printf("\n the area of triangle is:%f",t);
}