
console.debug("hello")
document.addEventListener("DOMContentLoaded", main);

const deck = [];
let el = [];
const startDate = new Date();

function main(){
    console.debug("world")
    document.getElementById("btn-next").addEventListener("click", next);

    for (let i = 1; i<=13; i++){
        deck.push(i, i, i ,i);
    }
    shuffle(deck)
    console.debug(deck)

    for (let id of ["a","b","c","d"]){
        let e = document.getElementById(id);
        el.push(e);
    }
    console.debug(el);

    document.getElementById("start-time").value = startDate.getHours()
        + ":" + startDate.getMinutes() + ":" + startDate.getSeconds();
}

function next(){
    console.debug("next");
    if (deck.length >= el.length){
        for (let e of el){
            e.value = deck.pop();
        }
    } else {
        document.getElementById("msg").textContent = "扑克牌用完了";
        this.disabled = true;
    }
}
/**
    Fisher–Yates shuffle 洗牌算法

    Fisher–Yates shuffle 洗牌算法可以做到理论上的完全乱序

    lodash.js 中的 shuffle 函数也使用此算法实现
 */
function shuffle(array, size) {
    var index = -1,
        length = array.length,
        lastIndex = length - 1;

    size = size === undefined ? length : size;
    while (++index < size) {
        // var rand = baseRandom(index, lastIndex),
        var rand = index + Math.floor( Math.random() * (lastIndex - index + 1))
            value = array[rand];

        array[rand] = array[index];

        array[index] = value;
    }
    array.length = size;
    return array;
}
