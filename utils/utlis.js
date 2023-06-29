
export function createUpdateUser(promise){
    promise
    .then(response => {
        const list = document.createElement('ul')
        list.id = 'newUsersListUl'

        const userKeys = Object.keys(response)

        for (let i = 0; i < userKeys.length; i++){
            const listElem = document.createElement('li')
            listElem.innerText = `${userKeys[i]}: ${response[userKeys[i]]}`
            list.append(listElem)
        }

        newUserList.append(list)
    })
    .catch(error => console.log(error))
}


export function checkEmail(email) {
    let mail = email;
    let firstPart = mail.slice(0, mail.indexOf('@')).split('').map(function(x){
        if (x === '.'){
            return '!'
        }
        else
            return x
      })
      mail = firstPart.join('') + mail.slice(mail.indexOf('@'))
  

  let userName = mail.slice(0, mail.indexOf('@'));
  let domainName = mail.slice(mail.indexOf('@') + 1, mail.indexOf('.'));
  let domainExtens = mail.slice(mail.indexOf('.') + 1);

  let accessAt = mail.split("@").length - 1 === 1;
  let accessDot = mail.split(".").length - 1 === 1;
  let accessPos = mail.indexOf('@') < mail.indexOf('.');
  let accessLength = userName.length > 3 && domainName.length > 2 && domainExtens.length > 1;

  return (accessAt && accessDot && accessPos && accessLength);
}


export function checkPassword(password) {
  return (password.length < 6);
}