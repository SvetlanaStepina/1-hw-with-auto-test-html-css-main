/* Используйте цикл while для нахождения суммы всех нечётных чисел от 1 до 20.
  Результат вычислений сохраните в переменной sum.

  Вам понадобиться оператор остатка от деления %. Например, выражение 5 % 2 вернёт остаток 1.
*/

// your code
let sum = 0;
const MIN_VALUE = 1;
const MAX_VALUE = 20;
let current = MIN_VALUE;

  while (current <= MAX_VALUE) {
    if (current % 2 !== 0) {
      sum += current;
    }
    current++;  }

  console.log(sum);

