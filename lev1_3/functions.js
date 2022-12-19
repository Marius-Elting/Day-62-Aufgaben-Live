

export const functionA = (a, b, c) => {
    if (typeof (a) != "number" || typeof (b) != "number" || typeof (c) === "number") {

        console.log("error");
        return;
    }
    let d;
    switch (c) {
        case "+": d = a + b;
            break;
        case "-": d = a - b;
            break;
        case "*": d = a * b;
            break;
        case "/": d = a / b;
            break;
    }
    return d;
};