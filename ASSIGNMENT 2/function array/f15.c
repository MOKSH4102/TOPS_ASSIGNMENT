#include <stdio.h>

int main() {
    int numbers[5];

    // Input 5 numbers from user
    printf("Enter 5 numbers:\n");
    for (int i = 0; i < 5; i++) {
        scanf("%d", &numbers[i]);
    }

    // Sort the numbers in descending order
    for (int i = 0; i < 5; i++) {
        for (int j = i + 1; j < 5; j++) {
            if (numbers[i] < numbers[j]) {
                int temp = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = temp;
            }
        }
    }

    // Print the sorted numbers
    printf("The sorted numbers in descending order are:\n");
    for (int i = 0; i < 5; i++) {
        printf("%d\n", numbers[i]);
    }

    return 0;
}