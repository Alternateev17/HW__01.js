let memory = +prompt("Укажите объем памяти в Гб:");

let gigabyte = 1000;

let file = 820;

let result = ((gigabyte / file) * memory).toFixed();

alert(`На флеш носитель поместится ${result} файла(ов) размером 820Мб`)


