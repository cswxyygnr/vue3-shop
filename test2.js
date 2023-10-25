function solve(nums) {
    let res = [];
    // write code here
    let arr = nums.map((item) => {
        return String(item).split("");
    });

    function flat(arr) {
        for (let i = 0; i < arr.length; i++) {
            let type = typeof arr[i];
            if (type === "string") {
                res.push(arr[i] - 0);
            } else {
                flat(arr[i]);
            }
        }
    }

    flat(arr);
    //
    res.sort((a, b) => b - a);
    return res.join('');
}

// console.log(solve([2,100,100,1]));

function match(str){
    let len = str.length;

    let left = [];
    let right = [];
    for(let i = 0; i < len; i++){
        if(str[i]=='(')left.push(str[i]);
        else right.push(str[i]);
    }

    if(left.length == right.length)return true;
    else return false;
}

console.log(match('(())()('))