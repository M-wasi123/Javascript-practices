function display(val) {
    document.getElementById('result').value += val;
}
function display1() {
    document.getElementById('result').value ;
}
function solve1() {
    let x = document.getElementById('result').value;
    let y = eval(x);
    document.getElementById('result1').value =y;
        document.getElementById('result').value = ''; 
}

function clearScreen1() {
    document.getElementById('result1').value =''
}

function clearScreen() {
    document.getElementById('result').value =''
} 