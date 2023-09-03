function searchbian(arg,bian,kid,arr) {
    for (let i = 0; i < arg.length; i++) {
        if (arg[i] > 0) {
            kid += arg[i];
            arr.push(i);
            if (kid < bian) continue;
            else if (kid > bian) {
                kid = kid - arg[i];
                arr.pop();
            }
        }
    }
    return kid;
}
function CheckSquare(planks) {
    // write code here

    let sum = planks.reduce((a, b) => {
        return a + b;
    }, 0);

    if (sum % 4) return false;
    // console.log(sum);

    let bian = sum / 4;
    // console.log(bian);

    let kid = 0;
    let arr = [];

    kid = searchbian(planks, bian,kid,arr);
    // console.log(arr);
    if (kid != bian) return false;
    for (let i = 0; i < arr.length; i++) {
        planks.splice(arr[i], 1, -1);
    }
    // console.log(planks)

    kid = 0;
    arr = [];
    kid = searchbian(planks, bian,kid,arr);
    if (kid != bian) return false;
    for (let i = 0; i < arr.length; i++) {
        planks.splice(arr[i], 1, -1);
    }

    kid = 0;
    arr = [];
    kid = searchbian(planks, bian,kid,arr);
    if (kid != bian) return false;
    for (let i = 0; i < arr.length; i++) {
        planks.splice(arr[i], 1, -1);
    }

    kid = 0;
    arr = [];
    kid = searchbian(planks, bian,kid,arr);
    if (kid != bian) return false;
    for (let i = 0; i < arr.length; i++) {
        planks.splice(arr[i], 1, -1);
    }

    return true


}

console.log(CheckSquare([21,21,21,21,42,42,84,84,84,84]))