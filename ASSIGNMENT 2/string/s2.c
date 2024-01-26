#include <stdio.h>  
#include <string.h>  
   
int main()  
{  
    char string[] = "c programming";  
          
    //Displays individual characters from given string  
    printf("Individual characters from given string:\n");  
      
    //Iterate through the string and display individual character  
    for(int i = 0; i < strlen(string); i++){  
        printf("%c ", string[i]);  
    }  
          
    return 0;  
}  