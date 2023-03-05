const operation = prompt('Выберите операцию (введите символ(ы)): \n Сложение: + \n Вычитание: - \n Умножение: * \n Деление: / \n Sin: sin \n Cos: cos \n Возведение в степень: pow');

let a;
let b;

switch(operation) {
  case '+':
  case '-':
  case '*': 
  case '/': 
  case 'pow':
    a = Number(prompt('Введите первое число'));
    b = Number(prompt('Введите второе число'));
    break;
  case 'sin':
  case 'cos':
    a = Number(prompt('Введите число в радианах'));
    break;
  default: alert('Try again!');
}

switch(operation) {
  case '+': 
    console.log(a + b);
    break;
  case '-': 
    console.log(a - b);
    break;
  case '*': 
    console.log(a * b);
    break;
  case '/': 
    console.log(a / b);
    break;
  case 'pow':
    console.log(Math.pow(a, b));
    break;
  case 'sin':
    console.log(Math.sin(a));
    break;
  case 'cos':
    console.log(Math.cos(a));
    break;
}
