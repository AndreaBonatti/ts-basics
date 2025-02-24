let numbers =[1, 2 ,'3']; // in js the arrays can contain elements of different type => more problems
let numbersToo: number[] =[1, 2 ,3]; // we can add the annotation to avoid the problem
let numberTooAgain = []; // array of any
numberTooAgain[0] = 1;
numberTooAgain[2] = "69";
// to avoid the problem here we need to add again the annotation
let numberTooAgainToo: number[] = [];
numberTooAgainToo.forEach(n => n.toPrecision) // the annotation help with the suggestion that the program can give us