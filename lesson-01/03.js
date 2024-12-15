/* Используйте цикл while для нахождения суммы всех нечётных чисел от 1 до 20.
  Результат вычислений сохраните в переменной sum.

  Вам понадобиться оператор остатка от деления %. Например, выражение 5 % 2 вернёт остаток 1.
*/

// your code
let sum = 0;

let countNumber = 1;
while (countNumber <= 20) {
  if (countNumber % 2 === 0) {
    console.log("четное число");
  } else {
    sum += countNumber
    console.log(sum);
  }
  countNumber++
}