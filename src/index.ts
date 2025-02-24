// ts can automatically infer the return type of a function
// best practice: always annotate
// function calculateTax(income: number, tax_year: number): number {
//     if(tax_year < 2022)
//         return income * 1.2;
//     return income * 1.3;
// }
// 
// calculateTax(10_000, 2022); // with ts we can only insert the exact number of parameters that we define in the function != js

// Optional parameters problem:
// 1) use an optional paramater
// function calculateTax(income: number, tax_year?: number): number { // ? === optional
//     if((tax_year || 2022) < 2022) // if the value is optional we can use the OR operator to make the default value
//         return income * 1.2;
//     return income * 1.3;
// }
// 
// calculateTax(10_000);

// 2) use a default value:
function calculateTax(income: number, tax_year = 2022): number { 
    if(tax_year < 2022)
        return income * 1.2;
    return income * 1.3;
}

calculateTax(10_000);
