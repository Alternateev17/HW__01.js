let sum = +prompt("Введите сумму:");

let days = 60;

let percent = (((sum * 0.5) / days) * 2) / 2;

alert(`Сумма процентов за 2 месяца составит: ${percent.toFixed(2)} грн.`);