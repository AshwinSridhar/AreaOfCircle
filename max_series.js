function findMaxSequence(arr){

    var res = new Array();
    var tempres = new Array();
    tempresCounter=0
    for(var i=0; i<arr.length; i++) {
    
        if(arr[i] < arr[i+1]){
            tempres[tempresCounter]=arr[i];
            tempresCounter++;
        }else {
            if(tempres.length > res.length){
                tempres[tempresCounter]=arr[i];
                res=new Array();
                res=tempres;
            }
            tempres=new Array();
            tempresCounter=0;
        }
    }

    console.log(res)
}    



findMaxSequence([3, 2, 3, 4, 2, 2, 4]);
findMaxSequence([3, 5, 4, 6, 1, 2, 3, 6, 10, 32]);
findMaxSequence([3, 2, 1]);
