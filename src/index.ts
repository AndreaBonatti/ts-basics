// let employee = {id: 1};
// employee.name = "Mosh"; // in js we can add new properties to an existing object later != ts
// let employee: {
//     id: number,
//     name: string
// } = {id: 1, name :""};
// 
// let employeeToo: { // This is possible but a bad practice beacuse an employee without a name has no sense
//     id: number,
//     name?: string
// } = {id: 1};

// Read-only properties => readolny
let employee: {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
} = {
    id: 1,
    name :" Mosh", 
    // retire(date) {
    //     console.log(date);
    // }
    retire: (date: Date) => {
        console.log(date)
    }
};