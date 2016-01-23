var validateEmail = function (email) {
    if( email.indexOf('.') === -1 ||
        email.indexOf('@') === -1 ){
        return false;
    }else{
        return true;
    }
}

console.log(validateEmail('ashein@gmail.com'));
console.log(validateEmail('asheingmail.com'));

