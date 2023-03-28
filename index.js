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
    let alphaArr = 'abcdefghijklmnopqrstuvwxyz';
    alphaArr = alphaArr.split('');
    console.log(alphaArr);
    let store = alphaArr[0];
    alphaArr.shift();
    alphaArr.push(store);
    console.log(alphaArr);
    str = str.split('');
    for(let i = 0;i<= str.length-1;i++){
        if(str[i]==' '){
            continue; //"jumps over" one iteration in the loop.
        }else if(str[i]!=alphaArr[alphaArr.length-1]){
            for(let j = 0;j<= alphaArr.length-1;j++){
                if(str[i]==alphaArr[j] && str[i]===str[i].toUpperCase()){
                        str[i] = alphaArr[j+1].toUpperCase();
                        break;
                    }else{
                        str[i] = alphaArr[j+1];
                        break;
                }
            }
            
        }else if(str[i] == alphaArr[alphaArr.length-1]){
            if(str[i]===str[i].toUpperCase()){
                str[i] = alphaArr[0].toUpperCase();
            }else{
                str[i] = alphaArr[0];
            }
        }
    }
    return str.join('');
    // to correct this whole function is full of bugs and errors it is wrongly coded.
} 
console.log(caesarCipher('',1));
console.log(caesarCipher('Z',1));
module.exports = { capitalize, reverseString, calculator, caesarCipher };