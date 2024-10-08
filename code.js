function divideAndConquerSum(a) {

    if(a.length == 0){
        return a;
    }
    else if (a.length == 1){
        return a[0]
    }
    else if (a.length == 2){
        return a[0] + a[1];
    
    }
    else {
        var high = a.length - 1;
        var low = 0;
        var thirds = Math.floor((high + 1) / 3);
        var segBottom = low + thirds;
        var segMid = segBottom + thirds;
        var segTop = high;
       
        var leftSum = divideAndConquerSum(a.slice(low, segBottom));
        var middleSum = divideAndConquerSum(a.slice(segBottom, segMid));
        var rightSum = divideAndConquerSum(a.slice(segMid, segTop + 1));

            return leftSum + middleSum + rightSum;
    };




}
/*
low-----segBottom-----segMid-----segTop(High)
---leftSum-------middleSum---rightSum------
*/
