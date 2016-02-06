function Person( fname , lname , age , phone){
    this.fname=fname;
    this.lname=lname;
    this.age=age;
    this.phone=phone;
}

var populateHtml=(function(){
    var person=new Person('person_firstname','person_lastnname',10,10202020);
    return function( value ){
        /*document.getElementById('fname').textContent=person.fname;
        document.getElementById('lname').textContent=person.lname;
        document.getElementById('age').textContent=person.age;
        document.getElementById('phone').textContent=person.phone;*/
        document.getElementById(value).textContent=person[value];
    }
})();

populateHtml('fname');
populateHtml('lname');
populateHtml('age');
populateHtml('phone');