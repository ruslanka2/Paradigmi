let num = Number(prompt('Введите число'));
function tabl(num){
    let res = 0;
    for (let i = 1; i < num; i++) {
        res = i * num;
        console.log(`${i} * ${num} = ${res}`);
    }
}
tabl(num);