#include<stdio.h>

int main() {
  char c;
  printf("\n Enter the character : ");
  scanf("%c", & c);
  switch (c) {
  case 'a':
    printf("\n character is vowel");
    break;
  case 'A':
    printf("\n character is vowel");
    break;
  case 'e':
    printf("\n character is vowel");
    break;
  case 'E':
    printf("\n character is vowel");
    break;
  case 'i':
    printf("\n character is vowel");
    break;
  case 'I':
    printf("\n character is vowel");
    break;
  case 'o':
    printf("\n character is vowel");
    break;
  case 'O':
    printf("\ncharacter is vowel");
    break;
  case 'u':
    printf("\n character is vowel");
    break;
  case 'U':
    printf("\n character is vowel");
    break;
    
  default:
    printf("\n character is constant");
    break;
  }
  return 0;
}