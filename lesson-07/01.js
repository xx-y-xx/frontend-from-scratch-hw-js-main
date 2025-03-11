/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.


function capitalizeWords() {}
*/

const string = 'hello world from javascript'
function capitalizeWords(string) {
  let result = '';
  for (let i = 0; i < string.length; i++){
    if (string[i-1] === undefined || string[i-1] === ' ') {
      result += string[i].toUpperCase()
    } else { result += string[i]}
  }
  return result;
}
// console.log(capitalizeWords(string))