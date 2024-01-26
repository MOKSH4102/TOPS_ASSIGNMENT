#include <stdio.h>

int main() {
    int numbers[5];
    int sum = 0;

    // Input 5 numbers from user
    printf("Enter 5 numbers:\n");
    for (int i = 0; i < 5; i++) {
        scanf("%d", &numbers[i]);
    }

    // Calculate the sum of the array
    for (int i = 0; i < 5; i++) {
        sum += numbers[i];
    }

    // Print the sum of the array
    printf("The sum of the array is: %d\n", sum);

    return 0;
}