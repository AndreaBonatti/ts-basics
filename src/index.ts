// let sales: number = 1234567890;
// let sales: number = 123_456_7890; // in ts we can divide large digits with _
// let course: string = "TypeScript";
// let is_published: boolean = true;
// ts known the value of a variable if it has a assigned value => we can remove the annotation in every let variable up here
let sales = 123_456_7890; // in ts we can divide large digits with _
let course = "TypeScript";
let is_published = true;
let level; // type === any, => we can change the type of value => bad
level = 1;
level = "a";

function render(document: any) { // implict cast of any inside a function create a problem => we need to explicit add : any
    console.log(document)
}