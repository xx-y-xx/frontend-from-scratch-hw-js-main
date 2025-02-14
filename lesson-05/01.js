/*
Реализовать метод `addResource`, который будет добавлять указанное количество ресурсов к уже существующим ресурсам в объекте `game`.

Требования к методу:

1. Метод должен принимать два параметра:
  - `resource` (строка) — тип ресурса (`gold`, `lumber` и т.д.).
  - `amount` (число) — количество ресурса, которое нужно добавить.
2. Если тип ресурса не существует в объекте `game.resources`, метод должен выводить в консоль сообщение "Invalid resource".
3. Если ресурс существует, метод должен добавлять значение `amount` к текущему количеству этого ресурса в объекте.
*/

const game = {
  resources: {
    gold: 250,
    lumber: 100,
  },
  addResource(typeResource, amount) {
    if (typeof typeResource !== 'string' || !(typeResource in game.resources)){
      console.log("Invalid resource");
    } else {
      typeResource === 'gold' ? game.resources.gold += amount : game.resources.lumber += amount
    }
  }
}
// function addResource(typeResource, amount) {
//   if (typeof typeResource !== 'string' || !(typeResource in game.resources)){
//     console.log("Invalid resource");
//   } else {
//     typeResource === 'gold' ? game.resources.gold += amount : game.resources.lumber += amount
//   }
// }

// console.log('Добавление дерева ' + addResource('lumber', 1))
// console.log('Добавление золота ' + addResource('gold', 2))
// console.log('Ошибка добавления ' + addResource(1, 1))

// console.log('Добавление дерева ' + game.resources.gold)
// console.log('Добавление золота ' + game.resources.lumber)
