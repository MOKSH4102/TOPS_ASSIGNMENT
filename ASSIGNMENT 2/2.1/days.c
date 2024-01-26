#include <stdio.h>

 
int main()
{
    int ndays, year, weeks, days;
    printf("Enter the number of days\n");
    scanf("%d", &ndays);
    year = ndays / 365;
    weeks =(ndays%365)/7;
    days =(ndays-((year*365)+(weeks*7)));
    printf ("%d is equivalent to %d years, %d weeks and %d days",
            ndays, year, weeks, days);
}