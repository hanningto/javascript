let final = [32, 67, 89, 90, 87];
let midTerm = [98, 54, 78, 69, 54];
let cat = [45, 100, 75, 93, 80];

//funtion to calculate exam total, it takes 1 args(an array of marks)
function marksTotal(marks_array) {
  let startIndex = 0;
  total = 0;
  for (startIndex; startIndex < marks_array.length; startIndex++) {
    let i = marks_array[startIndex];
    total += i;
  }
  //   console.log(total / 5)
  return total / 5;
}

function checkGrade(totalMarks, examType) {
  if (totalMarks >= 89 && totalMarks <= 100) {
    console.log("Excellent job, you got an A+ in your " + examType);
  } else if (totalMarks >= 80 && totalMarks <= 88) {
    console.log("Good job, you got an A in your " + examType);
  } else if (totalMarks >= 75 && totalMarks <= 79) {
    console.log("Well done, you got a B+ in your " + examType);
  } else if (totalMarks >= 70 && totalMarks <= 74) {
    console.log("Nice work, you got a B in your " + examType);
  } else if (totalMarks >= 60 && totalMarks <= 69) {
    console.log("You got a C in your " + examType);
  } else if (totalMarks < 60) {
    console.log("You need to improve");
  }
}

let final_totalMarks = marksTotal(final);
let midTerm_totalMarks = marksTotal(midTerm);
let cat_totalMarks = marksTotal(cat);

checkGrade(final_totalMarks, "Final");
checkGrade(midTerm_totalMarks, "Midterm");
checkGrade(cat_totalMarks, "cat");
