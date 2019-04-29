var side = 25;
var xotArr = []; 
var eatArr = []; 
var gishatichArr = [];

var krakArr = [];
var jurArr = [];

let matrix = [];
let rows = 20; 
let columns = 20; 

for (let y = 0; y < rows; y++) {
    matrix[y] = []; 
    for (let x = 0; x < columns; x++) {
    let a = Math.floor(Math.random()*100);
        if (a >= 0 && a < 15) {
            matrix[y][x] = 0; 
        } 
        if (a >= 15 && a < 60) {
            matrix[y][x] = 1; 
        } 
        else if (a >= 60 && a < 70) {
            matrix[y][x] = 2; 
        } 
        else if (a >= 70 && a < 80) {
            matrix[y][x] = 3; 
        } 
        else if(a >= 80 && a < 90) {
            matrix[y][x] = 4; 
        } 
        else if(a >= 90 && a < 100) {
            matrix[y][x] = 5;
        } 
    }
}
  
function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side); 
    background('#acacac');

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 2) {
                var eatgrass = new Eatgrass(x, y);
                eatArr.push(eatgrass);
            } else if(matrix[y][x] == 1) {
                var grass = new Grass(x, y);
                xotArr.push(grass);
            }
            else if (matrix[y][x] == 3){
                var g = new gishatich(x,y);
                gishatichArr.push(g);
            }
            else if (matrix[y][x] == 4){
                var h = new krak(x,y);
                krakArr.push(h);
            }
            else if(matrix[y][x] == 5){
                var b = new jur(x,y);
                jurArr.push(b);
            }
        }
    }
}

function draw() {
    background('#acacac');
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 1) {
                fill("green");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 2) {
                fill("yellow");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 0) {
                fill('gray');
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 3) {
                fill('orange');
                rect(j * side, i * side, side, side);
            }
            else if(matrix [i][j] == 4){
                fill("red");
                rect(j * side,i * side, side, side);
            }
            else if(matrix [i][j] == 5){
                fill("blue");
                rect(j * side,i * side, side, side);
            }
        }
    }

    for (var i in xotArr) {
        xotArr[i].mul();
    }
    for (var i in eatArr) {
        eatArr[i].eat();
    }
    for (var i in gishatichArr) {
        gishatichArr[i].eat();
    }
    for(var i in krakArr){
        krakArr[i].eat();
    }
    for(var i in jurArr){
        jurArr[i].move();
    }
}
