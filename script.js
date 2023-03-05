

const operation = prompt('Выберите операцию (введите символ(ы)): \n Сложение: + \n Вычитание: - \n Умножение: * \n Деление: / \n Sin: sin \n Cos: cos \n Возведение в степень: pow');

let a;
let b;


if (operation === '+'){
 a = Number(prompt('Введите первое число'));
 b = Number(prompt('Введите второе число'));
 console.log(a + b);
} else if (operation === '-') {
  a = Number(prompt('Введите первое число'));
  b = Number(prompt('Введите второе число'));
  console.log(a - b);
} else if (operation === '*') {
  a = Number(prompt('Введите первое число'));
  b = Number(prompt('Введите второе число'));
  console.log(a * b);
} else if (operation === '/') {
  a = Number(prompt('Введите первое число'));
  b = Number(prompt('Введите второе число'));
  console.log(a / b);
} else if (operation === 'sin') {
  a = Number(prompt('Введите число в радианах'));
  console.log(Math.sin(a));
} else if (operation === 'cos') {
  a = Number(prompt('Введите число в радианах'));
  console.log(Math.cos(a));
} else if (operation === 'pow') {
  a = Number(prompt('Введите число'));
  b = Number(prompt('Введите степень'));
  console.log(Math.pow(a, b));
} else {
  alert('Try again!');
}
