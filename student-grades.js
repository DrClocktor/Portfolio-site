let grades = [56, 72, 98, 84, 99, 94, 67, 69, 88, 100];
const gradesys= ["A", "B", "C", "D", "F"];
console.log(`There are ${grades.length} grades in the class`);

grades.forEach(grade => {
if (grade >= 90){
    console.log(`Student grade ${grade}: ${gradesys[0]}`)
}else if (grade < 90 && grade >= 80) {
    console.log(`Student grade ${grade}: ${gradesys[1]}`)
}else if (grade < 89 && grade >= 70) {
    console.log(`Student grade ${grade}: ${gradesys[2]}`)
}else if (grade < 79 && grade >= 60){
    console.log(`Student grade ${grade}: ${gradesys[3]}`)
}else {
    console.log (`Student grade ${grade}: ${gradesys[4]}`)
    }
});

let total = grades.reduce((sum, grade) => sum + grade, 0);
let count = grades.length;
let average = total / count;


if (average >= 90) {
    console.log("Overall Class performance: Excellent")
}else if (average < 90 && average >= 80) {
    console.log("Overall Class performance: Good")
}else if (average < 89 && average >= 70) {
    console.log("Overall Class performance: Satisfactory")
}else {
    console.log("Overall Class performance: Needs Improvement")
}

let highest = Math.max(...grades);
let lowest = Math.min(...grades);

console.log(`The highest grade is: ${highest} (${gradesys[0]})`)
console.log(`The lowest grade is: ${lowest} (${gradesys[4]})`)
console.log(`Average grade in class: ${average}`)


