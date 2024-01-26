#include <stdio.h>
#include <string.h>

#define MAX_NAME_LENGTH 50

int main() {
   struct Student {
       char name[MAX_NAME_LENGTH];
   } students[5];

   // Accept 5 student names
   printf("Enter 5 student names:\n");
   for (int i = 0; i < 5; i++) {
       scanf("%s", students[i].name);
   }

   // Display the student names
   printf("The student names are:\n");
   for (int i = 0; i < 5; i++) {
       printf("%s\n", students[i].name);
   }

   return 0;
}