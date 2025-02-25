function greet(name: string) {
    console.log(name.toUpperCase());
}

greet(null); // crash on compilation, controllo da strictNullChecks in tsconfig.json

function greetToo(name: string | null | undefined) {
    if(name)
        console.log(name.toUpperCase());
    else
        console.log("Hola!")
}