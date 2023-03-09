let operation;
let number;
let a;
let b;
let result;
let i;
let array = [];
let shouldRepeat;

do {
  do {
  operation = prompt('Выберите операцию (введите символ(ы)): \n Сложение: + \n Вычитание: - \n Умножение: * \n Деление: / \n Sin: sin \n Cos: cos \n Возведение в степень: pow \n История вычислений: history');
  } while(operation !== '+' && operation !== '-' && operation !== '*' && operation !== '/' && operation !== 'pow' && operation !== 'sin'  && operation !== 'cos' && operation !== 'history');

  switch(operation) {
    case '+':
    case '-':
    case '*': 
    case '/': 
    case 'pow':
      do {
        number = (prompt('Введите первое число'));
        a = +number;
      } while(number === '' || +number !== a);

      do {
        number = (prompt('Введите второе число'));
        b = +number;
      } while(number === '' || +number !== b);
      break;

    case 'sin':
    case 'cos':
      do {
        number = (prompt('Введите число в радианах'));
        a = +number;
      } while(number === '' || +number !== a);
      break;
  }

  switch(operation) {
    case '+':
      result = `${a} + ${b} = ${a + b}`;
      array[array.length] = result;
      break;
    case '-': 
      result = `${a} - ${b} = ${a - b}`; 
      array[array.length] = result;
      break;
    case '*': 
      result = `${a} * ${b} = ${a * b}`; 
      array[array.length] = result;
      break;
    case '/': 
      result = `${a} / ${b} = ${a / b}`; 
      array[array.length] = result;
      break;
    case 'pow':
      result = `${a} ^ ${b} = ${Math.pow(a, b)}`; 
      array[array.length] = result;
      break;
    case 'sin':
      result = `sin ${a} = ${Math.sin(a)}`; 
      array[array.length] = result;
      break;
    case 'cos':
      result = `cos ${a} = ${Math.cos(a)}`; 
      array[array.length] = result;
      break;
    case 'history':
      i = 0;
      while(i < array.length) {
      alert(`Your operations: ${array[i]}`); //для пользователя
      console.log(array[i]); //для себя
      i++;
      }
      if (array.length === 0) {
      alert('Нет вычислений')
      }   
  }

  if (operation !== 'history') {
    alert(`Operation ${operation} finished with result: ${result}`);
  }

  shouldRepeat = confirm('Хотите продолжить вычисления?')

} while(shouldRepeat);

alert('Thanks! Bye!');