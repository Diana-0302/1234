function createStack(){
    let stack = [];

    return {
        push(a){
            return stack.push(a);
        },

        pop(){
            return stack.pop();
        },

        getStack(){
            return stack;
        }
    }
}

// const stack = createStack()
// stack.push(1)
// stack.push(10)
// console.log(stack.getStack())
// stack.pop()
// console.log(stack.getStack())



function isBetween(min, max) {
  while ((!+min && min !== '0') || (!+max && max !== '0') || +min > +max) {
    min = prompt("Input min");
    max = prompt("Input max");
  }
  
  return function(elem) {
    return elem >= min && elem <= max;
  };
}

// let x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(isBetween())
// console.log(x)



function calculate(symbol) {
  while (symbol !== '+' && symbol !== '-' && symbol !== '*' && symbol !== '/' && symbol !== 'pow') {
    symbol = prompt('Введите операцию: \n+ \n- \n* \n/ \npow');
  }
  return function(a) {
    while (!+a && a !== '0') {
      a = prompt('Введите первое число');
    }
    return function(b) {
      while (!+b && b !== '0') {
        b = prompt('Введите второе число')
      }
      let result;
      a = Number(a);
      b = Number(b);
      switch (symbol) {
        case '+':
          result = a + b;
          break;
        case '-':
          result = a - b;
          break;
        case '*':
          result = a * b;
          break;
        case '/':
          result = a / b;
          break;
        case 'pow':
          result = Math.pow(a, b);
          break;
        }
        return result;
     }
  } 
}

// console.log(calculate()()());
// console.log(calculate('pow')(2)(3));


function sortByField(fieldName, sortType) {
  return function(a, b) {
    let result = 0;
    if (a[fieldName] > b[fieldName]) {
      result = 1;
    } 
    else if (a[fieldName] < b[fieldName]) {
      result = -1;
    }
    
    if (sortType === 'desc'){
      result *= -1
  }
    
    return result;
  }
}

const products = [
  {name: 'Product 1', quantity: 10, price: 25},
  {name: 'Product 2', quantity: 3, price: 55},
  {name: 'Product 3', quantity: 22, price: 35}
]


// console.log(products.sort(sortByField('price', 'asc')))
// console.log(products.sort(sortByField('price', 'desc')))
// console.log(products.sort(sortByField('quantity', 'asc')))
// console.log(products.sort(sortByField('quantity', 'desc')))
