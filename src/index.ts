// If we wanna create another employee we need to repeat the employee structure
// We wanna always use the DRY principle => DRY === DO NOT REPEAT YOURSELF
let employee: {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
} = {
    id: 1,
    name :" Mosh", 
    retire: (date: Date) => {
        console.log(date)
    }
};

// => use of typealias
type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let employeeToo: Employee = {
    id: 1,
    name :" Mosh", 
    retire: (date: Date) => {
        console.log(date)
    }
};