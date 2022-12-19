
export const moreThan = (a) => {
    return a.filter((article) => article.population > 100000);
};

export const lessThan = (a) => {
    return a.filter((article) => article.population < 100000);

};
