
function triangle_ah() {
    let h = window.prompt("Введите длину высоту треугольника", "");
    let a = window.prompt("Введите длину стороны треугольника", "");

    if (h > 0 && a > 0) {
        window.alert("Ответ: Площадь треугольника - " + (a * h) / 2);
    } else {
        window.alert("Введены неверные данные.Попробуйте снова!");
    }
}

function triangle_aa() {
    let a1 = window.prompt("Введите длину 1-ой стороны треугольника", "");
    let a2 = window.prompt("Введите длину 2-ой стороны треугольника", "");
    let a = Number(window.prompt("Введите угол между сторонами треугольника. Угол должен быть больше 0," +
        " и меньше 180 градусов", ""));
    if (a1 > 0 && a2 > 0 && a > 0 && a < 180) {
        window.alert("Ответ: Площадь треугольника - " + (a1 * a2 * Math.sin(Math.PI * a / 180)) / 2);
    } else {
        window.alert("Введены неверные данные.Попробуйте снова!");
    }
}

function ress() {
    let a = 1
    let b = 100
    let res = 0
    while(a < 51){
      res += a*b
      a += 2
      b -= 2
    }
    window.alert("Ответ - " + res);
}

let matrice = new Array(3);
let com1 = 0
let com2 = 0
let res = 0
for (let i = 0; i < 3; i++) {
    matrice[i] = new Array(3);
      for (let j = 0; j < 3; j++) {
        matrice[i][j] = GetRandomInt(-10, 10);
    }
}

function mas_change() {
  for (let i = 1; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
          com1 += matrice[i][j];
          com2 += matrice[j][i];
    }
    if (com1 == com2){
      res += 1;
    }
  }
  if(res == 3){
    window.alert(matrice[0], matrice[1], matrice[2])
    window.alert("YES");
  }
  else{
    window.alert(matrice)
    window.alert("NO");
  }
}


function GetRandomInt(max, min) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}

function getArray(n){
  let array = new Array(n);
  for (let i = 0; i < n; i++) {
    array[i] = GetRandomInt(0, 10);
  }
  return array
}

function getResultArray(a, b) {
    return a.sort((a, b) => a - b)
}


let table = document.querySelector('#table');
let arr = [];
for(let i = 0; i < 9; i++){
  arr.push(GetRandomInt(20,1));
}
arr.sort();
console.log(arr);
arr = getResultArray(arr);
fillTable(table, arr);

function fillTable(table, arr) {
  let n = Math.sqrt(arr.length);
  let matrice2 = new Array(n);
  let iter = 0;

  for (let i = 0; i < n; i++) {
      matrice2[i] = new Array(n);
        for (let j = 0; j < n; j++) {
          matrice2[i][j] = n;
      }
  }
  for(let i=0; i < n; i ++){
    for(let j=0; j < n; j++){
      matrice2[i][j]=arr[iter];
      iter++;
    }
    if ((i+1)%2 == 1){
      matrice2[i] = matrice2[i].reverse();
    }
  }
  matrice2 = matrice2.reverse()
  console.log(matrice2)
    for (let i = 0; i < n; i++) {
      let tr = document.createElement('tr');
      for (let j = 0; j < n; j++) {
        let td = document.createElement('td');
        td.innerHTML = matrice2[i][j];
        tr.appendChild(td);
        }
    table.appendChild(tr);
  }
}
