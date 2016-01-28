function validate(){
    var name = document.querySelector('#name').value;
    var age = document.querySelector('#age').value;
    var email = document.querySelector('#email').value;
    var errors = []
    if( name === "" ){
        errors.push("The name is empty. Please specify a name");
    }

    if( age === "" ){
        errors.push("The age is empty. Please specify a age");
    }

    if( email === "" ){
        errors.push("The email is empty. Please specify a email");
    }

    if( email !== "" && !emailValidation( email )){
        errors.push("The email is not a valid email. Please specify a valid email");
    }

    for( var i=0; i<errors.length ; i++ ){
        var list = document.createElement("li");
        list.appendChild(document.createTextNode(errors[i]));
        document.querySelector("#error").appendChild(list);
    }

}

function emailValidation(email){
    if( email.indexOf('.') === -1 ||
        email.indexOf('@') === -1 ){
        return false;
    }else{
        return true;
    }
}