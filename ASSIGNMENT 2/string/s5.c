#include <stdio.h>

int compare(char str1[], char str2[])
{
    int i = 0;
    while (str1[i] != '\0' && str2[i] != '\0')
    {
        if (str1[i] != str2[i])
        {
            return 1;
        }
        i++;
    }
    if (str1[i] == '\0' && str2[i] != '\0')
    {
        return 1;
    }
    if (str1[i] != '\0' && str2[i] == '\0')
    {
        return 1;
    }
    return 0;
}

int main()
{
    char str1[100], str2[100];
    printf("Enter the first string: ");
    scanf("%s", str1);
    printf("Enter the second string: ");
    scanf("%s", str2);
    int result = compare(str1, str2);
    if (result == 0)
    {
        printf("The strings are equal.\n");
    }
    else
    {
        printf("The strings are not equal.\n");
    }
    return 0;
}