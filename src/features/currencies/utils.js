export const convertToArray = (data) => {
    const resultArr = [];

    Object.keys(data).forEach(el => {
        const arrayItem = {
            id: el,
        }

        Object.keys(data[el]).forEach(item => {
            arrayItem.number = parseInt(item);
            arrayItem.symbol = data[el][item];
        });

        resultArr.push(arrayItem);
    });

    return resultArr;
}