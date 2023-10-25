// function searchbian(arg, bian, log) {
//     let arr = [];
//     let l = 0;
//     while (l < arg.length - 1) {
//         let kid = 0;
//         for (let i = l; i < arg.length; i++) {
//                 kid += arg[i];
//                 arr.push(i);
//                 if (kid < bian) continue;
//                 else if (kid > bian) {
//                     kid = kid - arg[i];
//                     arr.pop();
//                 }
//         }

//         if (kid == bian) {
//             log.push(arr);
//             arr = [];
//             kid = 0;
//         }else{
//             kid = 0;
//             arr = [];
//         }
//         l++;
//     }

// }
function CheckSquare(planks) {
    let log = [];
    let sum = planks.reduce((a, b) => { return a + b }, 0)
    if (sum % 4) return false;
    let bian = sum / 4;

    log = findTargetTuples(planks,bian);
    console.log(log);
    let res = result(log);
    console.log(res);
}

// console.log(CheckSquare([21, 21, 21, 21, 42, 42, 84, 84, 84, 84]))

function findTargetTuples(arr, target) {
    const tuples = [];
  
    function findTuplesHelper(current, startIndex, remaining) {
      // 符合条件，将当前组合添加到结果数组中
    //   console.log(current,'---')
      if (remaining === 0) {
        tuples.push(current.slice());
        return;
      }
  
      // 递归遍历数组中的元素
      for (let i = startIndex; i < arr.length; i++) {
        // 当前元素大于剩余值，跳过
        if (arr[i] > remaining) {
          continue;
        }
  
        // 添加当前元素到当前组合
        current.push(i);
  
        // 递归寻找下一个元素
        findTuplesHelper(current, i+1, remaining - arr[i]);
  
        // 移除刚添加的元素，进行回溯
        current.pop();
      }
    }
  
    findTuplesHelper([], 0, target); // 从第0个索引开始寻找
  
    return tuples;
  }

function result(arr){
    let res = [];
    function returnBool(arr,index,current){
        if(current.length >= 4){
            res.push(current.slice());
        }

        for(let i = index; i < arr.length - 1; i++){
            // current.push(arr[i]);
            let newarr = [];
            for(let j = 0; j < res.length; j++){
                for(let k = 0; k < res[j].length;k++){
                    newarr = newarr.concat(arr[res[j][k]]);
                }
            }
            // console.log(newarr,'---')
            let muzi = newarr.concat(arr[i]);

            let set = new Set(muzi);
            if(set.size != newarr.length + arr[i].length)continue;
            else{
                // res.push(current.slice());
                current.push(i);
                // console.log(current,'---')
                returnBool(arr,i+1,current)
            }

            current.pop();
        }
    }
    returnBool(arr,0,[])
    return res;
}

// console.log(result([[1,2,3],[4,5],[6,7,8],[1,2]]))

//   console.log([21, 21, 21, 21, 42, 42, 84, 84, 84, 84].slice());

// CheckSquare([21, 21, 21, 21, 42, 42, 84, 84, 84, 84])

function childarr(arrlen,num2,arr){
  let map = new Map();
  for(let i = 0; i < arrlen - 1; i++){
      let sum = 0;
      for(let j = i; j < arrlen; j++){
          let midnum = 0;
          sum += arr[j];
          midnum = sum/(j-i+1);
          if(midnum == num2)map.set(j-i+1,true)

          console.log(map,'---')
      }
    sum = 0;
  }

  let res = Array.from(map.keys());
  
  res.sort((a,b)=>b-a);
  return res[0]
}

// console.log(childarr(23,2,[1,3,2,4,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]));

function grop(x,y,z) {
    // Write your code here
    // let line = await readline();
    // const [x,y,z] = line.split(' ').map(item=>parseInt(item));

    let grop = 0;
    let day = 0;
    let geli = 0;
    while(grop < z){
        if(geli == 0){
            grop = grop + x + y;
            geli = 2;
        }else {
            geli--;
            grop += x
        }
        day++;
    }

    console.log(day)
}

// grop(1,2,15)

function add(num,arr){
  let result = []
  for(let i = 0; i < num - 1 ; i++){
    let res = [];
    res.push(arr[i])
    for(let j = i + 1; j < num; j++){
        if(arr[j]%arr[j-1] == 0)res.push(arr[j])
    }
    console.log(res);
    result.push(res.length);
    res = [];
}

result.sort((a,b)=>b-a)

console.log(result[0])
}

// add(6,[1,2,4,8,16,32])

function count(arr){
  let obj = {};
  for(let i = 0; i < arr.length; i++){
    if(obj[arr[i]])obj[arr[i]]++;
    else{
      obj[arr[i]] = 1;
    }
  }
  let maxIndex = -1;
  let max = 0;
  for(let i in obj){
    if(obj[i] > max){
      max = obj[i];
      maxIndex = i;
    }
  }
  console.log(obj,maxIndex,max)
}

// count([1,1,1,3,4,5,6,7,7,8,8,2,8,8,8,88,56,8,8,9,0,0,0,12,0,0,120,2,3,2,34,1231,2,4])

function isprime(num) {
  for(let i = parseInt(num/2); i >= 2; i--){
    if(num%i == 0)return false;
  }
  return true;
}
// console.log(isprime(7))
function splitNum(num) {
  let arr = [];
  function deep(arr,mul){
    if(mul.number < num){
      for(let i = arr[0]||2; i <= num/2; i++){
        if(isprime(i)){
          arr.unshift(i)
          mul.number *= i;
          // console.log(arr,mul.number,'---')

          deep(arr,mul);
        }
      }
    }

    if(mul.number == num){
      // console.log(arr,'结果')
      return arr;
    }

    mul.number = mul.number/arr[0];
    arr.shift();
  }
  return deep(arr,{number:1});
  
}

console.log(splitNum(100))