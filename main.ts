function multi(a: number = 2, b: number = 3): number {
    const result = a * b;
    console.log(result);
    return result;
}

function saudacao(name: string = "Luiz"): string {
    const greeting = "Olá " + name;
    console.log(greeting);
    return greeting;
}
