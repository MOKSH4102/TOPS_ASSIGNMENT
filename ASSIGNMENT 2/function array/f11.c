#include <stdio.h>

int main() {
   int numbers[5];

   // Accept 5 numbers from user
   printf("Enter 5 numbers:\n");
   for (int i = 0; i < 5; i++) {
       scanf("%d", &numbers[i]);
   }

   // Display the numbers in reverse order
   printf("The numbers in reverse order are:\n");
   for (int i = 4; i >= 0; i--) {
       printf("%d\n", numbers[i]);
   }

   return 0;
}