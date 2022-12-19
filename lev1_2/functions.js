export const firstOut = (a) => {
    return a[0];
};

export const lastAway = (a) => {
    const b = a.pop();
    return a;
};

export const lastOut = (a) => {
    return a.at(-1);
};

export const firstAway = (a) => {
    const b = a.shift();
    return a;
};

export const atPos = (a, n) => {
    return a[n];
};

export const deleteSpecific = (a, b) => {

    a.forEach(element => {
        if (element === b) {
            const pos = a.indexOf(b);
            a.splice(pos, 1);
        }
    });


    export const singleData = (a) => {
        let uniqueChars = [...new Set(a)];
        return uniqueChars;
    };



    export const randomNumber = (a, b) => {
        let randomnum = Math.floor(Math.random() * (b - a));
        return a + randomnum;
    };

    export const capitalized = (a) => {
        const nameCapitalized = a.charAt(0).toUpperCase() + a.slice(1);
        return nameCapitalized;
    };

    export const toUpperCase = (a) => {
        return a.toUpperCase();
    };


    export const checkSim = (e, f) => {
        return (e[e.length - 1] === f[f.length - 1]);
    };
