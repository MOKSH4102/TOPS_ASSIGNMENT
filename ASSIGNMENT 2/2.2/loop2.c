#include <stdio.h>

int main() {
    int num, even_count = 0, odd_count = 0,sum_even=0,sum_odd=0;

    for(int i = 0; i < 10; i++) {
        printf("Enter a number: ");
        scanf("%d", &num);

        if(num % 2 == 0) {
            even_count++;
            sum_even += num;
        } else {
            odd_count++;
            sum_odd += num;
        }
    }

    printf("Number of even numbers: %d\n", even_count);
    printf("Number of odd numbers: %d\n", odd_count);
    printf("the sum of of even numbers: %d\n", sum_even);
    printf("the sum  of odd numbers: %d\n", sum_odd);

    return 0;
}