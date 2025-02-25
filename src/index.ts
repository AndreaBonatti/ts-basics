// type Customer = {
//     birthday: Date
// };

// function getCustomer(id: number): Customer | null {
//     return id === 0 ? null : {birthday: new Date()}
// }
// 
// let customer = getCustomer(0);
// // console.log(customer.birthday); errore per chè customer può essere null
// // 1) 
// if(customer !== null) 
//     console.log(customer.birthday);


// function getCustomer(id: number): Customer | null | undefined {
//     return id === 0 ? null : {birthday: new Date()}
// }
// 
// let customer = getCustomer(0);
// // console.log(customer.birthday); errore per chè customer può essere null
// // 1) 
// if(customer !== null && customer !== undefined) 
//     console.log(customer.birthday);
// // 2) optional property access operator
// console.log(customer?.birthday);

type Customer = {
    birthday?: Date
};

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : {birthday: new Date()}
}

let customer = getCustomer(0);
if(customer !== null && customer !== undefined) 
    console.log(customer.birthday);
console.log(customer?.birthday?.getFullYear);

// optional element access operator
// if (customers !== null && customers !== undefined)
//  customers[0]
// customers?.[0]

// optional call
let log: any = null;
log?.("a");