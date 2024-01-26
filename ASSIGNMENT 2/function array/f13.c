#include <stdio.h>

int main() {
   int numbers[5];

   // Accept 5 numbers from user
   printf("Enter 5 numbers:\n");
   for (int i = 0; i < 5; i++) {
       scanf("%d", &numbers[i]);
   }

   // Check if each number is even or odd
   printf("The entered numbers are:\n");
   for (int i = 0; i < 5; i++) {
       if (numbers[i] % 2 == 0) {
           printf("%d is even.\n", numbers[i]);
       } else {
           printf("%d is odd.\n", numbers[i]);
       }
   }

   return 0;
}