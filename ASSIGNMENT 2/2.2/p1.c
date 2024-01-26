// C program to print right half pyramid pattern of star 
#include <stdio.h> 

int main() 
{ 
	int rows = 5; 

	// first loop for printing rows 
	for (int i = 0; i < rows; i++) { 

		// second loop for printing character in each rows 
		for (int j = 0; j <= i; j++) { 
			if(j%2==0){
                printf("1");
            }
            else{
                printf("0");
            }

            
		} 
		printf("\n"); 
	} 
	return 0; 
}
