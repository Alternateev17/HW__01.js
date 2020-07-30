let number = +prompt("Введите трехзначное числ:");

let str = number.toString();

let reverse = str.split("")
                 .reverse()
                 .join("");

alert(Number(reverse));
