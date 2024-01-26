#include <stdio.h>
#include <string.h>

#define MAX_LENGTH 100

int count_word(char* str, char* word) {
    int count = 0, i, j, len_str, len_word;

    len_str = strlen(str);
    len_word = strlen(word);

    for (i = 0; i <= len_str - len_word; i++) {
        // Check if the current substring matches the word
        for (j = 0; j < len_word; j++) {
            if (str[i + j] != word[j]) {
                break;
            }
        }
        // If the current substring matches the word, increment the count
        if (j == len_word) {
            count++;
        }
    }

    return count;
}

int main() {
    char str[MAX_LENGTH], word[MAX_LENGTH];

    printf("Enter a string: ");
    fgets(str, MAX_LENGTH, stdin);

    printf("Enter a word to search for: ");
    scanf("%s", word);

    // Remove newline character from the word
    int len = strlen(word);
    if (len > 0 && word[len - 1] == '\n') {
        word[len - 1] = '\0';
    }

    int count = count_word(str, word);

    printf("Number of occurrences of '%s': %d\n", word, count);

    return 0;
}