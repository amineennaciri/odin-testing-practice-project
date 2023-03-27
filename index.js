function capitalize(str){
    str = str.split('');
    str[0] = str[0].toUpperCase();
    str = str.join('');
    return str;
}

function reverseString(str){
    str = str.split('');
    let arr = [];
    for(let i=0;i<=str.length-1;i++){
        arr[i] = str[str.length-1-i];
    }
    return arr.join('');
}

let calculator = {
    add : function(a,b){
        return a+b;
    },
    substract : function(a,b){
        return a-b;
    },
    divide : function(a,b){
        return a/b;
    },
    multiply : function(a,b){
        return a*b;
    }
}

function caesarCipher(str,shiftFactor){

} 

module.exports = { capitalize, reverseString, calculator, caesarCipher };