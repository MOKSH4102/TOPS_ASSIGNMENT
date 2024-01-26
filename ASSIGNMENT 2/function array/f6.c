#include <stdio.h>

int main() {
    int array1[50][50], array2[50][50], sum[50][50], sub[50][50], mult[50][50], r1, c1, r2, c2, i, j, k;

    printf("Enter the number of rows : ");
    scanf("%d", &r1);

    printf("Enter the number of columns : ");
    scanf("%d", &c1);

    printf("Enter the elements of the first matrix:\n");
    for (i = 0; i < r1; i++) {
        for (j = 0; j < c1; j++) {
            scanf("%d", &array1[i][j]);
        }
    }

    printf("Enter the number of rows : ");
    scanf("%d", &r2);

    printf("Enter the number of columns : ");
    scanf("%d", &c2);

    printf("Enter the elements of the second matrix:\n");
    for (i = 0; i < r2; i++) {
        for (j = 0; j < c2; j++) {
            scanf("%d", &array2[i][j]);
        }
    }

    if (r1 == r2 && c1 == c2) {
        printf("Sum of the matrices: \n");
        for (i = 0; i < r1; i++) {
            for (j = 0; j < c1; j++) {
                sum[i][j] = array1[i][j] + array2[i][j];
                printf("%d ", sum[i][j]);
            }
            printf("\n");
        }

        printf("Subtraction of the matrices: \n");
        for (i = 0; i < r1; i++) {
            for (j = 0; j < c1; j++) {
                sub[i][j] = array1[i][j] - array2[i][j];
                printf("%d ", sub[i][j]);
            }
            printf("\n");
        }

        printf("Multiplication of the matrices: \n");
        for (i = 0; i < r1; i++) {
            for (j = 0; j < c2; j++) {
                mult[i][j] = 0;
                for (k = 0; k < c1; k++) {
                    mult[i][j] += array1[i][k] * array2[k][j];
                }
                printf("%d ", mult[i][j]);
            }
            printf("\n");
        }
    } else {
        printf("Matrices with different dimensions cannot be added, subtracted, or multiplied.\n");
    }

    return 0;
}