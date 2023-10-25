var multiply = function(num1, num2) {
    let len1 = num1.length;
    let len2 = num2.length;
    let res = []
    for(let i = len1 - 1; i >= 0; i--){
        let kid = '';
        let arr = [0,0]
        for(let j = len2 - 1; j >= 0; j--){
            let str = String(num2[j]*num1[i] + parseInt(arr[0]));
            // console.log(str,'----',j,'-----')
            if(str.length == 1){
                arr[1] = str;
                arr[0] = 0;
            }
            else arr = str.split('');

            kid = arr[1] + kid
        }
        if(arr[0] != 0){
            kid = arr[0] + kid
        }
        // console.log(kid)
        res.push(kid);
        kid = '';
        arr = [0,0];
    }
   
    let theji = 0
    for(let i = 0; i < res.length; i++){
        // theji += res[i] * Math.pow(10,i)
        res[i] = res[i].split("");
        for(let j = 0; j < i; j++){
            res[i].push('0');
        }
        res[i] = res[i].reverse();
    }

    for(let i = 0; i < res.length - 1; i++){
        let result = []
        let arr = [0,0]
        for(let j = 0; j < res[i].length; j++){
            let kid = parseInt(res[i][j]) + parseInt(res[i+1][j]) + arr[0]
            if(kid < 10){
                arr[0] = 0;
                result.push(String(kid));
            }else{
                arr = kid.split('')
                result.push(String(arr[1]))
            }
        }
    }
    return theji
};

// console.log(multiply('123456789','987654321'))

// console.log(456)
// console.log(123)

function sum(...args){
    let sum = 0;
    sum += args.reduce((a,b)=>a+b,0)
    if(args.length > 0)return sum(...rest)
    else return sum
}

function jishu(str){
    let obj = {};

    for(let i=0; i<str.length; i++){
        if(obj[str[i]])obj[str[i]]++;
        else obj[str[i]] = 1;
    }

    let max = 0;
    let char ='';
    for(let i in obj){
        if(obj[i]>max){
            max = obj[i];
            char = i;
        }
    }

    return char
}

console.log('abcd'>'aacd'?1:0)