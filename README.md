  Quiz One:
  Write a JavaScript program where the program takes a random integer
  between 1 and 10, and the user is then prompted to input a guess number.
  The program displays the message "Good Work" if the
  input matches the guess number otherwise "Not matched".

  Question 2: 
  What is the output of the following code. Explain

let obj = {};
obj[1] = 'One';
obj['1'] = 'String One';

console.log(obj[1]);
console.log(obj['1']);
console.log(obj[1] === obj['1']);

Task 3
Write a JavaScript function that determines a student's grade based on their total marks and the type of examination. The function should return a specific message based on the student's grade.

Grading Criteria
For a general examination:

A+ grade: Total marks are between 89 and 100 inclusive. Return "Excellent job, you got an A+."
A grade: Total marks are between 80 and 88 inclusive. Return "Good job, you got an A."
B+ grade: Total marks are between 75 and 79 inclusive. Return "Well done, you got a B+."
B grade: Total marks are between 70 and 74 inclusive. Return "Nice work, you got a B."
C grade: Total marks are between 60 and 69 inclusive. Return "You got a C."
Below C grade: Total marks are below 60. Return "You need to improve."
For the "Final" examination:

A+ grade: Total marks are 90 or above. Return "Excellent job, you got an A+."
The other grade ranges remain the same as for a general examination.
Function Requirements
Write a function named checkGrade that takes two parameters:

totalMarks (a number): The student's total marks.
examType (a string): The type of examination ("Final" or any other type).
The function should return a message based on the criteria above.

function checkGrade(totalMarks, examType) {
// Your code here
}

Examples
checkGrade(95, 'Final')
Output: "Excellent job, you got an A+."

checkGrade(85, 'Final')
Output: "Good job, you got an A."

checkGrade(88, 'Midterm')
Output: "Good job, you got an A."

checkGrade(77, 'Midterm')
Output: "Well done, you got a B+."

checkGrade(65, 'Midterm')
Output: "You got a C."

checkGrade(55, 'Final')
Output: "You need to improve."

Implementation
Implement the function to handle the described conditions and return the correct message based on the provided examples.
