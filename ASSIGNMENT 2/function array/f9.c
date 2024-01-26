#include <stdio.h>
#include <string.h>

//Structure definition
struct Employee {
    int empno;
    char empname[50];
    char address[100];
    int age;
};

// Function to reverse a string
void reverse(char *str) {
    int len = strlen(str);
    for (int i = len - 1; i >= 0; i--) {
        printf("%c", str[i]);
    }
}

// Function to check if string is palindrome
int isPalindrome(char *str) {
    int len = strlen(str);
    for (int i = 0; i < len / 2; i++) {
        if (str[i] != str[len - i - 1]) {
            return 0;
        }
    }
    return 1;
}

int main() {
    // Initialization of five employee records
    struct Employee emp[5] = {
        {1, "naman", "New York", 30},
        {2, "Alice", "Chicago", 25},
        {3, "Mike", "San Francisco", 35},
        {4, "Emma", "Los Angeles", 28},
        {5, "Daniel", "Dallas", 32}
    };

    // Display and print the details of five employees
    for (int i = 0; i < 5; i++) {
        printf("Employee %d:\n", i + 1);
        printf("Empno: %d\n", emp[i].empno);
        printf("Empname: %s\n", emp[i].empname);
        printf("Address: %s\n", emp[i].address);
        printf("Age: %d\n", emp[i].age);

        // Check if empname is palindrome
        if (isPalindrome(emp[i].empname)) {
            printf("%s is a palindrome.\n", emp[i].empname);
             reverse(emp[i].empname);
        } else {
            printf("%s is not a palindrome. Its reverse is ", emp[i].empname);
            reverse(emp[i].empname);
            printf(".\n");
        }

        printf("\n");
    }

    return 0;
}