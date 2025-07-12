import React, { useState } from 'react';
import CheatSheetLayout from '../components/CheatSheetLayout';


function CheatSheetC() {
    const [cCheats,setCCheats] = useState([
        {
          title: "1. Hello World",
          code: `#include <stdio.h>
      int main() {
          printf("Hello, World!\\n");
          return 0;
      }`
        },
        {
          title: "2. Variables and Data Types",
          code: `#include <stdio.h>
      int main() {
          int number = 42;
          float decimal = 3.14;
          char letter = 'A';
          double bigDecimal = 3.14159;
          
          printf("Integer: %d\\n", number);
          printf("Float: %.2f\\n", decimal);
          printf("Char: %c\\n", letter);
          printf("Double: %.5f\\n", bigDecimal);
          return 0;
      }`
        },
        {
          title: "3. Input Output",
          code: `#include <stdio.h>
      int main() {
          int age;
          char name[50];
          
          printf("Enter your name: ");
          scanf("%s", name);
          printf("Enter your age: ");
          scanf("%d", &age);
          
          printf("Hello %s, you are %d years old\\n", name, age);
          return 0;
      }`
        },
        {
          title: "4. If Statement",
          code: `#include <stdio.h>
      int main() {
          int number = 15;
          
          if (number > 10) {
              printf("Number is greater than 10\\n");
          }
          return 0;
      }`
        },
        {
          title: "5. If-Else Statement",
          code: `#include <stdio.h>
      int main() {
          int number = 7;
          
          if (number % 2 == 0) {
              printf("Number is even\\n");
          } else {
              printf("Number is odd\\n");
          }
          return 0;
      }`
        },
        {
          title: "6. Switch Statement",
          code: `#include <stdio.h>
      int main() {
          int day = 3;
          
          switch (day) {
              case 1: printf("Monday\\n"); break;
              case 2: printf("Tuesday\\n"); break;
              case 3: printf("Wednesday\\n"); break;
              default: printf("Other day\\n");
          }
          return 0;
      }`
        },
        {
          title: "7. For Loop",
          code: `#include <stdio.h>
      int main() {
          for (int i = 1; i <= 5; i++) {
              printf("%d ", i);
          }
          printf("\\n");
          return 0;
      }`
        },
        {
          title: "8. While Loop",
          code: `#include <stdio.h>
      int main() {
          int i = 1;
          while (i <= 5) {
              printf("%d ", i);
              i++;
          }
          printf("\\n");
          return 0;
      }`
        },
        {
          title: "9. Do-While Loop",
          code: `#include <stdio.h>
      int main() {
          int i = 1;
          do {
              printf("%d ", i);
              i++;
          } while (i <= 5);
          printf("\\n");
          return 0;
      }`
        },
        {
          title: "10. Array Declaration",
          code: `#include <stdio.h>
      int main() {
          int numbers[5] = {1, 2, 3, 4, 5};
          
          for (int i = 0; i < 5; i++) {
              printf("%d ", numbers[i]);
          }
          printf("\\n");
          return 0;
      }`
        },
        {
          title: "11. 2D Array",
          code: `#include <stdio.h>
      int main() {
          int matrix[2][3] = {{1, 2, 3}, {4, 5, 6}};
          
          for (int i = 0; i < 2; i++) {
              for (int j = 0; j < 3; j++) {
                  printf("%d ", matrix[i][j]);
              }
              printf("\\n");
          }
          return 0;
      }`
        },
        {
          title: "12. String Functions",
          code: `#include <stdio.h>
      #include <string.h>
      
      int main() {
          char str1[] = "Hello";
          char str2[] = "World";
          char result[50];
          
          strcpy(result, str1);
          strcat(result, " ");
          strcat(result, str2);
          
          printf("Length: %lu\\n", strlen(result));
          printf("Result: %s\\n", result);
          return 0;
      }`
        },
        {
          title: "13. Pointer Basics",
          code: `#include <stdio.h>
      int main() {
          int number = 42;
          int *ptr = &number;
          
          printf("Value: %d\\n", number);
          printf("Address: %p\\n", (void*)&number);
          printf("Pointer value: %d\\n", *ptr);
          return 0;
      }`
        },
        {
          title: "14. Function with Parameters",
          code: `#include <stdio.h>
      
      void printNumber(int num) {
          printf("Number is: %d\\n", num);
      }
      
      int main() {
          printNumber(42);
          printNumber(100);
          return 0;
      }`
        },
        {
          title: "15. Function with Return Value",
          code: `#include <stdio.h>
      
      int add(int a, int b) {
          return a + b;
      }
      
      int main() {
          int result = add(5, 3);
          printf("Sum: %d\\n", result);
          return 0;
      }`
        },
        {
          title: "16. Structure",
          code: `#include <stdio.h>
      
      struct Student {
          char name[50];
          int age;
          float gpa;
      };
      
      int main() {
          struct Student s1 = {"John", 20, 3.8};
          
          printf("Name: %s\\n", s1.name);
          printf("Age: %d\\n", s1.age);
          printf("GPA: %.1f\\n", s1.gpa);
          return 0;
      }`
        },
        {
          title: "17. Recursion - Factorial",
          code: `#include <stdio.h>
      
      int factorial(int n) {
          if (n <= 1) return 1;
          return n * factorial(n - 1);
      }
      
      int main() {
          int n = 5;
          printf("Factorial of %d: %d\\n", n, factorial(n));
          return 0;
      }`
        },
        {
          title: "18. File Handling",
          code: `#include <stdio.h>
      
      int main() {
          FILE *file = fopen("test.txt", "w");
          
          if (file != NULL) {
              fprintf(file, "Hello, File!\\n");
              fclose(file);
              printf("File written successfully\\n");
          }
          return 0;
      }`
        },
        {
          title: "19. Dynamic Memory",
          code: `#include <stdio.h>
      #include <stdlib.h>
      
      int main() {
          int *ptr = (int*)malloc(5 * sizeof(int));
          
          for (int i = 0; i < 5; i++) {
              ptr[i] = i + 1;
          }
          
          for (int i = 0; i < 5; i++) {
              printf("%d ", ptr[i]);
          }
          printf("\\n");
          
          free(ptr);
          return 0;
      }`
        },
        {
          title: "20. Bitwise Operations",
          code: `#include <stdio.h>
      
      int main() {
          int a = 5, b = 3;
          
          printf("a = %d, b = %d\\n", a, b);
          printf("a & b = %d\\n", a & b);
          printf("a | b = %d\\n", a | b);
          printf("a ^ b = %d\\n", a ^ b);
          printf("~a = %d\\n", ~a);
          return 0;
      }`
        }
      ]);
      
  return <CheatSheetLayout title="C Cheat Sheets" cheats={cCheats} />;
}

export default CheatSheetC; 