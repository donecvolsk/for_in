export const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};

export function orderByProps(obj, sortingArr ) {
    const result = [];          //массив с итоговыми значениями
    const objCopy = {...obj};   // копия исходного объекта obj
    const objRemains = [];      //массив предварительного формирования оставшихся свойств из objCopy

    //перебор массива sortingArr, добавление новых объектов в result, удаление ненужных дальше свойств в objCopy   
    sortingArr.forEach(element => {
        result.push({key: element, value: objCopy[element] });
        delete objCopy[element];
    });

    //перебор оставшихся свойств в objCopy и добавление новых объектов objRemains
    for(const key in objCopy) {
        objRemains.push({key, value: objCopy[key]});
    }

    //сортировка объектов в массиве objRemains по алфавиту.
    objRemains.sort((a, b) => {
        if(a.key < b.key) return -1;
    })

    //перебор массива objRemains и добавление из него объектов в массив result
    for (let i = 0; i < objRemains.length; i++) {
        result.push(objRemains[i]); 
    }
  
    return result;
}

const resultArray = orderByProps(obj, ["name", "level"]);
console.log(resultArray);


