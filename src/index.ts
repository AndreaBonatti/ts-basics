// Literal (exact, specific)
let quantity: 50 | 100 = 50; // now the quanitity can only be 50 or 100

type Quantity = 50 | 100; // Literal type
let quanitityToo: Quantity = 50;

type Metric = "cm" | "inch"