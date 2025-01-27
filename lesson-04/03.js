/*
Напишите функцию `findCommonElements`, которая принимает два массива и возвращает массив, содержащий общие элементы из обоих массивов.

Входные данные:

- `array1`: Первый массив, содержащий любые типы данных.
- `array2`: Второй массив, содержащий любые типы данных.

Выходные данные:

- Массив, содержащий элементы, которые присутствуют в обоих исходных массивах.
- Если общих элементов нет, должен вернуться пустой массив

Пример использования:
findCommonElements([1, 2, 3], [2, 3, 4]) // [2, 3]

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

// function findCommonElements() {}
const arrayA = [1, 2, 3,4];
const arrayB = [2, 3, 5, 6];

function includesElement(array, element) {
    let isResult = false; // совпадений нет
    for(let i = 0; i < array.length; i++){        
        isResult = element === array[i] ? true : isResult; // вместо true совпадение есть
    }
    return isResult;
}

function findCommonElements(arrayA ,arrayB) {
    const arrayCommonElements = [];
    for (let i = 0; i < arrayA.length; i++) {        
            if((includesElement(arrayA, arrayA[i])) && (includesElement(arrayB, arrayA[i]))) {
                arrayCommonElements.push(arrayA[i])
            }
        }
    return arrayCommonElements;
    }
console.log(findCommonElements(arrayA ,arrayB));