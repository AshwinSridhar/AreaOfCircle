function outerFunction(value){
    function innerFunction(value){
        return value * value;
    }
    alert(innerFunction(value));
}

outerFunction(10);