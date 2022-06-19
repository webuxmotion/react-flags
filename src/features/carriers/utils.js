export const convertToArray = (data) => {
    const resultArr = [];

    Object.keys(data).forEach(el => {
        const arrayItem = {
            id: el,
            title: data[el],
        }

        resultArr.push(arrayItem);
    });

    return resultArr;
}