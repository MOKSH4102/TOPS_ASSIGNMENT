#include <stdio.h>

// Function to check if number is palindrome
int isPalindrome(int num) {
    int reverseNum = 0;
    int originalNum = num;

    // Reverse the number
    while (num > 0) {
        int digit = num % 10;
        reverseNum = reverseNum * 10 + digit;
        num /= 10;
    }

    // Check if number is palindrome
    if (originalNum == reverseNum) {
        return 1;
    }
    return 0;
}

int main() {
    int num;
    printf("Enter a number: ");
    scanf("%d", &num);

    // Check if number is palindrome
    if (isPalindrome(num)) {
        printf("%d is a palindrome number.\n", num);
    } else {
        printf("%d is not a palindrome number.\n", num);
    }

    return 0;
}