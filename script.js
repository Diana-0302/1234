let obj = {
  a: 'f',
  b: 78,
  c: 'R',
  d: {
    a: {
      a: null,
      b: 'E',
      c: {
        a: true,
        b: 'C',
        c: 'test'
      },
      d: 'U'
    },
    b: {
     a: 'R',
     b: ['S', 4, 6, 'I'],
     c: 0,
    },
    c: ['O'],
    d: null,
    e: 'N'
  }
}


function getWord(object) {
  let word = "";
  for (let i in object) {   

      if (typeof object[i] === "object") {
          let x = getWord(object[i]);
          word += x;
      }

      else if (typeof object[i] === "string" && object[i] === object[i].toUpperCase()) {
          word += object[i];
      }
  }

  return word;
}

const mainWord = getWord(obj);

console.log(`The word is ${mainWord}`)
