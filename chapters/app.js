// alert('hellow world')

// const tableNumber = +prompt('Table you want')

// document.write(`<h1>Table You Want</h1>`)

// for (let i = 1; i < 11; i++){
//     document.write(`<li> ${tableNumber} x ${i} = ${tableNumber * i} </li>`)
// }

var body = document.querySelector('body')
var gare = document.getElementById('gare')

gare.addEventListener('click', function () {
    var gradient =document.getElementById('gradient').innerHTML = (`<button style="padding:5px 10px">Gradient</button>`)
        var dark = document.getElementById('dark').innerHTML = (`<button style="padding:5px 10px">Dark</button>`)
        var light =document.getElementById('light').innerHTML = (`<button style="padding:5px 10px">Light</button>`)
})
gradient.addEventListener('click', function () {
    if (body) {
        body.style.background = 'linear-gradient(to right top, rgb(93, 93, 228),rgb(178, 109, 241),rgb(228, 167, 167) )'
        gare.style.color = 'black'
        body.style.color = 'black'
    }
})
dark.addEventListener('click', function () {
    if (body) {
        body.style.backgroundColor = 'rgb(54, 51, 51)'
        gare.style.color = 'white'
        body.style.color = 'black'
        
    }
})

light.addEventListener('click', function () {
    if (body) {
        body.style.backgroundColor = 'white'
        gare.style.color = 'black'
        body.style.color = 'black'
    }
})

const tableNum2 = 2
function firstclick(){
//     var back = (`<a href="./tables.html">Back</a>`)
// document.write(back)
    for (let i = 1; i < 2; i++){
        document.getElementById("table1").innerHTML = (`<li style='list-style:none;' > ${tableNum2} x ${i} = ${tableNum2 * i} </li>`)
    }
    for (let i = 1; i < 3; i++){
        document.getElementById("table2").innerHTML = (`<li style='list-style:none;' > ${tableNum2} x ${i} = ${tableNum2 * i} </li>`)
    }
    for (let i = 1; i < 4; i++){
        document.getElementById("table3").innerHTML = (`<li style='list-style:none;' > ${tableNum2} x ${i} = ${tableNum2 * i} </li>`)
    }
    for (let i = 1; i < 5; i++){
        document.getElementById("table4").innerHTML = (`<li style='list-style:none;' > ${tableNum2} x ${i} = ${tableNum2 * i} </li>`)
    }
    for (let i = 1; i < 6; i++){
        document.getElementById("table5").innerHTML = (`<li style='list-style:none;' > ${tableNum2} x ${i} = ${tableNum2 * i} </li>`)
    }
    for (let i = 1; i < 7; i++){
        document.getElementById("table6").innerHTML = (`<li style='list-style:none;' > ${tableNum2} x ${i} = ${tableNum2 * i} </li>`)
    }
    for (let i = 1; i < 8; i++){
        document.getElementById("table7").innerHTML = (`<li style='list-style:none;' > ${tableNum2} x ${i} = ${tableNum2 * i} </li>`)
    }
    for (let i = 1; i < 9; i++){
        document.getElementById("table8").innerHTML = (`<li style='list-style:none;' > ${tableNum2} x ${i} = ${tableNum2 * i} </li>`)
    }
    for (let i = 1; i < 10; i++){
        document.getElementById("table9").innerHTML = (`<li style='list-style:none;' > ${tableNum2} x ${i} = ${tableNum2 * i} </li>`)
    }
    for (let i = 1; i < 11; i++){
        document.getElementById("table10").innerHTML = (`<li style='list-style:none;' > ${tableNum2} x ${i} = ${tableNum2 * i} </li>`)
    }
}
const tableNum3 = 3
function secondclick(){

for (let i = 1; i < 2; i++){
    document.getElementById("table1").innerHTML = (`<li style='list-style:none;' > ${tableNum3} x ${i} = ${tableNum3 * i} </li>`)
}
for (let i = 1; i < 3; i++){
    document.getElementById("table2").innerHTML = (`<li style='list-style:none;' > ${tableNum3} x ${i} = ${tableNum3 * i} </li>`)
}
for (let i = 1; i < 4; i++){
    document.getElementById("table3").innerHTML = (`<li style='list-style:none;' > ${tableNum3} x ${i} = ${tableNum3 * i} </li>`)
}
for (let i = 1; i < 5; i++){
    document.getElementById("table4").innerHTML = (`<li style='list-style:none;' > ${tableNum3} x ${i} = ${tableNum3 * i} </li>`)
}
for (let i = 1; i < 6; i++){
    document.getElementById("table5").innerHTML = (`<li style='list-style:none;' > ${tableNum3} x ${i} = ${tableNum3 * i} </li>`)
}
for (let i = 1; i < 7; i++){
    document.getElementById("table6").innerHTML = (`<li style='list-style:none;' > ${tableNum3} x ${i} = ${tableNum3 * i} </li>`)
}
for (let i = 1; i < 8; i++){
    document.getElementById("table7").innerHTML = (`<li style='list-style:none;' > ${tableNum3} x ${i} = ${tableNum3 * i} </li>`)
}
for (let i = 1; i < 9; i++){
    document.getElementById("table8").innerHTML = (`<li style='list-style:none;' > ${tableNum3} x ${i} = ${tableNum3 * i} </li>`)
}
for (let i = 1; i < 10; i++){
    document.getElementById("table9").innerHTML = (`<li style='list-style:none;' > ${tableNum3} x ${i} = ${tableNum3 * i} </li>`)
}
for (let i = 1; i < 11; i++){
    document.getElementById("table10").innerHTML = (`<li style='list-style:none;' > ${tableNum3} x ${i} = ${tableNum3 * i} </li>`)
}
}
const tableNum4 = 4
function thirdclick(){
for (let i = 1; i < 2; i++){
    document.getElementById("table1").innerHTML = (`<li style='list-style:none;' > ${tableNum4} x ${i} = ${tableNum4 * i} </li>`)
}
for (let i = 1; i < 3; i++){
    document.getElementById("table2").innerHTML = (`<li style='list-style:none;' > ${tableNum4} x ${i} = ${tableNum4 * i} </li>`)
}
for (let i = 1; i < 4; i++){
    document.getElementById("table3").innerHTML = (`<li style='list-style:none;' > ${tableNum4} x ${i} = ${tableNum4 * i} </li>`)
}
for (let i = 1; i < 5; i++){
    document.getElementById("table4").innerHTML = (`<li style='list-style:none;' > ${tableNum4} x ${i} = ${tableNum4 * i} </li>`)
}
for (let i = 1; i < 6; i++){
    document.getElementById("table5").innerHTML = (`<li style='list-style:none;' > ${tableNum4} x ${i} = ${tableNum4 * i} </li>`)
}
for (let i = 1; i < 7; i++){
    document.getElementById("table6").innerHTML = (`<li style='list-style:none;' > ${tableNum4} x ${i} = ${tableNum4 * i} </li>`)
}
for (let i = 1; i < 8; i++){
    document.getElementById("table7").innerHTML = (`<li style='list-style:none;' > ${tableNum4} x ${i} = ${tableNum4 * i} </li>`)
}
for (let i = 1; i < 9; i++){
    document.getElementById("table8").innerHTML = (`<li style='list-style:none;' > ${tableNum4} x ${i} = ${tableNum4 * i} </li>`)
}
for (let i = 1; i < 10; i++){
    document.getElementById("table9").innerHTML = (`<li style='list-style:none;' > ${tableNum4} x ${i} = ${tableNum4 * i} </li>`)
}
for (let i = 1; i < 11; i++){
    document.getElementById("table10").innerHTML = (`<li style='list-style:none;' > ${tableNum4} x ${i} = ${tableNum4 * i} </li>`)
}
}
const tableNum5 = 5
function forthclick(){

for (let i = 1; i < 2; i++){
    document.getElementById("table1").innerHTML = (`<li style='list-style:none;' > ${tableNum5} x ${i} = ${tableNum5 * i} </li>`)
}
for (let i = 1; i < 3; i++){
    document.getElementById("table2").innerHTML = (`<li style='list-style:none;' > ${tableNum5} x ${i} = ${tableNum5 * i} </li>`)
}
for (let i = 1; i < 4; i++){
    document.getElementById("table3").innerHTML = (`<li style='list-style:none;' > ${tableNum5} x ${i} = ${tableNum5 * i} </li>`)
}
for (let i = 1; i < 5; i++){
    document.getElementById("table4").innerHTML = (`<li style='list-style:none;' > ${tableNum5} x ${i} = ${tableNum5 * i} </li>`)
}
for (let i = 1; i < 6; i++){
    document.getElementById("table5").innerHTML = (`<li style='list-style:none;' > ${tableNum5} x ${i} = ${tableNum5 * i} </li>`)
}
for (let i = 1; i < 7; i++){
    document.getElementById("table6").innerHTML = (`<li style='list-style:none;' > ${tableNum5} x ${i} = ${tableNum5 * i} </li>`)
}
for (let i = 1; i < 8; i++){
    document.getElementById("table7").innerHTML = (`<li style='list-style:none;' > ${tableNum5} x ${i} = ${tableNum5 * i} </li>`)
}
for (let i = 1; i < 9; i++){
    document.getElementById("table8").innerHTML = (`<li style='list-style:none;' > ${tableNum5} x ${i} = ${tableNum5 * i} </li>`)
}
for (let i = 1; i < 10; i++){
    document.getElementById("table9").innerHTML = (`<li style='list-style:none;' > ${tableNum5} x ${i} = ${tableNum5 * i} </li>`)
}
for (let i = 1; i < 11; i++){
    document.getElementById("table10").innerHTML = (`<li style='list-style:none;' > ${tableNum5} x ${i} = ${tableNum5 * i} </li>`)
}
}

const tableNum6 = 6
function fifthclick(){

for (let i = 1; i < 2; i++){
    document.getElementById("table1").innerHTML = (`<li style='list-style:none;' > ${tableNum6} x ${i} = ${tableNum6 * i} </li>`)
}
for (let i = 1; i < 3; i++){
    document.getElementById("table2").innerHTML = (`<li style='list-style:none;' > ${tableNum6} x ${i} = ${tableNum6 * i} </li>`)
}
for (let i = 1; i < 4; i++){
    document.getElementById("table3").innerHTML = (`<li style='list-style:none;' > ${tableNum6} x ${i} = ${tableNum6 * i} </li>`)
}
for (let i = 1; i < 5; i++){
    document.getElementById("table4").innerHTML = (`<li style='list-style:none;' > ${tableNum6} x ${i} = ${tableNum6 * i} </li>`)
}
for (let i = 1; i < 6; i++){
    document.getElementById("table5").innerHTML = (`<li style='list-style:none;' > ${tableNum6} x ${i} = ${tableNum6 * i} </li>`)
}
for (let i = 1; i < 7; i++){
    document.getElementById("table6").innerHTML = (`<li style='list-style:none;' > ${tableNum6} x ${i} = ${tableNum6 * i} </li>`)
}
for (let i = 1; i < 8; i++){
    document.getElementById("table7").innerHTML = (`<li style='list-style:none;' > ${tableNum6} x ${i} = ${tableNum6 * i} </li>`)
}
for (let i = 1; i < 9; i++){
    document.getElementById("table8").innerHTML = (`<li style='list-style:none;' > ${tableNum6} x ${i} = ${tableNum6 * i} </li>`)
}
for (let i = 1; i < 10; i++){
    document.getElementById("table9").innerHTML = (`<li style='list-style:none;' > ${tableNum6} x ${i} = ${tableNum6 * i} </li>`)
}
for (let i = 1; i < 11; i++){
    document.getElementById("table10").innerHTML = (`<li style='list-style:none;' > ${tableNum6} x ${i} = ${tableNum6 * i} </li>`)
}
}
const tableNum7 = 7
function sixthclick(){

for (let i = 1; i < 2; i++){
    document.getElementById("table1").innerHTML = (`<li style='list-style:none;' > ${tableNum7} x ${i} = ${tableNum7 * i} </li>`)
}
for (let i = 1; i < 3; i++){
    document.getElementById("table2").innerHTML = (`<li style='list-style:none;' > ${tableNum7} x ${i} = ${tableNum7 * i} </li>`)
}
for (let i = 1; i < 4; i++){
    document.getElementById("table3").innerHTML = (`<li style='list-style:none;' > ${tableNum7} x ${i} = ${tableNum7 * i} </li>`)
}
for (let i = 1; i < 5; i++){
    document.getElementById("table4").innerHTML = (`<li style='list-style:none;' > ${tableNum7} x ${i} = ${tableNum7 * i} </li>`)
}
for (let i = 1; i < 6; i++){
    document.getElementById("table5").innerHTML = (`<li style='list-style:none;' > ${tableNum7} x ${i} = ${tableNum7 * i} </li>`)
}
for (let i = 1; i < 7; i++){
    document.getElementById("table6").innerHTML = (`<li style='list-style:none;' > ${tableNum7} x ${i} = ${tableNum7 * i} </li>`)
}
for (let i = 1; i < 8; i++){
    document.getElementById("table7").innerHTML = (`<li style='list-style:none;' > ${tableNum7} x ${i} = ${tableNum7 * i} </li>`)
}
for (let i = 1; i < 9; i++){
    document.getElementById("table8").innerHTML = (`<li style='list-style:none;' > ${tableNum7} x ${i} = ${tableNum7 * i} </li>`)
}
for (let i = 1; i < 10; i++){
    document.getElementById("table9").innerHTML = (`<li style='list-style:none;' > ${tableNum7} x ${i} = ${tableNum7 * i} </li>`)
}
for (let i = 1; i < 11; i++){
    document.getElementById("table10").innerHTML = (`<li style='list-style:none;' > ${tableNum7} x ${i} = ${tableNum7 * i} </li>`)
}
}
const tableNum8 = 8
function sevenclick(){

for (let i = 1; i < 2; i++){
    document.getElementById("table1").innerHTML = (`<li style='list-style:none;' > ${tableNum8} x ${i} = ${tableNum8 * i} </li>`)
}
for (let i = 1; i < 3; i++){
    document.getElementById("table2").innerHTML = (`<li style='list-style:none;' > ${tableNum8} x ${i} = ${tableNum8 * i} </li>`)
}
for (let i = 1; i < 4; i++){
    document.getElementById("table3").innerHTML = (`<li style='list-style:none;' > ${tableNum8} x ${i} = ${tableNum8 * i} </li>`)
}
for (let i = 1; i < 5; i++){
    document.getElementById("table4").innerHTML = (`<li style='list-style:none;' > ${tableNum8} x ${i} = ${tableNum8 * i} </li>`)
}
for (let i = 1; i < 6; i++){
    document.getElementById("table5").innerHTML = (`<li style='list-style:none;' > ${tableNum8} x ${i} = ${tableNum8 * i} </li>`)
}
for (let i = 1; i < 7; i++){
    document.getElementById("table6").innerHTML = (`<li style='list-style:none;' > ${tableNum8} x ${i} = ${tableNum8 * i} </li>`)
}
for (let i = 1; i < 8; i++){
    document.getElementById("table7").innerHTML = (`<li style='list-style:none;' > ${tableNum8} x ${i} = ${tableNum8 * i} </li>`)
}
for (let i = 1; i < 9; i++){
    document.getElementById("table8").innerHTML = (`<li style='list-style:none;' > ${tableNum8} x ${i} = ${tableNum8 * i} </li>`)
}
for (let i = 1; i < 10; i++){
    document.getElementById("table9").innerHTML = (`<li style='list-style:none;' > ${tableNum8} x ${i} = ${tableNum8 * i} </li>`)
}
for (let i = 1; i < 11; i++){
    document.getElementById("table10").innerHTML = (`<li style='list-style:none;' > ${tableNum8} x ${i} = ${tableNum8 * i} </li>`)
}
}
const tableNum9 = 9
function eightclick(){

for (let i = 1; i < 2; i++){
    document.getElementById("table1").innerHTML = (`<li style='list-style:none;' > ${tableNum9} x ${i} = ${tableNum9 * i} </li>`)
}
for (let i = 1; i < 3; i++){
    document.getElementById("table2").innerHTML = (`<li style='list-style:none;' > ${tableNum9} x ${i} = ${tableNum9 * i} </li>`)
}
for (let i = 1; i < 4; i++){
    document.getElementById("table3").innerHTML = (`<li style='list-style:none;' > ${tableNum9} x ${i} = ${tableNum9 * i} </li>`)
}
for (let i = 1; i < 5; i++){
    document.getElementById("table4").innerHTML = (`<li style='list-style:none;' > ${tableNum9} x ${i} = ${tableNum9 * i} </li>`)
}
for (let i = 1; i < 6; i++){
    document.getElementById("table5").innerHTML = (`<li style='list-style:none;' > ${tableNum9} x ${i} = ${tableNum9 * i} </li>`)
}
for (let i = 1; i < 7; i++){
    document.getElementById("table6").innerHTML = (`<li style='list-style:none;' > ${tableNum9} x ${i} = ${tableNum9 * i} </li>`)
}
for (let i = 1; i < 8; i++){
    document.getElementById("table7").innerHTML = (`<li style='list-style:none;' > ${tableNum9} x ${i} = ${tableNum9 * i} </li>`)
}
for (let i = 1; i < 9; i++){
    document.getElementById("table8").innerHTML = (`<li style='list-style:none;' > ${tableNum9} x ${i} = ${tableNum9 * i} </li>`)
}
for (let i = 1; i < 10; i++){
    document.getElementById("table9").innerHTML = (`<li style='list-style:none;' > ${tableNum9} x ${i} = ${tableNum9 * i} </li>`)
}
for (let i = 1; i < 11; i++){
    document.getElementById("table10").innerHTML = (`<li style='list-style:none;' > ${tableNum9} x ${i} = ${tableNum9 * i} </li>`)
}
}
const tableNum10 = 10
function nineclick(){

for (let i = 1; i < 2; i++){
    document.getElementById("table1").innerHTML = (`<li style='list-style:none;' > ${tableNum10} x ${i} = ${tableNum10 * i} </li>`)
}
for (let i = 1; i < 3; i++){
    document.getElementById("table2").innerHTML = (`<li style='list-style:none;' > ${tableNum10} x ${i} = ${tableNum10 * i} </li>`)
}
for (let i = 1; i < 4; i++){
    document.getElementById("table3").innerHTML = (`<li style='list-style:none;' > ${tableNum10} x ${i} = ${tableNum10 * i} </li>`)
}
for (let i = 1; i < 5; i++){
    document.getElementById("table4").innerHTML = (`<li style='list-style:none;' > ${tableNum10} x ${i} = ${tableNum10 * i} </li>`)
}
for (let i = 1; i < 6; i++){
    document.getElementById("table5").innerHTML = (`<li style='list-style:none;' > ${tableNum10} x ${i} = ${tableNum10 * i} </li>`)
}
for (let i = 1; i < 7; i++){
    document.getElementById("table6").innerHTML = (`<li style='list-style:none;' > ${tableNum10} x ${i} = ${tableNum10 * i} </li>`)
}
for (let i = 1; i < 8; i++){
    document.getElementById("table7").innerHTML = (`<li style='list-style:none;' > ${tableNum10} x ${i} = ${tableNum10 * i} </li>`)
}
for (let i = 1; i < 9; i++){
    document.getElementById("table8").innerHTML = (`<li style='list-style:none;' > ${tableNum10} x ${i} = ${tableNum10 * i} </li>`)
}
for (let i = 1; i < 10; i++){
    document.getElementById("table9").innerHTML = (`<li style='list-style:none;' > ${tableNum10} x ${i} = ${tableNum10 * i} </li>`)
}
for (let i = 1; i < 11; i++){
    document.getElementById("table10").innerHTML = (`<li style='list-style:none;' > ${tableNum10} x ${i} = ${tableNum10 * i} </li>`)
}
}

function performsearch(){
    const tableNum11 = document.getElementById("search-input").value;
    if(0 < tableNum11){
    for (let i = 1; i < 2; i++){
        document.getElementById("table1").innerHTML = (`<li style='list-style:none;' > ${tableNum11} x ${i} = ${tableNum11 * i} </li>`)
    }
    for (let i = 1; i < 3; i++){
        document.getElementById("table2").innerHTML = (`<li style='list-style:none;' > ${tableNum11} x ${i} = ${tableNum11 * i} </li>`)
    }
    for (let i = 1; i < 4; i++){
        document.getElementById("table3").innerHTML = (`<li style='list-style:none;' > ${tableNum11} x ${i} = ${tableNum11 * i} </li>`)
    }
    for (let i = 1; i < 5; i++){
        document.getElementById("table4").innerHTML = (`<li style='list-style:none;' > ${tableNum11} x ${i} = ${tableNum11 * i} </li>`)
    }
    for (let i = 1; i < 6; i++){
        document.getElementById("table5").innerHTML = (`<li style='list-style:none;' > ${tableNum11} x ${i} = ${tableNum11 * i} </li>`)
    }
    for (let i = 1; i < 7; i++){
        document.getElementById("table6").innerHTML = (`<li style='list-style:none;' > ${tableNum11} x ${i} = ${tableNum11 * i} </li>`)
    }
    for (let i = 1; i < 8; i++){
        document.getElementById("table7").innerHTML = (`<li style='list-style:none;' > ${tableNum11} x ${i} = ${tableNum11 * i} </li>`)
    }
    for (let i = 1; i < 9; i++){
        document.getElementById("table8").innerHTML = (`<li style='list-style:none;' > ${tableNum11} x ${i} = ${tableNum11 * i} </li>`)
    }
    for (let i = 1; i < 10; i++){
        document.getElementById("table9").innerHTML = (`<li style='list-style:none;' > ${tableNum11} x ${i} = ${tableNum11 * i} </li>`)
    }
    for (let i = 1; i < 11; i++){
        document.getElementById("table10").innerHTML = (`<li style='list-style:none;' > ${tableNum11} x ${i} = ${tableNum11 * i} </li>`)
    }
}else if(0 <= tableNum11){
    alert('Please Enter 1,2,3')
}
else{
    alert('Please Enter Positive Number')
}
}

// document.write(`<li> ${tableNumber} x 1 = ${tableNumber * 1} </li>`)
// document.write(`<li> ${tableNumber} x 2 = ${tableNumber * 2} </li>`)
// document.write(`<li> ${tableNumber} x 3 = ${tableNumber * 3} </li>`)
// document.write(`<li> ${tableNumber} x 4 = ${tableNumber * 4} </li>`)
// document.write(`<li> ${tableNumber} x 5 = ${tableNumber * 5} </li>`)
// document.write(`<li> ${tableNumber} x 6 = ${tableNumber * 6} </li>`)
// document.write(`<li> ${tableNumber} x 7 = ${tableNumber * 7} </li>`)
// document.write(`<li> ${tableNumber} x 8 = ${tableNumber * 8} </li>`)
// document.write(`<li> ${tableNumber} x 9 = ${tableNumber * 9} </li>`)
// document.write(`<li> ${tableNumber} x 10 = ${tableNumber * 10} </li>`)