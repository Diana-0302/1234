let operation;
let a;
let b;
let result;
let i;
let array = [];
let shouldRepeat;

function validateOperation() {
  do {
    operation = prompt('Выберите операцию (введите символ(ы)): \n Сложение: + \n Вычитание: - \n Умножение: * \n Деление: / \n Sin: sin \n Cos: cos \n Возведение в степень: pow \n История вычислений: history');
  } while(operation !== '+' && operation !== '-' && operation !== '*' && operation !== '/' && operation !== 'pow' && operation !== 'sin'  && operation !== 'cos' && operation !== 'history');
  return operation;
}


function validateInput(i) {
  do {
    number = +prompt(i);
  } while(number === '' || !number);
  return number;
}
 

function sum(a, b) {
  return a + b;
}
function diff(a, b) {
  return a - b;
}
function mult(a, b) {
  return a * b;
}
function div(a, b) {
  return a / b;
}
function pow(a, b) {
  return Math.pow(a, b);
}
function sin(a) {
  return Math.sin(a);
}
function cos(a) {
  return Math.cos(a);
}

do {
  operation = validateOperation();

  switch(operation) {
    case '+':
    case '-':
    case '*': 
    case '/': 
    case 'pow':
      a = validateInput('Введите первое число');
      b = validateInput('Введите второе число');
      break;

    case 'sin':
    case 'cos':
      a = validateInput('Введите число в радианах');
      break;
  }

  switch(operation) {
    case '+':
      result = `${a} + ${b} = ${sum(a, b)}`;
      array[array.length] = result;
      break;
    case '-': 
      result = `${a} - ${b} = ${diff(a, b)}`; 
      array[array.length] = result;
      break;
    case '*': 
      result = `${a} * ${b} = ${mult(a, b)}`; 
      array[array.length] = result;
      break;
    case '/': 
      result = `${a} / ${b} = ${div(a, b)}`; 
      array[array.length] = result;
      break;
    case 'pow':
      result = `${a} ^ ${b} = ${pow(a, b)}`; 
      array[array.length] = result;
      break;
    case 'sin':
      result = `sin ${a} = ${sin(a)}`; 
      array[array.length] = result;
      break;
    case 'cos':
      result = `cos ${a} = ${cos(a)}`; 
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