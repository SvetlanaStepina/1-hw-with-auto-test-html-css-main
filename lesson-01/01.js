// С помощью цикла while найдите сумму чисел от 1 до 20
// Результат присвойте переменной sum

// your code
let sum = 0;
const MIN_VALUE = 1;
const MAX_VALUE = 20;
let current = MIN_VALUE;

while (current <= MAX_VALUE) {
    sum += current;
    current++;
}
console.log(sum);