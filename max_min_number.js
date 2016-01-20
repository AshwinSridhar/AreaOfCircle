var num = [ 10 ,20 ,30 ,40 ,50 ]

function minNumberFinder(){
    var min=num[0];
    for( var i=1; i < num.length; i++ ) {
        if(num[i] < min){
            min=num[i];
        }
    }

    console.log('The min of numbers is '+min);

}

function maxNumberFinder() {
    var max=num[0];
    for( var i=1; i < num.length; i++ ) {
        if(num[i] > max){
            max=num[i];
        }
    }

    console.log('The max of numbers is '+max);

}

maxNumberFinder();
minNumberFinder();