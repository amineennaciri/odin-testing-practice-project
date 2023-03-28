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
    if(shiftFactor<=0){
        return `please enter a shift factor greater than zero`
    }
    let alphaArr = 'abcdefghijklmnopqrstuvwxyz';
    alphaArr = alphaArr.split('');
    //console.log(alphaArr);
    let store = alphaArr[0];
    alphaArr.shift();
    alphaArr.push(store);
    //console.log(alphaArr);
    str = str.split('');
    for(let i = 0;i<= str.length-1;i++){
        if(str[i]==' '){
            console.log('jump over');
            continue; //"jumps over" one iteration in the loop.
        }else if(str[i].toLowerCase()!=alphaArr[alphaArr.length-1]){
            for(let j = 0;j<= alphaArr.length-1;j++){
                if(str[i].toLowerCase() ===alphaArr[j] && str[i] === str[i].toUpperCase()){
                        str[i] = alphaArr[j+shiftFactor].toUpperCase();
                        //console.log('Upper Case');
                        //console.log(str);
                        break;
                    }else if(str[i] ===alphaArr[j]){
                        //console.log(alphaArr[j]);
                        //console.log(str[i]);
                        str[i] = alphaArr[j+shiftFactor];
                        //console.log('lower Case One');
                        //console.log(str);
                        break;
                }
            }
            
        }else if(str[i].toLowerCase() == alphaArr[alphaArr.length-1]){
            if(str[i]===str[i].toUpperCase()){
                str[i] = alphaArr[0+shiftFactor-1].toUpperCase();
                //console.log('Upper Case');
                //console.log(str);
            }else{
                str[i] = alphaArr[0+shiftFactor-1];
                //console.log('lower Case Two');
            }
        }
    }
    return str.join('');
    // to correct this whole function is full of bugs and errors it is wrongly coded.
}

function analyzeArray(arr){
    //const arr = arrA;
    let obj = {};
    obj.arr = arr;
    obj.length = arr.length;
    obj.average = function(arr = this.arr){
        //console.log(arr);
        const numerator = arr.reduce((accumulator, currentValue) => accumulator + currentValue,0);
        const denominator = arr.length;
        return numerator/denominator;
    }
    obj.min = function(arr = this.arr){
        let result = arr[0];
        for(let i = 0;i<=arr.length-1;i++){
            if(arr[i]<result){
                result = arr[i];
            }
        }
        return result;
    }
    obj.max = function(arr = this.arr){
        let result = arr[0];
        for(let i = 0;i<=arr.length-1;i++){
            if(arr[i]>result){
                result = arr[i];
            }
        }
        return result;
    }
    return obj;
}
//console.log(caesarCipher('',1));
/* console.log(caesarCipher('Z',1));//A
console.log(caesarCipher('z',1));//a 
console.log(caesarCipher('A',1));//B
console.log(caesarCipher('a',1));//b
console.log(caesarCipher('k',1));//l
console.log(caesarCipher('O',1));//P
console.log(caesarCipher('W',1));//X
console.log(caesarCipher('f',1));//g
console.log(caesarCipher('AttackOnDawn',1));//buubdlpoebxo
console.log(caesarCipher('?Attack.On:Dawn!',1));//?Buubdl.Po:Ebxo!
console.log(caesarCipher('AttackOnDawn',4));
console.log(caesarCipher('?Attack.On:Dawn!',4));
console.log(caesarCipher('?Attack.On:Dawn!',0)); */
module.exports = { capitalize, reverseString, calculator, caesarCipher, analyzeArray };

console.log(analyzeArray([1,8,3,4,2,6]).average());//4
console.log(analyzeArray([1,8,3,4,2,6]).min());//1
console.log(analyzeArray([1,8,3,4,2,6]).max());//8
console.log(analyzeArray([1,8,3,4,2,6]).length);//6