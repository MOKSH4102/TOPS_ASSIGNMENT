#include<stdio.h>  
int main(){      
int i=0,j=0;    
int arr[2][3]={{1,2,3},{2,3,4}};     
//traversing 2D array    
for(i=0;i<2;i++){    
 for(j=0;j<3;j++){    
   printf("arr[%d] [%d] = %d \n",i,j,arr[i][j]);    
 }//end of j    
}//end of i    
return 0;  
}    